// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-[#08090D]/80', 'border-b', 'border-white/5');
        navbar.classList.remove('border-transparent', 'bg-[#08090D]/50');
    } else {
        navbar.classList.remove('bg-[#08090D]/80', 'border-b', 'border-white/5');
        navbar.classList.add('border-transparent', 'bg-[#08090D]/50');
    }
});

// Hero animations
const tl = gsap.timeline();

tl.fromTo(".hero-anim", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
);

// Scroll animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.fromTo(title,
        { y: 20, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            }
        }
    );
});

gsap.utils.toArray('.reveal-text').forEach(text => {
    gsap.to(text, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: text,
            start: "top 80%",
        }
    });
});

gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.fromTo(item,
        { x: -30, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
            }
        }
    );
});

gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.fromTo(card,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card.parentElement,
                start: "top 85%",
            }
        }
    );
});

gsap.utils.toArray('.course-item').forEach((item, i) => {
    gsap.fromTo(item,
        { x: 20, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item.parentElement,
                start: "top 85%",
            }
        }
    );
});
