/* FADE UP ON SCROLL */
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { opacity:1, y:0, duration:0.8 });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const haircutSwiper = new Swiper(".haircutSwiper", {
  loop: false,
  speed: 700,
  spaceBetween: 20,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
haircutSwiper.on('touchEnd', () => {
  setTimeout(() => {
    haircutSwiper.autoplay.start();
  }, 4000);
});

window.addEventListener('scroll', () => {
  document.querySelector('header')
    .classList.toggle('scrolled', window.scrollY > 10);
});

