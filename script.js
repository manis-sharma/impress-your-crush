const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const clamp = (v,min,max) => Math.max(min, Math.min(max, v));

// Photo Upload Management
const uploadedPhotos = [];
const photoInput = $('#photoInput');
const previewGrid = $('#previewGrid');
const continueBtn = $('#continueWithPhotos');

photoInput.addEventListener('change', handlePhotoUpload);

function handlePhotoUpload(e) {
  const files = Array.from(e.target.files);
  
  files.forEach(file => {
    if (uploadedPhotos.length >= 4) return;
    
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        uploadedPhotos.push(event.target.result);
        updatePreview();
      };
      
      reader.readAsDataURL(file);
    }
  });
  
  photoInput.value = '';
}

function updatePreview() {
  const previewItems = $$('.preview-item');
  
  previewItems.forEach((item, index) => {
    item.innerHTML = '';
    
    if (uploadedPhotos[index]) {
      const img = document.createElement('img');
      img.src = uploadedPhotos[index];
      img.alt = `Photo ${index + 1}`;
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.innerHTML = '×';
      removeBtn.onclick = () => removePhoto(index);
      
      item.appendChild(img);
      item.appendChild(removeBtn);
    } else {
      item.textContent = `Photo ${index + 1}`;
    }
  });
  
  continueBtn.disabled = uploadedPhotos.length !== 4;
}

function removePhoto(index) {
  uploadedPhotos.splice(index, 1);
  updatePreview();
}

continueBtn.addEventListener('click', () => {
  if (uploadedPhotos.length === 4) {
    show(step1);
    playMusic();
    loading.classList.add('hide');
    revealLines();
  }
});

// App Navigation
const loading = $('#loading');
const startBtn = $('#startBtn');
const bgm = $('#bgm');
const photoUpload = $('#photoUpload');
const step1 = $('#step1');
const step2 = $('#step2');
const step3 = $('#step3');
const step4 = $('#step4');

function playMusic() { 
  bgm.muted = false; 
  bgm.play().catch(() => {}); 
}

startBtn.addEventListener('click', () => {
  loading.classList.add('hide');
});

function show(step) {
  [photoUpload, step1, step2, step3, step4].forEach(s => s.classList.remove('show'));
  step.classList.add('show');
}

function revealLines() {
  setTimeout(() => { $('#line2').style.opacity = 1 }, 900);
  setTimeout(() => { $('#line3').style.opacity = 1 }, 1800);
}

$('#toProposal').addEventListener('click', () => { 
  show(step2);
  isNoRunning = true;
  keepNoRunning();
});

// Proposal Buttons
const yesBtn = $('#yesBtn');
const noBtn = $('#noBtn');
const actionArea = $('#actionArea');
let isNoRunning = false;

function keepNoRunning() {
  if (!isNoRunning) return;
  const areaRect = actionArea.getBoundingClientRect();
  const maxX = areaRect.width - noBtn.offsetWidth;
  const maxY = areaRect.height - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.transition = 'transform 0.3s ease-out';
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  setTimeout(keepNoRunning, 800 + Math.random() * 700);
}

yesBtn.addEventListener('click', () => {
  isNoRunning = false;
  populateHeartCollage();
  show(step3);
  setTimeout(() => $('#heartCollage').classList.add('show'), 200);
  startSparkles();
});

function populateHeartCollage() {
  const collage = $('#heartCollage');
  collage.innerHTML = '';
  
  uploadedPhotos.forEach((photo, index) => {
    const img = document.createElement('img');
    img.src = photo;
    img.alt = `Memory ${index + 1}`;
    collage.appendChild(img);
  });
}

// No button evasion
const MIN_DIST = 32;

function moveNoAway(px, py) {
  const areaRect = actionArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const cx = btnRect.left + btnRect.width / 2;
  const cy = btnRect.top + btnRect.height / 2;
  const dx = cx - px;
  const dy = cy - py;
  const dist = Math.hypot(dx, dy) || 0.0001;
  const away = dist < MIN_DIST ? (MIN_DIST - dist + 8) : 8;
  const nx = cx + (dx / dist) * away + (Math.random() * 10 - 5);
  const ny = cy + (dy / dist) * away + (Math.random() * 10 - 5);
  let localX = clamp(nx - areaRect.left - btnRect.width / 2, 0, areaRect.width - btnRect.width);
  let localY = clamp(ny - areaRect.top - btnRect.height / 2, 0, areaRect.height - btnRect.height);
  noBtn.style.transform = `translate(${localX}px, ${localY}px)`;
}

function seedNo() {
  const a = actionArea.getBoundingClientRect();
  const y = (a.height - noBtn.offsetHeight) / 2;
  noBtn.style.transform = `translate(${a.width / 2 + 60}px, ${y}px)`;
}

