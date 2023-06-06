const grid = document.querySelector(".grid-main");
const input = document.querySelector("input");


console.log(input.value);

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
    for(let i=0; i<range; i++){
        addRow(range);
    }
}

addGrid(10);