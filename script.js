document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. INITIAL REVEAL ANIMATION ---
    // Animates the hero text on load
    setTimeout(() => {
        document.querySelectorAll('.reveal-text').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200);
        });
    }, 100);


    // --- 2. SCROLL REVEAL (Intersection Observer) ---
    // Fades in elements as they enter the viewport
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal-fade").forEach(el => scrollObserver.observe(el));


    // --- 3. HIGHLY INTERACTIVE: IMAGE REVEAL ON PROJECT HOVER ---
    // Follows the cursor with an image when hovering over a list item
    const projectItems = document.querySelectorAll('.project-item');
    const tracker = document.querySelector('.hover-image-tracker');
    const previewImg = document.getElementById('hover-preview');
    
    let mouseX = 0, mouseY = 0;
    let trackerX = 0, trackerY = 0;

    // Linear interpolation for buttery smooth trailing
    const lerp = (start, end, factor) => start + (end - start) * factor;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateTracker = () => {
        trackerX = lerp(trackerX, mouseX, 0.1);
        trackerY = lerp(trackerY, mouseY, 0.1);
        
        // Offset slightly so cursor isn't dead center blocking the view
        tracker.style.left = `${trackerX + 20}px`;
        tracker.style.top = `${trackerY + 20}px`;
        
        requestAnimationFrame(animateTracker);
    };
    animateTracker();

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgSrc = item.getAttribute('data-image');
            const fallbackSrc = item.getAttribute('data-fallback');
            
            previewImg.src = imgSrc;
            previewImg.onerror = () => { previewImg.src = fallbackSrc; };
            
            tracker.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            tracker.classList.remove('active');
        });
    });


    // --- 4. HIGHLY INTERACTIVE: MAGNETIC BUTTONS ---
    // Elements slightly pull towards the cursor when hovered
    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            const strength = btn.getAttribute('data-strength') || 20;
            
            btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

});
