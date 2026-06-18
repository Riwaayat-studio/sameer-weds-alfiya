// 🎁 1. DYNAMIC GATEWAY UNWRAP MECHANICS (轻量级 CSS 3D Split Control)
let isUnwrappingActive = false;

function unwrapGiftBox() {
    if (isUnwrappingActive) return;
    isUnwrappingActive = true;

    const gateScreen = document.getElementById('gift-vault-screen');
    gateScreen.classList.add('open-active');

    setTimeout(() => {
        gateScreen.style.display = 'none';
        const mainWorkspace = document.getElementById('main-content-vault');
        mainWorkspace.style.display = 'block';
        
        setTimeout(() => {
            mainWorkspace.style.opacity = '1';
            initScratchModule();
            triggerBirthdayBlast(); // Dynamic Foil Explosion Confetti
            initCountdownEngine();   // Activate Live Countdown Clock
        }, 50);

        // Music Trigger Track Configuration
        const music = document.getElementById('bgMusic');
        const audioOrb = document.getElementById('audio-orb-controller');
        if (music) { 
            music.volume = 0.65; 
            music.play()
                .then(() => audioOrb.classList.add('playing'))
                .catch(e => console.log("Audio awaiting gesture loop handle.")); 
        }
        initScrollSurveillance();
    }, 1100);
}

// 🎵 2. AUDIO ENGINE CONTROL BAR LOOP SWITCH
function toggleAudioEngine() {
    const music = document.getElementById('bgMusic');
    const audioOrb = document.getElementById('audio-orb-controller');
    if (!music) return;

    if (music.paused) {
        music.play();
        audioOrb.classList.add('playing');
    } else {
        music.pause();
        audioOrb.classList.remove('playing');
    }
}

// 💥 3. AUTOMATIC CHROMATIC METALLIC BURST ENGINE (CONFETTI ENGINE)
function triggerBirthdayBlast() {
    const canvas = document.getElementById('blastCanvas');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#D4AF37', '#0F1C33', '#FFF2F8', '#1b335c', '#614e11'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + 25, 
            sizeWidth: Math.random() * 6 + 4,
            sizeHeight: Math.random() * 12 + 6,
            speedX: Math.random() * 10 - 5,
            speedY: -(Math.random() * 15 + 10),
            gravity: 0.35,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function animateBlast() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeParticles = false;

        particles.forEach(p => {
            p.speedY += p.gravity; p.x += p.speedX; p.y += p.speedY; p.rotation += p.rotationSpeed;
            if (p.y <= canvas.height + 25) activeParticles = true;

            ctx.save(); ctx.translate(p.x, p.y); ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color; ctx.fillRect(-p.sizeWidth / 2, -p.sizeHeight / 2, p.sizeWidth, p.sizeHeight);
            ctx.restore();
        });

        if (activeParticles) { requestAnimationFrame(animateBlast); } else { canvas.style.display = 'none'; }
    }
    animateBlast();
}

// ⏳ 4. REAL-TIME LIVE WEDDING COUNTDOWN TIMER ENGINE
function initCountdownEngine() {
    const targetDate = new Date("December 24, 2026 22:00:00").getTime();

    function updateClock() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            clearInterval(clockInterval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days-node').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours-node').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('mins-node').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('secs-node').innerText = seconds < 10 ? '0' + seconds : seconds;
    }
    
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
}

// 📸 5. INTERSECTION SURVEILLANCE PARALLAX ANIMATION ENGINE
function initScrollSurveillance() {
    const cards = document.querySelectorAll('.auto-parallax');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                entry.target.classList.add('active-center');
            } else {
                entry.target.classList.remove('active-center');
            }
        });
    }, {
        root: null, threshold: [0.1, 0.4, 0.8], rootMargin: "-15% 0px -15% 0px"
    });

    cards.forEach(card => scrollObserver.observe(card));
    window.addEventListener('scroll', crossfadeAudioSurveillance);
}

// 🎵 6. AUTOMATIC VIDEO DUCK CONTROL MATRIX
function crossfadeAudioSurveillance() {
    const videoSection = document.getElementById('videoSectionNode');
    const bdayVideo = document.getElementById('vlogVideo');
    const bgMusic = document.getElementById('bgMusic');
    
    if (!videoSection || !bdayVideo || !bgMusic) return;

    const bounds = videoSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (bounds.top < viewportHeight * 0.6 && bounds.bottom > viewportHeight * 0.4) {
        if (bdayVideo.paused) {
            bdayVideo.play().catch(e => console.log("Video active."));
            bgMusic.volume = 0.1; 
            bdayVideo.volume = 0.9;
        }
    } else {
        if (!bdayVideo.paused) {
            bdayVideo.pause();
            bgMusic.volume = 0.65; 
        }
    }
}

// 🧮 7. BRUSHED METAL GOLD FOIL SCRATCH ENGINE
function initScratchModule() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const box = canvas.getBoundingClientRect();
    canvas.width = box.width; canvas.height = box.height;

    let goldGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    goldGrad.addColorStop(0, '#8A6E1F');  
    goldGrad.addColorStop(0.3, '#D4AF37'); 
    goldGrad.addColorStop(0.5, '#F3E5AB'); 
    goldGrad.addColorStop(0.7, '#AA8222'); 
    goldGrad.addColorStop(1, '#5A4510');  

    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 800; i++) {
        let x = Math.random() * canvas.width; let y = Math.random() * canvas.height;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
        ctx.fillRect(x, y, 1.5, 1.5);
    }

    ctx.font = '900 11px Cinzel, serif';
    ctx.fillStyle = '#050911'; 
    ctx.letterSpacing = '3px';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO UNVEIL VENUE', canvas.width / 2, canvas.height / 2 + 4);

    let isDrawing = false;

    function scratchAction(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = clientX - rect.left; const y = clientY - rect.top;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 24, 0, Math.PI * 2); ctx.fill();
    }

    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mousemove', scratchAction);

    canvas.addEventListener('touchstart', () => isDrawing = true);
    canvas.addEventListener('touchend', () => isDrawing = false);
    canvas.addEventListener('touchmove', scratchAction);
}

// 🧧 8. PERSONALIZED RSVP VAULT FORM CONFIRMATION
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your response has been securely archived in the Royal Wedding Vault.");
    this.reset();
});
          
