<div class="gradient-bg">
  <div class="gradient-1"></div>
  <div class="gradient-2"></div>
  <div class="gradient-3"></div>
  <div class="mouse-follow"></div>
</div>

<script>
  const mouseFollow = document.querySelector('.mouse-follow') as HTMLElement;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Smooth following with easing
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    if (mouseFollow) {
      mouseFollow.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
</script>

<style>
  .gradient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: #000212;
    background-image: 
      radial-gradient(at 40% 20%, hsla(228,100%,61%,0.1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355,100%,93%,0.1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340,100%,76%,0.1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(269,100%,77%,0.1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(242,100%,70%,0.1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(343,100%,76%,0.1) 0px, transparent 50%);
  }

  .gradient-1,
  .gradient-2,
  .gradient-3 {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.3;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .gradient-1 {
    top: 20%;
    left: 0;
    width: 500px;
    height: 500px;
    background: #4461f2;
    animation: float 8s infinite;
  }

  .gradient-2 {
    top: 50%;
    right: 0;
    width: 400px;
    height: 400px;
    background: #bc52ee;
    animation: float 12s infinite reverse;
  }

  .gradient-3 {
    bottom: 0;
    left: 30%;
    width: 300px;
    height: 300px;
    background: #4461f2;
    animation: float 10s infinite;
  }

  .mouse-follow {
    position: fixed;
    pointer-events: none;
    width: 1000px;
    height: 1000px;
    background: radial-gradient(circle at center,
      rgba(68, 97, 242, 0.08) 0%,
      rgba(188, 82, 238, 0.08) 25%,
      transparent 70%
    );
    transform: translate(-50%, -50%);
    border-radius: 50%;
    filter: blur(100px);
    mix-blend-mode: plus-lighter;
    z-index: -1;
    will-change: transform;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(50px, 50px) scale(1.1);
    }
    66% {
      transform: translate(-25px, 25px) scale(0.9);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }

  /* Make gradients react to mouse proximity */
  .gradient-1:hover,
  .gradient-2:hover,
  .gradient-3:hover {
    opacity: 0.6;
    filter: blur(80px);
    transform: scale(1.1);
  }

  /* Add a subtle pulse animation to the mouse follow gradient */
  .mouse-follow {
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.15; }
    50% { opacity: 0.25; }
    100% { opacity: 0.15; }
  }
</style>
