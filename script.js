const decisionBtn = document.querySelector("#viewDecision");

decisionBtn.addEventListener("click", function() {
    window.location.href = "letter.html"; 
});

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Play music and confetti on YES
yesBtn.addEventListener('click', () => {
    // Fire huge confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Change the text to something sweet
    document.querySelector('.call-to-action').innerText = "Registration Successful! See you on Feb 14th! ❤️";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

// The runaway "Decline" button (She can't say no!)
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});