var nextContent = document.getElementsByClassName("nextAnimationContent");
var elements = document.querySelectorAll("#overflow h4, #nright button");
var elem = document.querySelectorAll("#hleft h1, #hleft p, #hleft button");


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


function InfinityScrollAnimation(){

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

}


function Page2Animation(){

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

}


function CursorAnimation(){

    const numParticles = 35;
    const particleContainer = document.getElementById('particle-container');
    const particles = [];


    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.opacity = 0;  
        particles.push(particle);
        particleContainer.appendChild(particle);
    }

    window.addEventListener("mousemove", (event) => {
        particles.forEach((particle, index) => {
            const delay = index * 0.005; 

            
            gsap.to(particle, {
                x: event.clientX - particle.clientWidth / 2, 
                y: event.clientY - particle.clientHeight / 2, 
                duration: 0.2,
                opacity: 1, 
                ease: "power3.out",
                delay: delay, 
            });

            
            gsap.to(particle, {
                opacity: 0,
                delay: delay + 0.5, 
                duration: 0.7,
            });
        });
    });

}


function StringAnimation(){

    var initialPath = `M 10 50 Q 600 50 1100 50`;
    var Path = `M 10 50 Q 600 50 1100 50`;

    var string1 = document.querySelector("#string1")
    var string2 = document.querySelector("#string2")
    var string3 = document.querySelector("#string3")
    var string4 = document.querySelector("#string4")
    var string5 = document.querySelector("#string5")
    var string6 = document.querySelector("#string6")


    string1.addEventListener("mousemove", function (dets) {
        var svgElement = string1.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str1 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string1.addEventListener("mouseleave", function () {
        gsap.to("#str1 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string2.addEventListener("mousemove", function (dets) {
        var svgElement = string2.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str2 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string2.addEventListener("mouseleave", function () {
        gsap.to("#str2 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });


    string3.addEventListener("mousemove", function (dets) {
        var svgElement = string3.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str3 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string3.addEventListener("mouseleave", function () {
        gsap.to("#str3 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string4.addEventListener("mousemove", function (dets) {
        var svgElement = string4.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str4 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string4.addEventListener("mouseleave", function () {
        gsap.to("#str4 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string5.addEventListener("mousemove", function (dets) {
        var svgElement = string5.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str5 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string5.addEventListener("mouseleave", function () {
        gsap.to("#str5 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string6.addEventListener("mousemove", function (dets) {
        var svgElement = string6.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str6 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string6.addEventListener("mouseleave", function () {
        gsap.to("#str6 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });
}


function WorkingProcessAnimation(){

    var elements = [
        { wp: document.querySelector(".wp1"), wpi: document.querySelector(".wpi1"), inf: document.querySelector(".inf1"), pth: document.querySelector("#str1") },
        { wp: document.querySelector(".wp2"), wpi: document.querySelector(".wpi2"), inf: document.querySelector(".inf2"), pth: document.querySelector("#str2") },
        { wp: document.querySelector(".wp3"), wpi: document.querySelector(".wpi3"), inf: document.querySelector(".inf3"), pth: document.querySelector("#str3") },
        { wp: document.querySelector(".wp4"), wpi: document.querySelector(".wpi4"), inf: document.querySelector(".inf4"), pth: document.querySelector("#str4") },
        { wp: document.querySelector(".wp5"), wpi: document.querySelector(".wpi5"), inf: document.querySelector(".inf5"), pth: document.querySelector("#str5") },
        { wp: document.querySelector(".wp6"), wpi: document.querySelector(".wpi6"), inf: document.querySelector(".inf6"), pth: document.querySelector("#str6") }
    ];


    elements.forEach(function(item) {
        var wp = item.wp;
        var wpi = item.wpi;
        var inf = item.inf;
        var pth = item.pth;

        wp.addEventListener("click", function() {
            wp.classList.toggle("open");
            pth.classList.toggle("hidden");
            inf.classList.toggle("hidden");
            wpi.classList.toggle("imgopen");

            if (wpi.classList.contains("imgopen")) {
                wpi.innerHTML = `<img src="-.svg" alt="">`;
            } else {
                wpi.innerHTML = `<img src="+.svg" alt="">`;
            }
        });
    });

}


function Page3Animation(){

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl3.from("#wleft", {
        duration: 2,
        opacity: 0,
        x: -200,
        ease: "power3.inout",
    }, "an1")

    tl3.from("#wright", {
        duration: 2,
        opacity: 0,
        x: 200,
        ease: "power3.inout",
    }, "an1")

    tl3.from("#workProcess", {
        duration: 2,
        opacity: 0,
        y: 100,
        ease: "power5.out",
    }, "an1")
}


function Page4Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 60%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl4.from("#tleft", {
        duration: 1,
        opacity: 0,
        x: -200,
        ease: "power3.out",
    }, "anim3")

    tl4.from("#tright", {
        duration: 1,
        opacity: 0,
        x: 200,
        ease: "power3.out",
    }, "anim3")

    tl4.from("#Tcontainer", {
        duration: 4,
        scale: 0,
        opacity: 0,
        y: -30,
        ease: "power3.out",
    })

    tl4.from(".T-Card", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        stagger: 0.8,
    })
}


function Page5Animation(){

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "top 60%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl5.from("#Cleft", {
        duration: 1,
        opacity: 0,
        x: -200,
        ease: "power3.out",
    }, "anim4")

    tl5.from("#Cright", {
        duration: 1,
        opacity: 0,
        x: 200,
        ease: "power3.out",
    }, "anim4")

    tl5.from("#Ccontainer", {
        duration: 3,
        scale: 0,
        opacity: 0,
        y: -30,
        ease: "power3.out",
    })

    tl5.from("#CFRM", {
        duration: 2,
        opacity: 0,
        X: -500,
        ease: "power5.out",
        stagger: 0.7,
    })

    tl5.from("#CFRMIMG", {
        duration: 2,
        opacity: 0,
        X: 500,
        ease: "power5.out",
        stagger: 0.8,
    })

    gsap.to(".SunVector", {
        duration: 12,
        rotation: 360,
        ease: "linear",
        repeat: -1,
    })

    gsap.to(".BlStr", {
        duration: 3,
        rotation: 1000,
        ease: "elastic.inout(0.5)",
        yoyo: 1,
        repeat: -1
    })

    gsap.to(".GrStr", {
        duration: 9,
        rotation: -360,
        ease: "linear",
        repeat: -1,
        yoyo: true,
    })

}


function FooterAnimation(){
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "top -50%",
            end: "top -70%",
            scrub: 2,
        }
    })

    gsap.to("#Fleft img", {
        duration: 4,
        rotate: 360,
        repeat: -1,
        ease: "none",
    })

    tl6.from("#Footer", {
        duration: 1,
        opacity: 0,
        y: 200,
        ease: "power3.out",
    })

    tl6.from("#Fnav", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "elastic.out(0.1)",
    })

    tl6.from("#Fcont", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
    })
    
    tl6.from("#FinalFooter, #StringFinal", {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power3.out",
    })
}


function FooterStringAnimation(){
    var initialPath = `M 10 50 Q 600 50 1100 50`;
    var Path = `M 10 50 Q 600 50 1100 50`;

    var STRING = document.querySelector("#StringFinal");

    STRING.addEventListener("mousemove", function (dets) {
        var svgElement = STRING.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();

        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;

        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;

        gsap.to("#STRING path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    STRING.addEventListener("mouseleave", function () {
        gsap.to("#STRING path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });
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
        stagger: 0.2,
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
            CursorAnimation()
            animateText();
            ImageAnimation();
            InfinityScrollAnimation()
            Page2Animation()
            StringAnimation()
            WorkingProcessAnimation()
            Page3Animation()
            Page4Animation()
            Page5Animation()
            FooterStringAnimation()
            FooterAnimation()
        },
    });
};
