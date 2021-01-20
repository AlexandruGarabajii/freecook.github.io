$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu,.info").toggleClass("active");
    $("body").toggleClass("lock");
  });
});