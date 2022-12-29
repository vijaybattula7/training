let submitBtn = document.querySelector('#submit--btn');
// POST the data to DB onclick on submit button
submitBtn.addEventListener('click',()=>{
    let title = document.querySelector('#Title');
let subtitle = document.querySelector('#Subtitle');
let image = document.querySelector('#Image');
let content = document.querySelector('#Content');
let Status = document.querySelector('#Status');

fetch('http://localhost:3000/services',{
    method:'POST',
    headers:{'content-type': "application/json"},
    body:JSON.stringify({
        "Title":title.value,
        "Subtitle":subtitle.value,
        "Image":image.value,
        "Content":content.value,
        "Status":Status.value
    }),
     })
     .then(res=>{ return res.json() })
     .then(data1=>{console.log(data1);})
     .catch(z=>{console.log('this is error');})
    });