window.addEventListener('resize', seedNo);
actionArea.addEventListener('pointermove', e => { moveNoAway(e.clientX, e.clientY) });
noBtn.addEventListener('pointerenter', e => { moveNoAway(e.clientX, e.clientY) });
noBtn.addEventListener('click', e => { e.preventDefault(); moveNoAway(e.clientX, e.clientY) });
actionArea.addEventListener('touchstart', e => { 
  const t = e.touches[0]; 
  if (t) moveNoAway(t.clientX, t.clientY); 
}, {passive: true});
requestAnimationFrame(seedNo);

// Floating hearts animation
const canvas = $('#hearts');
const ctx = canvas.getContext('2d');
let W, H, hearts = [];

function resize() { 
  W = canvas.width = innerWidth; 
  H = canvas.height = innerHeight; 
}

window.addEventListener('resize', resize); 
resize();

function spawnHeart() { 
  const x = Math.random() * W; 
  const y = H + 20; 
  hearts.push({ 
    x, y, 
    r: 6 + Math.random() * 10, 
    vy: 0.5 + Math.random() * 1.3, 
    alpha: 0.6 + Math.random() * 0.4, 
    wob: Math.random() * Math.PI * 2 
  }); 
}

function drawHeart(x, y, size, a) { 
  ctx.save(); 
  ctx.translate(x, y); 
  ctx.scale(size / 20, size / 20); 
  ctx.globalAlpha = a; 
  ctx.beginPath(); 
  ctx.moveTo(0, 6); 
  ctx.bezierCurveTo(0, 0, -10, 0, -10, 6); 
  ctx.bezierCurveTo(-10, 12, 0, 16, 0, 22); 
  ctx.bezierCurveTo(0, 16, 10, 12, 10, 6); 
  ctx.bezierCurveTo(10, 0, 0, 0, 0, 6); 
  ctx.closePath(); 
  const grd = ctx.createLinearGradient(-10, -5, 10, 22); 
  grd.addColorStop(0, '#ff99ac'); 
  grd.addColorStop(1, '#ff4d6d'); 
  ctx.fillStyle = grd; 
  ctx.fill(); 
  ctx.restore(); 
}

function tick() { 
  ctx.clearRect(0, 0, W, H); 
  if (Math.random() < 0.15) spawnHeart(); 
  hearts.forEach(h => { 
    h.y -= h.vy; 
    h.x += Math.sin(h.wob += 0.03) * 0.6; 
    h.alpha -= 0.0025; 
  });
  hearts = hearts.filter(h => h.y > -30 && h.alpha > 0); 
  hearts.forEach(h => drawHeart(h.x, h.y, h.r * 2, h.alpha)); 
  requestAnimationFrame(tick);
} 
tick();

// Music toggle
const audioToggle = $('#audioToggle');

function updateBtn() {
  audioToggle.textContent = bgm.muted ? '🔈 Music: Off' : '🔊 Music: On';
  audioToggle.setAttribute('aria-pressed', String(!bgm.muted));
}

audioToggle.addEventListener('click', () => {
  bgm.muted = !bgm.muted;
  if (!bgm.paused && !bgm.muted) bgm.play().catch(() => {});
  updateBtn();
});

bgm.addEventListener('play', updateBtn);
bgm.addEventListener('volumechange', updateBtn);

// To step 4
$('#toStep4').addEventListener('click', () => { show(step4); });

// Enhanced Sparkles Effect
function startSparkles() {
  const canvas = $('#sparkles');
  const ctx = canvas.getContext('2d');
  const parentRect = canvas.parentElement.getBoundingClientRect();
  
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  
  const width = canvas.width;
  const height = canvas.height;

  let particles = Array.from({length: 60}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 3 + 0.5,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
    opacity: Math.random() * 0.8 + 0.2,
    life: 1
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      gradient.addColorStop(0, `rgba(255,200,230,${p.opacity * p.life})`);
      gradient.addColorStop(1, `rgba(255,77,109,${p.opacity * p.life * 0.5})`);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.strokeStyle = `rgba(255,120,160,${p.opacity * p.life * 0.7})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      p.x += p.dx;
      p.y += p.dy;
      p.dx *= 0.99;
      p.dy *= 0.99;
      p.life -= 0.008;
      
      if (p.x < 0 || p.x > width) p.dx *= -0.8;
      if (p.y < 0 || p.y > height) p.dy *= -0.8;
    });
    
    particles = particles.filter(p => p.life > 0);
    
    if (particles.length > 0) {
      requestAnimationFrame(draw);
    }
  }
  draw();
}