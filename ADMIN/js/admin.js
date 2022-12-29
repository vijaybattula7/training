let ourServiceData = document.querySelector('#servicedata--table');
let dataUrl ='http://localhost:3000/services';
fetch(dataUrl).then(x=>{ return x.json();}).then(y=>{console.log(y)})


async function ourService(){
    let Active;
    let toGetData =await fetch(dataUrl);
    let list = await toGetData.json();
    for(let i=0;i<list.length;i++){
        
        if(`${list[i].Status}` == "Active"){
            console.log("ooooooooooooooooooooooo");
            ourServiceData.innerHTML+=  `<tr>
        <td>${i+1}</td>
        <td><img src="${list[i].Image}"/></td>
        <td>${list[i].Title}</td>
        <td>${list[i].Subtitle}</td>
        <td >${list[i].Content}</td>
        <td>${list[i].Status}</td>
      </tr>`
      
   }
}
}
ourService();