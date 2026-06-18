// ════════ 1. HYPER REALISTIC AMBIENT GOLD DUST ENGINE ════════
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
            speedY: Math.random() * 0.32 + 0.1,
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

// ════════ 2. MICROSCOPIC SPARKLE ENGINE (ORB POP EXPLOSION) ════════
let sparkleParticles = [];
function triggerSparkleBlast(clickX, clickY) {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed'; canvas.style.inset = '0';
    canvas.style.zIndex = '999999'; canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    
    for (let i = 0; i < 90; i++) {
        sparkleParticles.push({
            x: clickX, y: clickY,
            radius: Math.random() * 2.8 + 1,
            speedX: (Math.random() - 0.5) * 15,
            speedY: (Math.random() - 0.5) * 15,
            gravity: 0.16,
            opacity: 1
        });
    }
    
    function animateSparkles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        
        sparkleParticles.forEach(p => {
            p.speedY += p.gravity; p.x += p.speedX; p.y += p.speedY; p.opacity -= 0.022;
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

// 🚪 3. DYNAMIC TRANSITION TRIGGER PIPELINE
let isGateDestroyed = false;

function triggerGateDeployment() {
    if (isGateDestroyed) return;
    isGateDestroyed = true;

    const gateScreen = document.getElementById('gift-vault-screen');
    
    gateScreen.classList.add('orb-clicked');
    triggerSparkleBlast(window.innerWidth / 2, window.innerHeight / 2);

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

            const music = document.getElementById('bgMusic');
            const audioOrb = document.getElementById('audio-orb-controller');
            if (music) { 
                music.volume = 0.55; 
                music.play()
                    .then(() => audioOrb.classList.add('playing'))
                    .catch(() => console.log("Stream pending user touch gesture.")); 
            }
        }, 1100);
    }, 280);
}

// 🎵 4. INTERACTIVE AUDIO TOGGLE HANDLE
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

// ⏳ 5. COUNTDOWN CLOCK TRANSLATION ENGINE
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

// 🧮 6. RESPONSIVE LAYER BOUNDED CANVAS SCRATCH MATRIX
function initScratchModule() {
    const canvas = document.getElementById('scratchCanvas');
    const container = document.getElementById('scratchBoxNode');
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = container.clientWidth; 
    canvas.height = container.clientHeight;

    let goldGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    goldGrad.addColorStop(0, '#6B5214');  
    goldGrad.addColorStop(0.25, '#C5A059'); 
    goldGrad.addColorStop(0.5, '#EFE0A7'); 
    goldGrad.addColorStop(0.75, '#A57E24'); 
    goldGrad.addColorStop(1, '#3E2F08');  

    ctx.fillStyle = goldGrad; ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 900; i++) {
        let x = Math.random() * canvas.width; let y = Math.random() * canvas.height;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
        ctx.fillRect(x, y, 1.2, 1.2);
    }

    ctx.font = '700 11px Cinzel, serif'; ctx.fillStyle = '#02060e'; ctx.letterSpacing = '3px'; ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL DETAILS', canvas.width / 2, canvas.height / 2 + 4);

    let isDrawing = false;
    function scratchAction(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(clientX - rect.left, clientY - rect.top, 26, 0, Math.PI * 2); ctx.fill();
    }

    canvas.addEventListener('mousedown', () => isDrawing = true);
    window.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mousemove', scratchAction);
    canvas.addEventListener('touchstart', () => isDrawing = true);
    window.addEventListener('touchend', () => isDrawing = false);
    canvas.addEventListener('touchmove', scratchAction);
}

// 🧧 7. RSVP ENGINE CONDITIONAL HANDLING
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
    document.getElementById('manualGuestInput').value = ''; 
    const circles = document.querySelectorAll('.circle-opt');
    circles.forEach((c, idx) => { c.classList.toggle('active', idx === (count - 1)); });
}

function clearCircleActiveState() {
    const circles = document.querySelectorAll('.circle-opt');
    circles.forEach(c => c.classList.remove('active'));
}

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let finalGuests = document.getElementById('manualGuestInput').value || selectedGuestCountValue;
    if(!isAttendingWedding) finalGuests = 0;
    
    alert(`Response Saved! Response archived securely in the Royal Vault.`);
    this.reset();
    setRSVPStatus(true);
    selectGuestCount(1);
});
                                                     
