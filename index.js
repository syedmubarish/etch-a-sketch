const container = document.querySelector(".container");
const changeBtn = document.querySelector(".btn-container button")

function createSquareDivs(number) {
    for (let rows = 0; rows < number; rows++) {
        const row = document.createElement("div");
        row.classList.add("row-div");
        for (let cols = 0; cols < number; cols++) {
            const col = document.createElement("div");
            col.classList.add("col-div")
            col.style.width = `${700 / number}px`
            col.style.height = `${700 / number}px`
            
            //   col.textContent=cols
            
            row.appendChild(col)
        }
        
        container.appendChild(row);
    }
}

createSquareDivs(16);


function doPainting(){
    const rows = Array.from(document.querySelectorAll(".row-div"))
    for(const row of rows){
        row.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor = "grey"
        })
    }
}

doPainting()

changeBtn.addEventListener('click',()=>{
    
    const gridSize = prompt("Enter grid size",16)
    
    
    if(gridSize.trim()==""||isNaN(+gridSize)||gridSize>100){
        alert("Enter valid number less than 100");
        return
    }
    const parsedGridSize = +gridSize
    const rows = Array.from(document.querySelectorAll(".row-div"))
    for(const row of rows){
        row.remove()
    }
    createSquareDivs(parsedGridSize)
    doPainting()
})
