// ════════ HYPER REALISTIC AMBIENT GOLD DUST SYSTEMS ════════
let dustCanvas, dustCtx, particlesArray = [];

function initAmbientDustEngine() {
    dustCanvas = document.getElementById('ambientDustCanvas');
    if(!dustCanvas) return;
    dustCtx = dustCanvas.getContext('2d');
    
    dustCanvas.width = window.innerWidth;
    dustCanvas.height = window.innerHeight;

    particlesArray = [];
    for (let i = 0; i < 65; i++) {
        particlesArray.push({
            x: Math.random() * dustCanvas.width,
            y: Math.random() * dustCanvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speedY: Math.random() * 0.4 + 0.1,
            speedX: Math.random() * 0.2 - 0.1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    function renderDustLoop() {
        dustCtx.clearRect(0, 0, dustCanvas.width, dustCanvas.height);
        particlesArray.forEach(p => {
            p.y += p.speedY; p.x += p.speedX;
            if (p.y > dustCanvas.height) { p.y = -5; p.x = Math.random() * dustCanvas.width; }
            
            dustCtx.beginPath();
            dustCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            dustCtx.fillStyle = `rgba(214, 175, 55, ${p.opacity})`;
            dustCtx.fill();
        });
        requestAnimationFrame(renderDustLoop);
    }
    renderDustLoop();
}

window.addEventListener('resize', () => {
    if (!dustCanvas) return;
    dustCanvas.width = window.innerWidth; dustCanvas.height = window.innerHeight;
});

// 🎁 2. VIDEO EXACT MATCH: SPLIT CURTAIN DEPLOYMENT
let isGateDestroyed = false;

function triggerGateDeployment() {
    if (isGateDestroyed) return;
    isGateDestroyed = true;

    const gateScreen = document.getElementById('gift-vault-screen');
    gateScreen.classList.add('gate-deployed');

    setTimeout(() => {
        gateScreen.style.display = 'none';
        document.getElementById('main-content-vault').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('main-content-vault').style.opacity = '1';
            initAmbientDustEngine(); // Fire background gold particles loop
            initScratchModule();      // Fire canvas scratch texture
            initCountdownEngine();   // Activate real-time countdown node
        }, 50);

        // Music Pipeline Execute
        const music = document.getElementById('bgMusic');
        const audioOrb = document.getElementById('audio-orb-controller');
        if (music) { 
            music.volume = 0.6; 
            music.play()
                .then(() => audioOrb.classList.add('playing'))
                .catch(() => console.log("Audio waiting interface context token.")); 
        }
        initScrollSurveillance();
    }, 1200);
}

// 🎵 3. FLUID AUDIO TRACK HUB
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

// ⏳ 4. REAL-TIME LIVE WEDDING COUNTDOWN TIMER ENGINE
function initCountdownEngine() {
    const weddingTimestamp = new Date("December 24, 2026 22:00:00").getTime();

    function updateClock() {
        const now = new Date().getTime();
        const gap = weddingTimestamp - now;

        if (gap < 0) {
            clearInterval(clockInterval);
            return;
        }

        const d = Math.floor(gap / (1000 * 60 * 60 * 24));
        const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((gap % (1000 * 60)) / 1000);

        document.getElementById('days-node').innerText = d < 10 ? '0' + d : d;
        document.getElementById('hours-node').innerText = h < 10 ? '0' + h : h;
        document.getElementById('mins-node').innerText = m < 10 ? '0' + m : m;
        document.getElementById('secs-node').innerText = s < 10 ? '0' + s : s;
    }
    
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
}

// 📸 5. INTERSECTION OVERSIGHT: RISE-AND-FADE PARALLAX EFFECT
function initScrollSurveillance() {
    const cards = document.querySelectorAll('.auto-parallax');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                entry.target.classList.add('active-center');
            } else {
                entry.target.classList.remove('active-center');
            }
        });
    }, {
        root: null, threshold: [0.1, 0.35, 0.85], rootMargin: "-10% 0px -10% 0px"
    });

    cards.forEach(card => scrollObserver.observe(card));
    window.addEventListener('scroll', crossfadeAudioSurveillance);
}

// 🎵 6. AUTOMATIC VIDEO AUDIO DUCK MECHANICS
function crossfadeAudioSurveillance() {
    const videoSection = document.getElementById('videoSectionNode');
    const bdayVideo = document.getElementById('vlogVideo');
    const bgMusic = document.getElementById('bgMusic');
    
    if (!videoSection || !bdayVideo || !bgMusic) return;

    const bounds = videoSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (bounds.top < viewportHeight * 0.6 && bounds.bottom > viewportHeight * 0.4) {
        if (bdayVideo.paused) {
            bdayVideo.play().catch(() => {});
            bgMusic.volume = 0.1; bdayVideo.volume = 0.95;
        }
    } else {
        if (!bdayVideo.paused) {
            bdayVideo.pause();
            bgMusic.volume = 0.6; 
        }
    }
}

// 🧮 7. HIGH-REALISM NOISE METALLIC GOLD FOIL SCRATCH GENERATOR
function initScratchModule() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const box = canvas.getBoundingClientRect();
    canvas.width = box.width; canvas.height = box.height;

    // Premium Realistic Antique Gold Chrome Texture
    let goldGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    goldGrad.addColorStop(0, '#7A5E18');  
    goldGrad.addColorStop(0.25, '#D4AF37'); 
    goldGrad.addColorStop(0.5, '#F9EBAE'); 
    goldGrad.addColorStop(0.75, '#B28D26'); 
    goldGrad.addColorStop(1, '#4E3B0B');  

    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Simulating true high-end matte grain texture overlay
    for (let i = 0; i < 900; i++) {
        let x = Math.random() * canvas.width; let y = Math.random() * canvas.height;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.09)';
        ctx.fillRect(x, y, 1.2, 1.2);
    }

    ctx.font = '900 11px Cinzel, serif';
    ctx.fillStyle = '#1A020B'; 
    ctx.letterSpacing = '3px';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL DETAILS', canvas.width / 2, canvas.height / 2 + 4);

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

// 🧧 8. SECURE FORM BLOCK TERMINAL HANDLER
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Response Received. Your blessing has been archived in the Royal Wedding Vault.");
    this.reset();
});
        
