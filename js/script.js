//sliding up button
mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() { //chrome,firefox, IE and opera
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //chrome,firefox, IE and opera
}

//slide toggle navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
//animate span bar
function myFunction(x) {
    x.classList.toggle("change");
  }
  //featureslidebar
  function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      document.getElementById("feature-slidebar").style.top = "0";
    } else {
      document.getElementById("feature-slidebar").style.top = "-63px";
    }
  }