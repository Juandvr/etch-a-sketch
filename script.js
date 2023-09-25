function createGrid() {
    const container = document.getElementById("container");
    
    for(let i = 0; i < 256; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        container.appendChild(grid);
    }
}

window.addEventListener("load", createGrid);