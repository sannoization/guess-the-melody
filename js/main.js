const changeImg = (obj) => {
  if(obj.src.indexOf("_cross") === -1) {
    let old_src = obj.src;
    let postfix = old_src.substring(obj.src.length - 4);
    old_src = old_src.substring(0, old_src.length - 4);
    obj.src = old_src + "_cross" + postfix;
  }
}

const togglePopup = () => {
  document.getElementsByClassName("popup")[0].classList.toggle("invisible");
}

const popupImg = (obj) => {
  document.getElementById("img_popup").src = obj.getAttribute("link");
}

// deprecated
const _scrollToIframe = () => {
  window.scrollTo(0, document.documentElement.clientHeight);
}