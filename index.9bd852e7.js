const e=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),t=document.querySelector(".error"),i=document.querySelector(".loader");t.classList.add("is-hidden"),e.classList.toggle("is-hidden"),e.addEventListener("change",(function(n){i.classList.toggle("is-hidden"),e.classList.toggle("is-hidden"),s.innerHTML="";(d=n.target.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${d}&api_key=live_xg1Pj4TVScdxd1kS0H77JEkxzqPHSII6huWpRL22J0vQEPkZrnUMZsiB9Dm5KxZ1`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((i=>{const n=i[0].breeds[0];!function(e,t){const i=e,n=t.name,d=t.description,c=t.temperament,a=`<div class="card">\n      <div class="card-img-top">\n        <img src="${i}" alt="${n}" width="300" />\n      </div>\n      <div class="text-content">\n        <h2 class="title-breed">${n}</h2>\n        <p class="breed-desc">${d}</p>\n        <p class="breed-temperament">\n          <b>Temperament</b> ${c}\n        </p>\n      </div>\n    </div>;`;s.innerHTML+=a}(i[0].url,n),e.classList.toggle("is-hidden"),t.classList.add("is-hidden")})).catch((()=>{t.classList.remove("is-hidden"),e.classList.toggle("is-hidden")})).finally((()=>{i.classList.toggle("is-hidden")}));var d})),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_xg1Pj4TVScdxd1kS0H77JEkxzqPHSII6huWpRL22J0vQEPkZrnUMZsiB9Dm5KxZ1").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((function(s){const t=s.map((e=>`<option value='${e.id}'>${e.name}</option>`)).join("");e.insertAdjacentHTML("beforeend",t)})).catch((()=>{t.classList.remove("is-hidden")})).finally((()=>{i.classList.toggle("is-hidden"),e.classList.toggle("is-hidden")}));
//# sourceMappingURL=index.9bd852e7.js.map
