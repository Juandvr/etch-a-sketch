const defaultSize = 16;

let curSize = defaultSize;

const size = document.getElementById('size');

function createGrid() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    
    for(let i = 0; i < curSize; i++) {
        for(let j = 0; j < curSize; j++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'cell');
            grid.addEventListener('mouseover', () => {grid.classList.toggle('draw')});
            container.appendChild(grid);
        }
    }

    document.documentElement.style.setProperty('--curWidth', curSize);
    document.documentElement.style.setProperty('--curHeight', curSize);
}

window.addEventListener('load', createGrid);

size.addEventListener('change', () => {
    curSize = size.value;
    createGrid();
})

