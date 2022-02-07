var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button" },

  effect: "fade",
  loop: "infinite",
  pagination: {
    el: ".swiper-pagination",
    type: "scrollbar" } });



swiper.on('slideChange', function (sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
});