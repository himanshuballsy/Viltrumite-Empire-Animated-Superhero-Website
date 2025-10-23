// ✅ Check if device is mobile
const isMobile = window.innerWidth <= 768;

// Cursor and blur
let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

let x = 0, y = 0;
let X = 0, Y = 0;
let targetX = 0, targetY = 0;
let blurTargetX = 0, blurTargetY = 0;

// Only enable cursor animations on desktop
if (!isMobile) {
  document.addEventListener("mousemove", (dets) => {
    targetX = dets.clientX;
    targetY = dets.clientY;
    blurTargetX = dets.clientX;
    blurTargetY = dets.clientY;
  });
} else {
  // Mobile: hide cursor elements
  crsr.style.display = "none";
  blur.style.display = "none";
}

// Cursor hover on nav items (desktop only)
const h4all = document.querySelectorAll("#nav h4");
if (!isMobile) {
  h4all.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      crsr.style.scale = 2;
      crsr.style.border = "2px solid #fff";
      crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", () => {
      crsr.style.scale = 1;
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "rgba(149, 193, 30, 0.7)";
    });
  });

  function animateCursor() {
    x += (targetX - x) * 0.1;
    y += (targetY - y) * 0.1;

    X += (blurTargetX - X) * 0.15;
    Y += (blurTargetY - Y) * 0.15;

    crsr.style.left = x + "px";
    crsr.style.top = y + "px";
    blur.style.left = X - 150 + "px";
    blur.style.top = Y - 150 + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

// Scrolling text clone & animation
const scroller = document.querySelector("#scroller-in");
const clone = scroller.cloneNode(true);
scroller.parentElement.appendChild(clone);
const totalWidth = scroller.offsetWidth;

gsap.to("#scroller-in", {
  x: -totalWidth,
  ease: "none",
  duration: 15,
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
  },
});

// Scroll-trigger animations
gsap.to("#nav", {
  background: "linear-gradient(135deg, #4A0000, #000000, #1A0000)",
  duration: 1,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top top",
    end: "bottom top",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "rgba(0, 0, 0, 0.97)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -50%",
    end: "top -80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
  },
});

// Card hover effect (desktop only)
const cards = document.querySelectorAll(".card");
if (!isMobile) {
  cards.forEach((card) => {
    const overlay = card.querySelector(".overlay");

    card.addEventListener("mouseenter", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 40%)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      overlay.style.background = "rgba(165, 42, 42, 0.85)";
    });
  });
}

// Scroll animations (works on both desktop & mobile)
gsap.from("#about-us img, #about-us-in", {
  y: 20,
  opacity: 0,
  duration: 0.9,
  stagger: 0.9,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#bicep1", {
  y: -70,
  x: -70,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#bicep1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#bicep2", {
  y: 70,
  x: 70,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#bicep1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
