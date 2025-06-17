const container = document.querySelector(".container");
function createSquareDivs(number) {
    for (let rows = 0; rows < number; rows++) {
        const row = document.createElement("div");
        row.classList.add("row-div");
        for (let cols = 0; cols < number; cols++) {
            const col = document.createElement("div");
            col.classList.add("col-div")
            //   col.textContent=cols
            row.appendChild(col)
        }
        
        container.appendChild(row);
    }
}

createSquareDivs(16);

const rows = Array.from(document.querySelectorAll(".row-div"))

for(const row of rows){
    row.addEventListener("mouseover",(e)=>{
        e.target.style.backgroundColor = "grey"
    })
}





