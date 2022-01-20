// main product gallery
const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const firstActiveImg = document.querySelector(".active-img");

function changeImage(e) {
  activeImage.src = e.target.src;
  firstActiveImg.classList.remove("active-img");
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active");
}

productImages.forEach((image) => image.addEventListener("click", changeImage));
// mobile menu
$(document).ready(function () {
  $("#menu-icon").on("click", function () {
    $(".navbar").toggleClass("expand");
    return false;
  });
});
// product counter
$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
// validate email
const email = document.getElementById("email");
const validateBtn = document.getElementById("validate");
const text = document.getElementById("message");

const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};
validateBtn.addEventListener("click", () => {
  if (validateEmail(email.value)) {
    text.innerText = "Ваша заявка отправлена!";
    text.classList.remove("error");
    text.classList.add("success");
  } else {
    text.innerText = "Введите корректный адрес почты";
    text.classList.remove("success");
    text.classList.add("error");
  }
});
//////
$(function () {
  $(".nav__icon").on("click", function () {
    $(this).toggleClass("active");
    $("nav ul").slideToggle();
  });

  $(window).on("load resize", function () {
    var w = $(window).width();
    var h = $(window).height();
    var x = 700;
    if (w >= x) {
      $("nav ul").css({ display: "none", height: "auto" });
    } else {
      $("nav ul").css({ display: "none", height: "auto" });
    }
  });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
/// modal window
const addToCart = document.getElementById("add-to-cart");
const modalWindow = document.querySelector(".mask");
const closeModalWindow = document.getElementById("close");
//////
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

minus.addEventListener("click", getValue);
plus.addEventListener("click", getValue);

const count = document.getElementById("count");
///////
function getValue() {
  const productNumberInput = document.getElementById("prod-value");
  const productNumber = parseFloat(productNumberInput.value);
  count.innerHTML = productNumber;
  console.log(productNumber);
}

function openModal() {
  modalWindow.classList.toggle("active");
  getValue();
}
function closeModal() {
  modalWindow.classList.remove("active");
}
addToCart.addEventListener("click", openModal);

modalWindow.addEventListener("click", closeModal);
closeModalWindow.addEventListener("click", closeModal);

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});
//// success checkbox
$("#add-to-cart").click(function () {
  $(".check-icon").hide();
  setTimeout(function () {
    $(".check-icon").show();
  }, 10);
});
/// added to favorites
const addToFavBtn = document.getElementById("add-to-fav");
const modalAddedFavorite = document.querySelector(".mask-2");
const closeModalWindowFav = document.getElementById("close-2");
function openModalFav() {
  modalAddedFavorite.classList.toggle("active");
}
function closeModalFav() {
  modalAddedFavorite.classList.remove("active");
}
addToFavBtn.addEventListener("click", openModalFav);

modalAddedFavorite.addEventListener("click", closeModalFav);
closeModalWindowFav.addEventListener("click", closeModalFav);
