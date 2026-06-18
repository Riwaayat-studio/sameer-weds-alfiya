// ════════ 1. REAL REALISTIC AMBIENT GOLD DUST ENGINE ════════
let dustCanvas, dustCtx, particlesArray = [];

function initAmbientDustEngine() {
    dustCanvas = document.getElementById('ambientDustCanvas');
    if(!dustCanvas) return;
    dustCtx = dustCanvas.getContext('2d');
    
    dustCanvas.width = window.innerWidth;
    dustCanvas.height = window.innerHeight;

    particlesArray = [];
    for (let i = 0; i < 60; i++) {
        particlesArray.push({
            x: Math.random() * dustCanvas.width,
            y: Math.random() * dustCanvas.height,
            radius: Math.random() * 1.4 + 0.4,
            speedY: Math.random() * 0.35 + 0.1,
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
            dustCtx.fillStyle = `rgba(197, 160, 89, ${p.opacity})`;
            dustCtx.fill();
        });
        requestAnimationFrame(renderDustLoop);
    }
    renderDustLoop();
}

// ════════ 2. DYNAMIC EXPLOSION ENGINE (SPARKLE BLAST ON TAP) ════════
let sparkleParticles = [];
function triggerSparkleBlast(clickX, clickY) {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.zIndex = '999999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    
    for (let i = 0; i < 85; i++) {
        sparkleParticles.push({
            x: clickX, y: clickY,
            radius: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 14,
            speedY: (Math.random() - 0.5) * 14,
            gravity: 0.15,
            opacity: 1,
            color: '#C5A059'
        });
    }
    
    function animateSparkles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        
        sparkleParticles.forEach(p => {
            p.speedY += p.gravity; p.x += p.speedX; p.y += p.speedY; p.opacity -= 0.02;
            if (p.opacity > 0) {
                alive = true;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197, 160, 89, ${p.opacity})`; ctx.fill();
            }
        });
        
        if (alive) { requestAnimationFrame(animateSparkles); } else { canvas.remove(); sparkleParticles = []; }
    }
    animateSparkles();
}

// 🚪 3. EXTRACT FROM 2ND VIDEO: GATEWAY INITIAL DEPTH ANIMATION
let isGateDestroyed = false;

function triggerGateDeployment() {
    if (isGateDestroyed) return;
    isGateDestroyed = true;

    const gateScreen = document.getElementById('gift-vault-screen');
    
    // Step A: Trigger Micro scale pop-up animation on core orb
    gateScreen.classList.add('orb-clicked');
    triggerSparkleBlast(window.innerWidth / 2, window.innerHeight / 2);

    // Step B: Deploy sliding gates after pop-up compression
    setTimeout(() => {
        gateScreen.classList.add('gate-deployed');
        
        setTimeout(() => {
            gateScreen.style.display = 'none';
            document.getElementById('main-content-vault').style.display = 'block';
            
            setTimeout(() => {
                document.getElementById('main-content-vault').style.opacity = '1';
                initAmbientDustEngine(); 
                initScratchModule();      
                initCountdownEngine();   
            }, 50);

            // Audio Stream Connection Setup
            const music = document.getElementById('bgMusic');
            const audioOrb = document.getElementById('audio-orb-controller');
            if (music) { 
                music.volume = 0.6; 
                music.play()
                    .then(() => audioOrb.classList.add('playing'))
                    .catch(() => console.log("Audio waiting interface token.")); 
            }
            initScrollSurveillance();
        }, 1100);
    }, 280);
}

// 🎵 4. AUDIO SWITCH CORE
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

// ⏳ 5. AUTOMATIC COUNTDOWN ENGINE MODULE
function initCountdownEngine() {
    const weddingTimestamp = new Date("December 24, 2026 22:00:00").getTime();

    function updateClock() {
        const now = new Date().getTime();
        const gap = weddingTimestamp - now;

        if (gap < 0) { clearInterval(clockInterval); return; }

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

// 🧮 6. HIGH-REALISM NOISE MATTE GOLD CANVAS SCRATCH SURFACE GENERATOR
function initScratchModule() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const box = canvas.getBoundingClientRect();
    canvas.width = box.width; canvas.height = box.height;

    let goldGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    goldGrad.addColorStop(0, '#6B5214');  
    goldGrad.addColorStop(0.3, '#C5A059'); 
    goldGrad.addColorStop(0.5, '#EFE0A7'); 
    goldGrad.addColorStop(0.7, '#A57E24'); 
    goldGrad.addColorStop(1, '#3E2F08');  

    ctx.fillStyle = goldGrad; ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 850; i++) {
        let x = Math.random() * canvas.width; let y = Math.random() * canvas.height;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
        ctx.fillRect(x, y, 1.2, 1.2);
    }

    ctx.font = '700 11px Cinzel, serif'; ctx.fillStyle = '#030813'; ctx.letterSpacing = '3px'; ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL DETAILS', canvas.width / 2, canvas.height / 2 + 4);

    let isDrawing = false;
    function scratchAction(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(clientX - rect.left, clientY - rect.top, 25, 0, Math.PI * 2); ctx.fill();
    }

    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mousemove', scratchAction);
    canvas.addEventListener('touchstart', () => isDrawing = true);
    canvas.addEventListener('touchend', () => isDrawing = false);
    canvas.addEventListener('touchmove', scratchAction);
}

// 📸 7. SCROLL OBSERVATION PHYSICS LAYER
function initScrollSurveillance() {
    const cards = document.querySelectorAll('.auto-parallax');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                entry.target.classList.add('active-center');
            } else { entry.target.classList.remove('active-center'); }
        });
    }, { root: null, threshold: [0.1, 0.35, 0.85], rootMargin: "-10% 0px -10% 0px" });

    cards.forEach(card => observer.observe(card));
    window.addEventListener('scroll', crossfadeAudioSurveillance);
}

function crossfadeAudioSurveillance() {
    const videoSection = document.getElementById('videoSectionNode');
    const video = document.getElementById('vlogVideo');
    const music = document.getElementById('bgMusic');
    if (!videoSection || !video || !music) return;

    const bounds = videoSection.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.6 && bounds.bottom > window.innerHeight * 0.4) {
        if (video.paused) { video.play().catch(() => {}); music.volume = 0.1; video.volume = 0.95; }
    } else { if (!video.paused) { video.pause(); music.volume = 0.6; } }
}

// 🧧 8. RSVP ENGINE CONDITIONAL CONDITIONAL VARIABLE HANDLING
let isAttendingWedding = true;
let selectedGuestCountValue = 1;

function setRSVPStatus(status) {
    isAttendingWedding = status;
    document.getElementById('btnAccept').classList.toggle('active', status);
    document.getElementById('btnDecline').classList.toggle('active', !status);
    
    const conditionalWrapper = document.getElementById('conditional-guests-node');
    if(status) {
        conditionalWrapper.classList.add('reveal-active');
    } else {
        conditionalWrapper.classList.remove('reveal-active');
        document.getElementById('manualGuestInput').value = '';
    }
}

function selectGuestCount(count) {
    selectedGuestCountValue = count;
    document.getElementById('manualGuestInput').value = ''; // Reset manual input
    const circles = document.querySelectorAll('.circle-opt');
    circles.forEach((c, idx) => {
        c.classList.toggle('active', idx === (count - 1));
    });
}

function clearCircleActiveState() {
    const circles = document.querySelectorAll('.circle-opt');
    circles.forEach(c => c.classList.remove('active'));
}

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let finalGuests = document.getElementById('manualGuestInput').value || selectedGuestCountValue;
    if(!isAttendingWedding) finalGuests = 0;
    
    alert(`Response Received! Status: ${isAttendingWedding ? 'Attending (' + finalGuests + ' guests)' : 'Declined'}. Securely archived in the Royal Vault.`);
    this.reset();
    setRSVPStatus(true);
    selectGuestCount(1);
});
                
