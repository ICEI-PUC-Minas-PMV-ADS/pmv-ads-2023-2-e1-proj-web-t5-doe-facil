$g_makeMenu()
$g_makeLateralMenu('donations')

const editBtList = document.querySelectorAll(".editDoacao") 
editBtList.forEach(function(editBtn){
editBtn.onclick = function (e){
    console.log('fuiClicado', e)
}
})