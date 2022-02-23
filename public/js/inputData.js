
function sendNC(){
   let valueSelect =  document.querySelector('#valueSelect').value

   if(valueSelect === "nc"){
       document.querySelector('.ncValue').style.display = 'flex'
    }else{
       document.querySelector('.ncValue').style.display = 'none'
   }

}


// if(sizeInput.search('/[@]/g')) {
//     paper.push(sizeInput.value)
// }

function checkSize(){
    let paper = []
    let sizeInput = document.querySelector("#inputNCValue").value

    if(sizeInput.length > 10){
        document.querySelector(".addNC").style.background = "#008000"
        document.querySelector('.ncValue').style.display = 'none'
        paper.push(sizeInput)
        insertNC(paper)
    }
}


function insertNC(paper){
    console.log(paper)
}