document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Custom Cursor Logic ---
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    const hoverables = document.querySelectorAll(".hoverable");

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant cursor
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Lerp function for smooth follower delay
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const animateFollower = () => {
        followerX = lerp(followerX, mouseX, 0.15);
        followerY = lerp(followerY, mouseY, 0.15);
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Hover states for cursor
    hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => follower.classList.add("hover-active"));
        el.addEventListener("mouseleave", () => follower.classList.remove("hover-active"));
    });

    // --- 2. Scroll Reveal Animations ---
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    // --- 3. Hero Background Glow Mouse Follow ---
    const heroGlow = document.querySelector(".hero-bg-glow");
    const heroSection = document.querySelector(".hero");

    heroSection.addEventListener("mousemove", (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Move the glow based on mouse position
        heroGlow.style.transform = `translate(calc(-50% + ${x/10}px), calc(-50% + ${y/10}px))`;
    });

    // --- 4. 3D Tilt Effect for Artwork ---
    const tiltCards = document.querySelectorAll(".tilt-card");

    tiltCards.forEach(card => {
        const inner = card.querySelector(".tilt-inner");

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation (max 10 degrees)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            // Reset on mouse leave with transition
            inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    });

    // --- 5. Lightbox Modal Logic ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const closeBtn = document.getElementById("lightbox-close");
    const triggers = document.querySelectorAll(".lightbox-trigger");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const imgSrc = trigger.getAttribute("data-img");
            const title = trigger.getAttribute("data-title");
            const desc = trigger.getAttribute("data-desc");

            // Handle missing images gracefully by falling back to the Unsplash placeholder used in HTML
            lightboxImg.src = imgSrc;
            lightboxImg.onerror = () => { lightboxImg.src = trigger.querySelector("img").src; };
            
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = ""; 
    };

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if(e.target === lightbox) closeLightbox();
    });
});
