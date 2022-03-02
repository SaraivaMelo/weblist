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

        paper.id = this.idNC
        paper.idItem = id
        paper.description = desc

        this.arrayPaper.push(paper)
        console.log(this.arrayPaper)
        
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


}

let nc = new NaoConformidade();