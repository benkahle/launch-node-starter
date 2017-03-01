require("../styles/base.scss");

function component () {
  var element = document.createElement('div');

  element.innerHTML = "Hello, World!";
  var im = document.createElement('img');
  im.src = "images/earth.jpg";
  element.appendChild(im);
  return element;
}

document.body.appendChild(component());
