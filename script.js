function animateText() {
    var tl = gsap.timeline({ repeat: -1 });

    gsap.to("#nleft img", {
        repeat: -1,
        rotate: "360deg",
        duration: 7,
        ease: "linear",
        transformOrigin: "center",
        yoyo: true,
    });

    tl.to("#nleft h2", {
        delay: 6,
        duration: 2,

        x: -500,
        ease: "none",
    })

        .to("#nleft h2", {
            duration: 1,
            delay: 1,
            x: 0,
            opacity: 1,
            ease: "none",
        })

        .to("#nleft h2", {
            duration: 2,
            delay: 4,
            x: 500,
            ease: "none",
        })

        .to("#nleft h2", {
            delay: 1,
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "none",
        });
}

async function ImageAnimation() {
    function getRandomDelay() {
        return Math.random() * 3;
    }

    function getRandomRotation() {
        return Math.random() * 360;
    }

    function getRandomScale() {
        return 0.5 + Math.random();
    }

    gsap.to("#Star", {
        duration: 4,
        rotation: getRandomRotation(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: getRandomDelay(),
    });

    gsap.to(".Star", {
        duration: 4,
        rotation: -getRandomRotation(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Play", {
        duration: 2.6 + Math.random(),
        x: 40,
        rotate: `${80 + Math.random() * 20}deg`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Location", {
        duration: 2.5 + Math.random(),
        x: 40,
        y: 15,
        rotate: `${40 + Math.random() * 20}deg`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to(".greenCircle", {
        duration: 4,
        x: 60,
        y: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Share", {
        duration: 2.7 + Math.random(),
        x: 30,
        y: -15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#greenCircle", {
        duration: 1,
        scale: getRandomScale(),
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#BlackCircle", {
        duration: 1,
        scale: getRandomScale(),
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Like", {
        duration: 2 + Math.random(),
        x: 20,
        y: -10,
        rotate: `${-30 + Math.random() * 20}deg`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: getRandomDelay(),
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to("#Megaphone", {
        rotate: "-14deg",
        duration: 0.6,
        ease: "power2.inOut",
    })

        .to("#Megaphone", {
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 5,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            rotate: "14deg",
            duration: 0.6,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 5,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            rotate: "0deg",
            duration: 0.6,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 5,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            rotate: "0deg",
            duration: 0.6,
            ease: "power2.inOut",
        });

    gsap.to(".Ring1", {
        x: 50,
        y: -30,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
    });

    gsap.to(".Ring2", {
        x: 30,
        y: -50,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
    });

    gsap.to(".Ring3", {
        x: 70,
        y: -20,
        duration: 1.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
    });
}

var nextContent = document.getElementsByClassName("nextAnimationContent");
var elements = document.querySelectorAll("#nright h4, #nright button");
var elem = document.querySelectorAll("#hleft h1, #hleft p, #hleft button");

async function main() {
    await animateText();
    await ImageAnimation();
}

window.onload = async function () {
    document.querySelector(".preloader").classList.add("hide");

    var tl = gsap.timeline();

    tl.from(nextContent[0], {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
    }, "an");

    tl.from(nextContent[1], {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
    }, "an");

    tl.from(elements, {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
    }, "an");

    gsap.from(elem[0], {
        delay: 2,
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(elem[1], {
        delay: 2,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(elem[2], {
        delay: 2,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from("#hright img", {
        delay: 2,
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        onComplete: async function () {
            await main();
        },
    });
};

var marquee = document.querySelector(".marque");
window.addEventListener("wheel", function (det) {
    if (det.deltaY > 0) {
        gsap.to(".marque img", {
            rotate: 0,
            duration: 0.5,
        });
    } else {
        gsap.to(".marque img", {
            rotate: 180,
            duration: 0.5,
        });
    }
});

// const numParticles = 20;
// const particles = [];


// for (let i = 0; i < numParticles; i++) {
//     const particle = document.createElement("div");
//     particle.classList.add("particle");
//     document.body.appendChild(particle); 
//     particles.push(particle);
// }


// window.addEventListener("mousemove", (event) => {
//     particles.forEach((particle, index) => {
        
//         const delay = index * 0.02;

//         gsap.to(particle, {
//             x: event.clientX - particle.clientWidth / 2, 
//             y: event.clientY - particle.clientHeight / 2, 
//             duration: 0.5, 
//             opacity: 1, 
//             ease: "power3.out",
//             delay: delay, 
//         });

        
//         gsap.to(particle, {
//             opacity: 0,
//             delay: delay + 0.5, 
//             duration: 0.7,
//         });
//     });
// });

gsap.from("#move", {
    duration: 1.2,
    opacity: 0,
    scale: 0,
    y: 20,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
    }
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 40%",
        end: "top 0%",
        scrub: 3,
    }
})

tl2.from("#sleft", {
    duration: 1,
    opacity: 0,
    x: -200,
    ease: "power3.out",
}, "anim1")

tl2.from("#sright", {
    duration: 1,
    opacity: 0,
    x: 200,
    ease: "power3.out",
}, "anim1")

tl2.from(".scleft", {
    duration: 1,
    opacity: 0,
    x: -500,
    ease: "power3.out",
}, "anim2")

tl2.from(".scright", {
    duration: 1,
    opacity: 0,
    x: 500,
    ease: "power3.out",
}, "anim2")


