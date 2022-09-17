document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToogleButton.classList.toggle('bi-list');
    mobileNavToogleButton.classList.toggle('bi-x');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Hero Slider
   */
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  var swiper = new Swiper(".weartheTrend", {
    spaceBetween: 50,
    speed: 100,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  /**
   * Open and close the search form.
   */
  const searchOpen = document.querySelector('.js-search-open');
  const searchClose = document.querySelector('.js-search-close');
  const searchWrap = document.querySelector(".js-search-form-wrap");

  searchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.add("active");
  });

  searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.remove("active");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  let colorGlass = document.querySelectorAll('.color_glass');
  let changeImages = document.querySelector('.change_images');
  let changeImagesSecond = document.querySelector('.change_images_second');
  let changeImagesThird = document.querySelector('.change_images_third');
  let changeImagesForth = document.querySelector('.change_images_four');
  let changeImagesFifth = document.querySelector('.change_images_five');
  colorGlass.forEach(function(element){
    element.addEventListener('mouseover', function(){
      let cardList =  element.parentElement;
      let myDivObjBgColor = getComputedStyle(element).backgroundColor;
      let newSrc = changeImages.src;
      let newSecondSrc = changeImagesSecond.src;
      let newThirdSrc = changeImagesThird.src;
      let newForthSrc = changeImagesForth.src;
      let newFifthSrc = changeImagesFifth.src;
      function convert(rgb) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        function hexCode(i) {
            return ("0" + parseInt(i).toString(16)).slice(-2);
        }
        return  hexCode(rgb[1]) + hexCode(rgb[2])
                + hexCode(rgb[3]);
    }
    function GFG_Fun() {
       let hexCodedImage = convert(myDivObjBgColor);
       if (cardList.classList.contains('first_card')) {
         newSrc = `assets/img/glass_vincent_${hexCodedImage}.jpg`;
         changeImages.src = newSrc;
        }
        else if(cardList.classList.contains('second_card')){
          newSecondSrc = `assets/img/vincent_circle_${hexCodedImage}.jpg`;
          changeImagesSecond.src = newSecondSrc;
        }
        else if(cardList.classList.contains('third_card')){
          newThirdSrc = `assets/img/matte_rim_${hexCodedImage}.jpg`;
          changeImagesThird.src = newThirdSrc;
        }
        else if(cardList.classList.contains('four_card')){
          newForthSrc = `assets/img/sports_glasses_${hexCodedImage}.jpg`;
          changeImagesForth.src = newForthSrc;
        }
        else if(cardList.classList.contains('five_card')){
          newFifthSrc = `assets/img/half_rim_${hexCodedImage}.jpg`;
          changeImagesFifth.src = newFifthSrc;
        }
    }
      GFG_Fun();
    })
  })
});
