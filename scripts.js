const grid = document.querySelector(".grid-main");
const input = document.querySelector("input");
const apply_btn = document.querySelector("#apply");




apply_btn.addEventListener('click', () =>{
    let gridSize= parseInt(input.value);
    console.log(gridSize);
    addGrid(gridSize);
});


const addRow= (range) => {
    let row = document.createElement('div');
    row.classList.add('row');

    for(let i=0; i< range; i++){
        cell= document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }

    grid.appendChild(row);
}

const addGrid = (range) => {

    while(grid.firstChild != null){
        grid.removeChild(grid.firstChild);
    }
    for(let i=0; i<range; i++){
        addRow(range);
    }



    const cells= document.querySelectorAll('.cell');
    console.log(cells);

    cells.forEach((cell) =>{
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = 'black';
        })
    })
}

addGrid(10);

