/*const fetchSvg = (image) => {
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      const div = document.createElement("div");
      div.innerHTML = response;
      const inlineSvg = div.getElementsByTagName("svg")[0];
      image.parentNode.replaceChild(inlineSvg, image);
      return true;
    });
};*/
