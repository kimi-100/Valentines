document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. CONFETTI LOGIC ---
    function fireConfetti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff2d50', '#ffffff', '#ff99aa']
            });
        }
    }

    // --- 2. ADMISSION PORTAL PAGE (index.html) ---
    const decisionBtn = document.querySelector(".viewDecision");
    if (decisionBtn) {
        decisionBtn.addEventListener("click", function() {
            decisionBtn.innerText = "DEEP BREATHE...";
            setTimeout(() => {
                window.location.href = "letter.html"; 
            }, 1200);
        });
    }

    // --- 3. THE LETTER PAGE (letter.html) ---
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const song = document.getElementById("valentineSong");

    // Fire confetti immediately when the letter opens
    if (window.location.pathname.includes("letter.html") || yesBtn) {
        fireConfetti();
        if (song) {
            song.volume = 0.4;
            song.play().catch(() => console.log("Music waiting for interaction"));
        }
    }

    // Enrollment Button Logic
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            fireConfetti();
            if (song) song.play();
            document.querySelector('.call-to-action').innerHTML = "❤️ Enrollment Confirmed! See you on the 14th! ❤️";
            yesBtn.style.display = 'none';
            if (noBtn) noBtn.style.display = 'none';
        });
    }

    // Runaway "Decline" Button
    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
            const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        });
    }
});

