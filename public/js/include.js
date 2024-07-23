function includeHTML(){
  let elements = document.getElementsByTagName("include-html");

  let lang = 'nl';
  if(getCookie('lang') !== '') {
	  let cookie = getCookie('lang');
	  lang = cookie;
  } else {
    setCookie('lang', 'nl', 4);
  }

  for (let e of elements){
    if (e.hasAttribute("src")) {
      fetch(`./html/${lang}/${e.getAttribute("src")}`)
        .then((res) => res.text())
        .then((html) => {
          let v = document.createElement("div");
          if (e.id !== '') v.id = e.id;
          v.innerHTML = html;
          v.classList.add("included");
          e.parentNode.replaceChild(v, e);
        })
        .catch((e) => console.error(e, `./html/${lang}/${e.getAttribute("src")}`));
    }
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0)  == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function changeToLang(lang){
	setCookie('lang', lang, 4);
	location.reload();
}

function toggleNavbarMobile() {
  let el = document.getElementById("navlinks");
  if ( el.classList.contains("active") ){
    el.classList.remove("active");
  } else {
    el.classList.add("active");
  }
}
