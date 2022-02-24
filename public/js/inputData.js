let paper = []

function getIdBox(boxIdItem){

    // recebe o id do boxIdItem
    let idBox = boxIdItem 
    // Recebe o conteúdo do value que tem no select 
    let valueSelect = document.getElementById(idBox).value 
 
    if(valueSelect === 'ap' || valueSelect === 'na' || valueSelect === 'nd' ){
        writePaper(valueSelect, idBox)
    } else if(valueSelect === 'nc'){
        showInput(valueSelect, idBox)
    }else{
       blockSave(idBox)
    }
   
}



function showInput(vs, id){

    let divInput = document.getElementsByClassName('ncValue')
    
    
    Array.from(divInput).forEach(e => {

        let dataKeyValues = e.getAttribute('data-key')
        
        if(dataKeyValues === id){
           let showId = dataKeyValues
          
        }
        
    })

    //    if(vs === "nc"){
    //         let inp = document.querySelector('.ncValue').getAttribute(`data-key${id}`)
    //         console.log(inp)
    //     }else{
    //         document.querySelector('.ncValue').style.display = 'none'
    //     }
}




function writePaper(vs, id){
    console.log('write ' + vs, id)
}



function blockSave(idBox){
    console.log(idBox)
}




function checkSize(){
console.log('chamou')    
    
    // let sizeInput = document.getElementsByTagName(`input > ${id}`).value
    // console.log(sizeInput)

    // if(sizeInput.length > 10){
    //     document.querySelector(".addNC").style.background = "#008000"
    //     document.querySelector('.ncValue').style.display = 'none'
    //     paper.push(sizeInput)
    //     insertNC(paper)
    // }
}


function insertNC(paper){
    console.log(paper)
}