let paper = []

function getIdBox(boxIdItem){

    // recebe o id do boxIdItem
    let idBox = boxIdItem 
    // Recebe o conteúdo do value que tem no select 
    let valueSelect = document.getElementById(idBox).value 


    console.log(valueSelect)
 
    if(valueSelect === 'ap' || valueSelect === 'na' || valueSelect === 'nd' ){
        document.querySelector(`[written="${idBox}"]`).value = ""
        changeInput(idBox)
        writePaper(valueSelect, idBox)
    } else if(valueSelect === 'nc'){
        showInput(valueSelect, idBox)
    }else{
    //    blockSave(idBox)
    }
   
}



function showInput(vs, inputId){
    let key = document.querySelector(`[key="${inputId}"]`)
    key.classList.add('active')
    let insertNC = document.querySelector(`[written="${inputId}"]`).value
    paper.push(insertNC)
    insertNC = ""
    console.log(paper)
}




function writePaper(vs, id){
    console.log('write ' + vs, id)
}



function blockSave(idBox){
    console.log(idBox)
}




function closeInput(closeId){
    let insed = document.querySelector(`[written="${closeId}"]`).value
    if(insed){
        let key = document.querySelector(`[key="${closeId}"]`)
        key.classList.remove('active')
    }
}

function changeInput(changeId){
    let key = document.querySelector(`[key="${changeId}"]`)
    key.classList.remove('active')
}

function insertNC(paper){
    console.log(paper)
}