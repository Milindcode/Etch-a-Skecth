const grid = document.querySelector(".grid-main");
const input = document.querySelector("#grid-side");
const apply_btn = document.querySelector("#apply");
const color= document.querySelector("#color-picker");
const vibrant = document.querySelector('.vibrant');
const eraser = document.querySelector('.eraser');
const clear_btn = document.querySelector('.clear');



let color_var= 'black';

apply_btn.addEventListener('click', () =>{
    let gridSize= parseInt(input.value);
    console.log(gridSize);
    addGrid(gridSize);
});


color.addEventListener("input", ()=>{
    color_var= color.value;
    console.log(color_var);

    const cells= document.querySelectorAll('.cell');

    cells.forEach((cell) =>{
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = color_var;
        })
    })
});



eraser.addEventListener('click', ()=>{
    color_var='rgb(255, 212, 240)';
});

clear_btn.addEventListener('click' , ()=>{
    const cells= document.querySelectorAll('.cell');

    cells.forEach((cell) =>{
        cell.style.backgroundColor = 'rgb(255, 212, 240)';
    })
});


vibrant.addEventListener('click', ()=>{
    const cells= document.querySelectorAll('.cell');

    cells.forEach((cell) =>{
        let r= Math.floor(Math.random()*200)+50;
        let b= Math.floor(Math.random()*200)+50;
        let g= Math.floor(Math.random()*200)+50;
        console.log(r+' '+b+' '+g);
        let color_temp = `rgb(${r}, ${b}, ${g})`;
        console.log(color_temp)
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = color_temp;
        })
    })
})




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

    cells.forEach((cell) =>{
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = color_var;
        })
    })

}

addGrid(10);

    