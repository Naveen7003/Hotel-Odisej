(function mohit(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
})()



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },    
  });


var tl = gsap.timeline();
tl.from("#page1 svg",{
    y: -40,
    duration: 1,
    opacity: 0,
    delay: 0.3,
})
.from("#page1 img",{
    scale: 0.5,
    delay: -0.1,
    duration: 1,
    ease: Power4.easeout,
    borderRadius: "30px",
})
.from("#nav",{
    y: -30,
    duration: 0.7,
    opacity: 0,
    delay: 0.5,
});

var h2data = document.querySelectorAll("#page2 h2");
h2data.forEach(function(elem){
    var textdata = elem.textContent;
    var splitedtext = textdata.split("");
    var clutter = "";
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span",{
    color: "#E3E3C4",
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2 h2 span",
        scroller: "#main",
        // markers: true,
        start: "top 55%",
        end: "top -5%",
        scrub: 2,
    },
});

gsap.to("#page2 #svg2, #page2 #svg3",{
    left: '-100vw',
    scrollTrigger:{
        trigger: "#page2 #svg2",
        scroller: "#main",
        // markers: true,
        scrub: 2,
    }
});

gsap.to("#page6 #svg5, #page6 #svg6",{
    left: '-100vw',
    scrollTrigger:{
        trigger: "#page6 #svg5",
        scroller: "#main",
        // markers: true,
        scrub: 2,
    }
});


var h3data = document.querySelectorAll("#page3 h3");
h3data.forEach(function(elem){
    var textdata = elem.textContent;
    var splitedtext = textdata.split("");
    var clutter = "";
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});

gsap.to("#page3 h3 span",{
    color: "#434B34",
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page3 h3 span",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top -5%",
        scrub: 3,
    },
});

var h4data = document.querySelectorAll("#page6 h3");
h4data.forEach(function(elem){
    var textdata = elem.textContent;
    var splitedtext = textdata.split("");
    var clutter = "";
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});


gsap.from("#box-part2",{
    top: "10%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#box-part2",
        scroller: "#main",
        // markers: true,
        opacity: 0,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#box-part3",{
    top: "10%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#box-part3",
        scroller: "#main",
        // markers: true,
        opacity: 0,
        start: "top 90%",
        end: "top: 90%",
        scrub: 3,
    }
})
gsap.from("#box-part1",{
    top: "10%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#box-part1",
        scroller: "#main",
        // markers: true,
        opacity: 0,
        start: "top 90%",
        end: "top: 90%",
        scrub: 3,
    }
})
gsap.from("#text-icon",{
    top: "10%",
    duration: 0.7,
    ease: Power4.easeout,   
    opacity: 0,
    scrollTrigger:{
        trigger: "#text-icon",
        scroller: "#main",
        // markers: true,
        opacity: 0,
        start: "top 80%",
        end: "top: 80%",
        scrub: 3,
    }
})
gsap.from("#box-part4",{
    top: "10%",
    duration: 0.7,
    opacity: 0,
    ease: Power4.easeout,
    scrollTrigger:{
        trigger: "#box-part4",
        scroller: "#main",
        // markers: true,
        opacity: 0,
        start: "top 95%",
        end: "top: 95%",
        scrub: 3,
    }
})

gsap.to("#page6 h3 span",{
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page6 h3 span",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        duration: 20,
        end: "top 50%",
        scrub: 3,
    },
});

gsap.from("#page6 p",{
    top: "45%",
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page6 p",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top 90%",
        scrub: 2,
    }
})
gsap.from("#page6-1 img",{
    top: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page6-3 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page6-2 img",{
    top: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page6-3 img",
        scroller: "#main",
        // markers: true,
        start: "top 75%",
        end: "top: 75%", 
        scrub: 3,
    }
})
gsap.from("#page6-3 img",{
    top: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page6-3 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#text-icon",{
    top: "10%",
    duration: 0.7,
    ease: Power4.easeout,   
    opacity: 0,
    scrollTrigger:{
        trigger: "#text-icon",
        scroller: "#main",
        // markers: true,
        opacity: 0,
        start: "top 80%",
        end: "top: 80%",
        scrub: 3,
    }
})
gsap.from("#text2-icon1",{
    top: "60vw",
    duration: 0.7,
    ease: Power4.easeout,   
    opacity: 0,
    scrollTrigger:{
        trigger: "#text2-icon1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 70%",
        scrub: 3,
    }
})

