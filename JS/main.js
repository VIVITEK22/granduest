const colors = {
  white: "#FFFFFF",
  gray: "#4B5055",
  yellow: "#B28A23",
  brown: "#4E351F",
  pink: "#A31033",
  black: "#000000"
}

const swiper = new Swiper(".price__body", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 100,
  navigation: {
    nextEl: ".price__btn-next"
  }
});

const swiper2 = new Swiper(".slider__body", {
  loop: true,
  navigation: {
    nextEl: ".slider__btn-next",
    prevEl: ".slider__btn-prev"
  },
  pagination: {
    el: ".slider__pagination"
  }
});

for (let item of document.querySelectorAll(".value__item")) {
  item.onclick = function(e) {
    document.querySelector(".value__item--active").classList.remove("value__item--active");
    e.target.classList.add("value__item--active");
  }
}

let inputTwo = document.querySelector(".colors__check-group > span")
inputTwo.onclick = function(e) {
  if (e.target.checked) {
    document.querySelector(".colors__lamination-list").classList.add("input--active");
    for (let item of document.querySelectorAll(".colors__lamination-list input")) {
      item.disabled = false;
    }
    let select = document.querySelector(".colors__select")
    select.classList.add("input--active");
    select.querySelector(".colors__select-item").disabled = false;
  } else {
    document.querySelector(".colors__lamination-list").classList.remove("input--active");
    for (let item of document.querySelectorAll(".colors__lamination-list input")) {
      item.disabled = true;
    }
    let select = document.querySelector(".colors__select")
    select.classList.remove("input--active");
    select.querySelector(".colors__select-item").disabled = true;
  }
}

for (let item of document.querySelectorAll(".colors__profile-list .radio-border")) {
  let bg = item.classList[2];
  item.querySelector("div").style.background = colors[bg];
}

for (let item of document.querySelectorAll(".colors__seal-list .radio-border")) {
  let bg = item.classList[2];
  item.querySelector("div").style.background = colors[bg];
}

for (let div of document.querySelectorAll(".form-select > span")) {
  div.onclick = function(e) {
    e.target.classList.toggle("span--active");
    if (document.querySelector(".value__form-group > input").checked) {
      document.querySelector(".value__form-group > input").checked = false;
    } else {
      document.querySelector(".value__form-group > input").checked = true;
    }
    input(1);
  }
}

function input(el) {
  if (input1.checked) {
    document.querySelector(".value__form-bottom").classList.add("input--active");
    for (let item of document.querySelectorAll(".value__form-bottom input")) {
      item.disabled = false;
    }
  } else {
    document.querySelector(".value__form-bottom").classList.remove("input--active");
    for (let item of document.querySelectorAll(".value__form-bottom input")) {
      item.disabled = true;
    }
  }

}