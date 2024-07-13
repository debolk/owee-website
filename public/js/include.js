function includeHTML(){
  let elements = document.getElementsByTagName("include-html");
  for (let e of elements){
    if (e.hasAttribute("src")) {

      fetch(e.getAttribute("src"))
        .then((res) => res.text())
        .then((html) => {
          let v = document.createElement("div");
          if (e.id !== '') v.id = e.id;
          v.innerHTML = html;
          v.classList.add("included");
          e.parentNode.replaceChild(v, e);
        })
        .catch((e) => console.error(e));
    }
  }
}
