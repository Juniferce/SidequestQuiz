document.addEventListener('mousemove', (e) => {
    const items = document.querySelectorAll('.nav-item');
    const maxDist = 300; 

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        
        // Glow Effect Tracking
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        item.style.setProperty('--mouse-x', `${x}px`);
        item.style.setProperty('--mouse-y', `${y}px`);

        // Proximity Height Tracking (Desktop Only)
        if (window.innerWidth > 768) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.bottom; 
            const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

            let proximity = 1 - (dist / maxDist);
            if (proximity < 0) proximity = 0; 
            
            if (!item.matches(':hover')) {
                item.style.setProperty('--prox', proximity);
            } else {
                item.style.setProperty('--prox', '1');
            }
        }
    });
});