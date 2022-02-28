let blankPaper = []
let writeOnPaper = []
let dataKey = []
let registerId = 0;

function getIdBox(boxIdItem){
  
    // RECEBE O IDENTIFICADO DO boxIdItem, QUE PODE SER 01.01 OU 02.01 OU 03.01 E ETC 
    let idBox = boxIdItem 
   
    // RECEBE O CONTEUDO DO SELECT QUE PODE SER NC OU AP OU / OU  ND OU NA
    let valueSelect = document.getElementById(idBox).value 




 
    if(valueSelect === 'ap' || valueSelect === 'na' || valueSelect === 'nd' ){
        document.querySelector(`[written="${idBox}"]`).value = ""
        changeInput(idBox)
    } else if(valueSelect === 'nc'){
        let key = document.querySelector(`[key="${idBox}"]`)
        let show = key.classList.value
        if(show === 'ncValue'){
            showInput(valueSelect, idBox)
        }
    }
   
}



function showInput(vs, inputId){

    let key = document.querySelector(`[key="${inputId}"]`)
    key.classList.add('active')

    let inserted = dataKey.findIndex(( item) => item.registerId == registerId)
   
    if(inserted != -1){
        let notConform = document.querySelector(`[written="${inputId}"]`).value

        notConform != "" ? registerNC(inputId, notConform ) : ""
    }
      
    

   
    
}


function closeInput(closeId){

    let insed = document.querySelector(`[written="${closeId}"]`).value

    if(insed){
        let key = document.querySelector(`[key="${closeId}"]`)
        key.classList.remove('active')
        
    }


    let inserted = dataKey.findIndex(( item) => item.registerId == registerId)

    if(inserted == -1){
        let notConform = document.querySelector(`[written="${closeId}"]`).value
    
        notConform != "" ? registerNC(closeId, notConform) : ""
    }
 
  

}




function registerNC( id, nc){

    let data = id.concat(` ${nc}`)
    let itemForm = dataKey[0]
    let formLength = dataKey.length
    console.log(` Recebi do DB ${formLength} itens no array `)
    dataKey = data.split('@')
    
    if(itemForm !== dataKey[0]){
        registerId ++
    }
    
    dataKey.push(registerId)
    
    
    console.log(dataKey.length)    
   
    
    if(formLength != dataKey.length){
       
        blankPaper.push({
            identifier: registerId,
            idForm: dataKey[0],
            description: dataKey[dataKey.length - 2]
        })

    }

    console.log(blankPaper)

    // recordData(blankPaper)        
}












// function writePaper(vs, id){
//     console.log('write ' + vs, id)
// }



// function blockSave(idBox){
//     console.log(idBox)
// }





function changeInput(changeId){
    let key = document.querySelector(`[key="${changeId}"]`)
    key.classList.remove('active')
}

// function recordData(writeOnDB){
//     writeOnPaper.push(writeOnDB)
//     console.log(writeOnPaper)
// }