gsap.to("#page7 #svg8, #page7 #svg9",{
    left: '-100vw',
    scrollTrigger:{
        trigger: "#page7 #svg8",
        scroller: "#main",
        // markers: true,
        scrub: 2,
    }
});

var h5data = document.querySelectorAll("#page7 h2");
h5data.forEach(function(elem){
    var textdata = elem.textContent;
    var splitedtext = textdata.split("");
    var clutter = "";
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});

gsap.to("#page7 h2 span",{
    color: "#E3E3C4",
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page7 h2 span",
        scroller: "#main",
        // markers: true,
        start: "top 55%",
        end: "top -5%",
        scrub: 2,
    },
});

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page8-left",
        scroller: "#main",
        top: "30%",
        end: "35%",
        scrub: 3,
    }
})

tl3.to("#page8-left",{
    transform: "translateX(-53%)",
    duration: 1,
},"anime2")

tl3.to("#page8-right",{
    transform: "translateX(53%)",
    duration: 1,
},"anime2")

tl3.from("#page8-center",{
    transform: "translateY(5%)",
    duration: 1,
    delay: 0.5,
    opacity: 0,
},"anime2")

gsap.from("#text3-icon2",{
    top: "3vw",
    duration: 0.7,
    ease: Power4.easeout,   
    opacity: 0,
    scrollTrigger:{
        trigger: "#text3-icon2",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 70%",
        scrub: 3,
    }
})

gsap.to("#page10 #svg11, #page10 #svg12",{
    left: '-100vw',
    scrollTrigger:{
        trigger: "#page10 #svg11",
        scroller: "#main",
        // markers: true,
        scrub: 2,
    }
});

var h6data = document.querySelectorAll("#page10 h2");
h6data.forEach(function(elem){
    var textdata = elem.textContent;
    var splitedtext = textdata.split("");
    var clutter = "";
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});

gsap.to("#page10 h2 span",{
    color: "#E3E3C4",
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page10 h2 span",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 3,
    },
});

gsap.from("#page10 p",{
    top: "120%",
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page10 p",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top 90%",
        scrub: 2,
    }
})

gsap.from("#image1 img",{
    top: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#image1 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#image2 img",{
    top: "16%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#image2 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#image3 img",{
    top: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#image3 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})

gsap.from("#text4-icon3",{
    top: "65vw",
    duration: 0.5,
    opacity: 0,
    scrollTrigger:{
        trigger: "#text4-icon3",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top: 70%",
        scrub: 3,
    }
})

gsap.from("#page11-1 h2",{
    marginTop: "15%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-1 h2",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page11-1 p",{
    marginTop: "20%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-1 p",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})

gsap.from("#page11-image1 img",{
    marginTop: "15%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-image1 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})

gsap.from("#page11-image2 img",{
    marginTop: "15%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-image2 img",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page11-text h3",{
    marginTop: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-text h3",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page11-text p",{
    marginTop: "25%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-text p",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#text5-icon4",{
    top: "63vw",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#text5-icon4",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page11-text2 h3",{
    marginTop: "15%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-text2 h3",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page11-text2 p",{
    marginTop: "15%",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page11-text2 p",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#text6-icon5",{
    top: "105vw",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#text6-icon5",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top: 90%", 
        scrub: 3,
    }
})
gsap.from("#page12-box",{
    top: "35vw",
    duration: 0.7,
    ease: Power4.easeout,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page12-box",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top: 80%", 
        scrub: 3,
    }
})