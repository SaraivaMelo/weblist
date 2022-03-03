class NaoConformidade{
    constructor(){
        this.idNC = 0;
        this.arrayPaper = [];

    }


    getId(id){
       
        let result = document.getElementById(id).value  

        if(result == "NC"){
            let icon = document.querySelector(`[key="${id}"]`)
            icon.classList.add('active')
        }
        if(result == "NC"){
            let selectBG = document.getElementById(id)
            if(selectBG.classList.contains('bg')){
                selectBG.classList.remove('bg')
            }
        }

    }

    

    getData(desc, id){
        this.idNC++
        let paper = {}

        let item = desc.split('@')
        item = item[item.length - 1]

      
        paper.id = this.idNC
        paper.idItem = id
        paper.description = item

        this.arrayPaper.push(paper)

        this.validate(this.arrayPaper)
        
    }
    
    
    
    closeInput(id){

        let icon = document.querySelector(`[key="${id}"]`)
        icon.classList.remove('active')
        
        let desc =  document.querySelector(`[written="${id}"]`).value
        if(desc !== ""){
            let selectBG = document.getElementById(id)
            selectBG.classList.add('bg')
        }
        if(desc === ""){
            alert("Item Reprovado! Por favor, adicionar a NC.")
            document.getElementById(id).value = "" 
        }

        this.getData(desc, id)
    }

    
    validate(data){
        let contents;
        let idforDelete;
       for(let i = 0; i< data.length; i++){
           contents = data[i].description
           console.log(contents)
        }

        console.log(data)
    }


}

let nc = new NaoConformidade();







function openModal(){
    document.querySelector('.modalContainer').style.display = 'flex'
}

function closeModal(){
    document.querySelector('.modalContainer').style.display = 'none'
}