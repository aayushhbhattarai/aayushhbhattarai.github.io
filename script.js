document.addEventListener('DOMContentLoaded', () => {
    // --- Custom Cursor ---
    const cursor = document.querySelector('.cursor');
    const hoverTargets = document.querySelectorAll('.hover-target, .work-item, .btn, .chip');

    // Only run cursor logic if it's not a touch device
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            // Use requestAnimationFrame for smoother performance
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => cursor.classList.add('active'));
            target.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // --- 3D Tilt Effect ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation (max 10 degrees)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = "none"; // Remove transition during hover to make it snappy
        });
    });

    // --- Lightbox Modal Logic ---
    const modal = document.getElementById('lightbox');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.modal-close');

    tiltCards.forEach(card => {
        card.addEventListener('click', () => {
            const src = card.getAttribute('data-src');
            const type = card.getAttribute('data-type');
            
            modalContent.innerHTML = ''; // Clear previous
            
            if (type === 'image') {
                const img = document.createElement('img');
                img.src = src;
                modalContent.appendChild(img);
            } else if (type === 'video') {
                const video = document.createElement('video');
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                modalContent.appendChild(video);
            }
            
            modal.classList.add('active');
        });
    });

    // Auto-play videos on hover for thumbnails
    document.querySelectorAll('video').forEach(vid => {
        vid.parentElement.addEventListener('mouseenter', () => vid.play());
        vid.parentElement.addEventListener('mouseleave', () => {
            vid.pause();
            vid.currentTime = 0;
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => { modalContent.innerHTML = ''; }, 400); // Clear after fade out
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); // Close if clicking outside content
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
});
