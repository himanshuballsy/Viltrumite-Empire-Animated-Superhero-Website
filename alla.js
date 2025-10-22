  let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
  let x = 0;
  let y = 0;

  let X = 0;
  let Y = 0;

  let targetX = 0;
  let targetY = 0;
  
  let blurTargetX = 0;
  let blurTargetY = 0;

  document.addEventListener("mousemove", function(dets){

   targetX = dets.clientX;
   targetY = dets.clientY;
    blurTargetX = dets.clientX;
    blurTargetY = dets.clientY; 


  })

  const h4all = document.querySelectorAll("#nav h4");

  h4all.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){
     crsr.style.scale = 2;
      crsr.style.border = "2px solid #fff";
      crsr.style.backgroundColor = "transparent";



    })

    elem.addEventListener("mouseleave", function(){
     crsr.style.scale = 1;
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "rgba(149, 193, 30, 0.7)";

    })

  })


  function animateCursor(){

    x += (targetX - x)*0.1;
    y += (targetY - y)*0.1;

    X += (blurTargetX - X)*0.15;
    Y += (blurTargetY - Y)*0.15;

    crsr.style.left = x  + "px";
    crsr.style.top = y  + "px";
    blur.style.left = X - 150 + "px";
    blur.style.top = Y  - 150 + "px";

    requestAnimationFrame(animateCursor);

  }

  animateCursor();

const scroller = document.querySelector("#scroller-in");

const clone   = scroller.cloneNode(true);

scroller.parentElement.appendChild(clone);


const totalWidth = scroller.offsetWidth;

gsap.to("#scroller-in", {
x: -totalWidth,

ease:"none" ,
duration: 15,

repeat: -1,

modifiers:{
 
x : gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
}
 
})

  
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


gsap.to("#main" , {
backgroundColor: "rgba(0, 0, 0, 0.97)",

  scrollTrigger:{
    trigger: "#main",
    scroller: "body",
    
 start: "top -50%",
end: "top -80%",
  toggleActions: "play reverse play reverse",
  scrub: 1
  }

  })


  const cards = document.querySelectorAll(".card");

  cards.forEach((card) =>{

     const overlay = card.querySelector(".overlay");


     card.addEventListener("mouseenter", function(e){
      const width = card.getBoundingClientRect();

      const x = e.clientX - width.left;
      const y = e.clientY - width.top;
    const centerX = width.width / 2;
      const centerY = width.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10; 

      const rotateY = ((x - centerX) / centerX) * -10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 40%)`;
  })
    card.addEventListener("mouseleave", function(){
            

      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
       overlay.style.background = 'rgba(165, 42, 42, 0.85)';

     
    })
  })


  gsap.from("#about-us img, #about-us-in",{
    
      y:20 , 
 opacity:0,
      duration: 0.9,
      stagger: 0.9,
      scrollTrigger:{
        trigger: "#about-us",
           scroller: "body",

           start: "top 70%",
           end: "top 60%",
        scrub: 1,
      },
  });

  
  gsap.from(".card",{
    
      scale:0.8 , 
   opacity:0,
      duration: 1,
      stagger: 0.6,
      scrollTrigger:{
        trigger: ".card",
           scroller: "body",

           start: "top 70%",
           end: "top 65%",
        scrub: 2,
      },
  });

    
  gsap.from("#bicep1",{
    
      y:-70,
      x:-70,
    duration: 0.8,
      scrollTrigger:{
        trigger: "#bicep1",
           scroller: "body",

            start: "top 55%",
    end: "top 45%",
    scrub: 4,
      },
  });
    gsap.from("#bicep2",{
    
      y:70,
      x:70,
    duration: 0.8,
      scrollTrigger:{
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
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});