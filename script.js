const defaultSize = 16;
const defaultColor = 'black';

let curSize = defaultSize;
let curColor = defaultColor;

let isDrawing = false;

document.addEventListener('mousedown', () => (isDrawing = true));
document.addEventListener('mouseup', () => (isDrawing = false));

let isEraser = false;

let eraser = document.getElementById('eraser');

eraser.addEventListener('click', () => {
    isEraser = !isEraser;
    if (isEraser) {
        eraser.style.backgroundColor = '#d7d6d6';
        } else {
            eraser.style.backgroundColor = '#eee';
        }
})

const size = document.getElementById('size');
const color = document.getElementById('colorPicker');

function createGrid() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    
    for(let i = 0; i < curSize; i++) {
        for(let j = 0; j < curSize; j++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'cell');
            grid.addEventListener('mousedown', () => {
                grid.style.backgroundColor = isEraser ? 'white' : curColor;
            });
            grid.addEventListener('mousemove', () => {
                if (isDrawing) grid.style.backgroundColor = isEraser ? 'white' : curColor;
            });
            container.appendChild(grid);
        }
    }

    document.documentElement.style.setProperty('--curWidth', curSize);
    document.documentElement.style.setProperty('--curHeight', curSize);
}

size.addEventListener('change', () => {
    curSize = size.value;
    createGrid();
})

color.addEventListener('change', () => {
    curColor = color.value;
})

document.getElementById('clear').addEventListener('click', ()=> {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
})

window.addEventListener('load', createGrid);