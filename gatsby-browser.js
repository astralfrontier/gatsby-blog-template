exports.onInitialClientRender = () => {
  let solidClass = "navbar navbar-expand-md bg-toggle-transparent navbar-dark bg-dark fixed-top";
  let transparentClass = "navbar navbar-expand-md bg-toggle-transparent navbar-light fixed-top";

  window.addEventListener('scroll', function(e) {
    let elements = document.getElementsByClassName("bg-toggle-transparent");
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i]
      if (this.window.scrollY >= 100) {
        element.className = solidClass;
      } else {
        element.className = transparentClass;
      }  
    }
  });
}