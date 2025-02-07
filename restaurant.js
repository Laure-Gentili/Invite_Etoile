document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation du logo au chargement
    gsap.to(".logo", {
        opacity: 1,
        scale: 1,
        duration: 2.5,
        ease: "power2.out"
    });

    // Animation du logo qui monte en scrollant
    gsap.to(".logo-container", {
        top: "10%",
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".text-container",
            start: "top 80%",
            end: "top 50%",
            scrub: true
        }
    });

    // Animation des textes qui apparaissent au scroll
    const textElements = document.querySelectorAll(".text");
    textElements.forEach((element) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animation des textes qui apparaissent au scroll
    const textElements2 = document.querySelectorAll(".text2");
    textElements2.forEach((element) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animation des textes qui apparaissent au scroll
    const textElements3 = document.querySelectorAll(".text3");
    textElements3.forEach((element) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animation des textes qui apparaissent au scroll
    const textElements4 = document.querySelectorAll(".text4");
    textElements4.forEach((element) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

     // Animation des textes qui apparaissent au scroll
     const textElements5 = document.querySelectorAll(".text5");
     textElements5.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements6 = document.querySelectorAll(".text6");
     textElements6.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements7 = document.querySelectorAll(".text7");
     textElements7.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements8 = document.querySelectorAll(".text8");
     textElements8.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements9 = document.querySelectorAll(".text9");
     textElements9.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements10 = document.querySelectorAll(".text10");
     textElements10.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements11 = document.querySelectorAll(".text11");
     textElements11.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements12 = document.querySelectorAll(".text12");
     textElements12.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

     // Animation des textes qui apparaissent au scroll
     const textElements13 = document.querySelectorAll(".text13");
     textElements13.forEach((element) => {
         gsap.fromTo(element, {
             opacity: 0,
             y: 50
         }, {
             opacity: 1,
             y: 0,
             duration: 1.2,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: element,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         });
     });

gsap.fromTo(".text-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text2-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text2-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text3-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text3-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text4-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text4-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text5-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text5-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text6-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text6-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text7-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text7-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text8-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text8-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text9-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text9-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text10-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text10-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text11-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text11-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text12-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text12-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

gsap.fromTo(".text13-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text13-container", // L'animation commence dès que le texte entre dans la fenêtre
        start: "top 80%", // Quand le texte atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image2-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image2-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image3-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image3-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image4-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image4-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image5-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image5-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image6-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image6-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image7-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image7-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image8-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image8-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image9-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image9-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image10-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image10-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image11-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image11-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image12-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image12-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image13-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image13-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".image14-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image14-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation pour l'image (qui vient du bas aussi)
gsap.fromTo(".moodboard-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".moodboard-container", // L'animation commence dès que l'image entre dans la fenêtre
        start: "top 80%", // Quand l'image atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title2", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title2", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title3", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title3", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title4", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title4", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title5", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title5", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});
    
// Animation du titre "Moodboard"
gsap.fromTo(".title6", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title6", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});
// Animation du titre "Moodboard"
gsap.fromTo(".title7", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title7", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});
// Animation du titre "Moodboard"
gsap.fromTo(".title8", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title8", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title9", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title9", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title10", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title10", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title11", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title11", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title12", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title12", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title13", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title13", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title14", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title14", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title15", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title15", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title16", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title16", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

// Animation du titre "Moodboard"
gsap.fromTo(".title17", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".title17", // L'animation commence dès que le titre entre dans la fenêtre
        start: "top 80%", // Quand le titre atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation se joue une seule fois
    }
});

gsap.fromTo(".video-container", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".video-container", // L'animation commence dès que la vidéo entre dans la fenêtre
        start: "top 80%", // Quand la vidéo atteint 80% de la fenêtre
        toggleActions: "play none none none", // Quand scrollé, l'animation commence
        once: true, // L'animation ne se joue qu'une seule fois
    }
});

});