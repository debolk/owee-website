function includeHTML(){
  let elements = document.getElementsByTagName("include-html");
  
  let lang = 'nl';
  if(document.cookie !== '') {
	let cookie = JSON.parse(document.cookie.split(';')[0]);
	lang = cookie.lang;
  } else {
	document.cookie = JSON.stringify({lang: 'nl'}) + '; SameSite=Strict; Secure; expires=' + getCookieExpire();
	console.log(JSON.stringify({lang: 'nl'}) + '; SameSite=Strict; Secure; expires=' + getCookieExpire());
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
        .catch((e) => console.error(e));
    }
  }
}

function getCookieExpire() {
	let expires = new Date();
	expires.setTime(expires.getTime() + 1000 * 86400 * 5);
	return expires.toUTCString();
}

function changeToLang(lang){
	document.cookie = JSON.stringify({lang: `${lang}`}) + '; SameSite=Strict; Secure; expires=' + getCookieExpire();
	location.reload();
}
	