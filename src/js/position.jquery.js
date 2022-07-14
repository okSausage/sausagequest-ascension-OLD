$(function (className) {
  $(".className").css({
    position: "absolute",
    left: "50%",
    top: "50%",
    "margin-left": -$(" + className + ").outerWidth() / 2,
    "margin-top": -$(".className").outerHeight() / 2,
  });
});
