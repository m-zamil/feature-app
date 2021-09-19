function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
  var x = document.getElementsByClassName("tabcontent");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(rudr_tab_content).style.display = "block";

  var x = document.getElementsByClassName("tabmenu");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].className = "tabmenu";
  }
  document.getElementById(rudr_tab_id).className = "tabmenu active";
}

$(".owl-carousel-2").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1.4,
    },
    768: {
      items: 3,
    },
  },
});

$(".owl-carousel-3").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1.4,
    },
    768: {
      items: 3,
    },
  },
});

$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 3,
    },
  },
});

function myFunction(i) {
  const el = document.querySelectorAll("#myDropdown");
  const elBtn = document.querySelectorAll("#dropbtn");
  el[i - 1].classList.toggle("show");
  elBtn[i - 1].classList.toggle("rotate");
}
