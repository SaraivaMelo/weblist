function loadForm(){
    setTimeout( ()=>{formDisplay()},3000)
}

function formDisplay(){
    document.getElementById('boxLogo').style.display ='none'
    document.getElementById('cardForm').style.display ='flex'
}