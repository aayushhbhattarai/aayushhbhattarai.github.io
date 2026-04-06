document.addEventListener('DOMContentLoaded', () => {

    // 1. Kinetic Text - Mouse Move Effect
    const texts = document.querySelectorAll('.kinetic-text');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        
        texts.forEach((text, i) => {
            const factor = (i + 1) * 0.5;
            text.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0)`;
        });
    });

    // 2. Magnetic Interaction
    const magnets = document.querySelectorAll('.mag');
    magnets.forEach(m => {
        m.addEventListener('mousemove', (e) => {
            const pos = m.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;
            m.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        m.addEventListener('mouseleave', () => {
            m.style.transform = `translate(0px, 0px)`;
        });
    });

    // 3. Project Hover Preview System
    const preview = document.querySelector('#project-preview');
    const previewImg = preview.querySelector('img');
    const workRows = document.querySelectorAll('.work-row');

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth follow for the preview box
    function movePreview() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        preview.style.left = `${currentX + 20}px`;
        preview.style.top = `${currentY + 20}px`;
        
        requestAnimationFrame(movePreview);
    }
    movePreview();

    workRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const img = row.getAttribute('data-img');
            previewImg.src = img;
            preview.classList.add('active');
        });
        row.addEventListener('mouseleave', () => {
            preview.classList.remove('active');
        });
    });

    // 4. Kinetic Scroll (Subtle text skew on scroll)
    let lastScroll = window.pageYOffset;
    function skewScroll() {
        const newScroll = window.pageYOffset;
        const diff = newScroll - lastScroll;
        const skew = diff * 0.1;
        
        document.querySelector('.kinetic-container').style.transform = `skewY(${skew}deg)`;
        
        lastScroll = newScroll;
        requestAnimationFrame(skewScroll);
    }
    window.addEventListener('scroll', skewScroll);
});
