var cssSelector = anime({
  targets: '.top_anime',
  translateX: 250,
  easing: 'linear',
  duration: 600
});

function reg() {
  var datebegin = document.getElementById('db').value;

 document.getElementById('price').value = datebegin * 323;




}