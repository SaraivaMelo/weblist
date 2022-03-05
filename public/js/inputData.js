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

        
        this.updateModal(this.arrayPaper)
    }
    
    
    
    updateModal(data){
            this.cleanModal();
            data.forEach( item => this.show(item));
    }


    deleteItem(index){
        let del = index-1
        this.arrayPaper.splice(del, 1);
        this.updateModal(this.arrayPaper)
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



    show(item){
        const div = document.createElement('div');
        div.classList.add('itensGroup');
        div.innerHTML = `
            <div class="ncId" id="ncId" data-indice=${item.id}>${item.idItem}</div>
            <div class="modaldescription" id="modaldescription">${item.description}</div>
            <img src="img/excluir.png" alt="Delete" id="delete" onclick="nc.deleteItem(${item.id})">
            `
            document.getElementById('ncInserted').appendChild(div)

    }  
    
    cleanModal(){
        const ncInsert = document.getElementById('ncInserted')
        while(ncInsert.firstChild){
            ncInsert.removeChild(ncInsert.lastChild);
        }
    }
 

}

let nc = new NaoConformidade();

function openModal(){
    document.querySelector('.modalContainer').style.display = 'flex'
}

function closeModal(){
    document.querySelector('.modalContainer').style.display = 'none'
}

