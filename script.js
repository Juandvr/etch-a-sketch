const defaultSize = 16;
const defaultColor = 'black';

let curSize = defaultSize;
let curColor = defaultColor;
let isDrawing = false;

document.addEventListener('mousedown', () => (isDrawing = true));
document.addEventListener('mouseup', () => (isDrawing = false));

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
                grid.style.backgroundColor = curColor;
            });
            grid.addEventListener('mousemove', () => {
                if (isDrawing) grid.style.backgroundColor = curColor;
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

window.addEventListener('load', createGrid);