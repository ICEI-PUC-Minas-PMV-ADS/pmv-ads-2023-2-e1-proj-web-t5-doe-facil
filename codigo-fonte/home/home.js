var elem = document.getElementById('btn-serDoador')
elem.addEventListener('click', function () {
    window.location.href = '/codigo-fonte/login'
})

var elem = document.getElementById('botao-doacao')
elem.addEventListener('click', function () {
    window.location.href = '/codigo-fonte/login'
})


let count = 1;
document.getElementById("radio0").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++
    if(count>3){
    count = 1;
    }
    
    document.getElementById("radio0"+count).checked = true;
}
