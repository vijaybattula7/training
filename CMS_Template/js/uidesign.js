let designs = document.querySelector('#ourservices');
let dataUrl ='http://localhost:3000/services';
fetch(dataUrl).then(x=>{ return x.json();}).then(y=>{console.log(y)})

async function designList(){
    let toGetData =await fetch(dataUrl);
    let list = await toGetData.json();
    for(let i=0;i<list.length;i++){
    designs.innerHTML+=`<div id="ourservices--div">
    <div class="ourservices--img--div">
        <figure class="interface--img"><img src="${list[i].img_url}"/></figure>
        <figure class="interface--num"><img src="${list[i].num}"/></figure>
    </div>
    <h2 class="grapic">${list[i].category}</h2>
    <p class="website">${list[i].website}</p>
    <p class="website--content">${list[i].website_content}</p>

</div>`
}
console.log(list);
}
designList();