const container = document.querySelector('.container');
const button = document.querySelector('#button');
let gridsize = 16;
let mouseButton = false;

function makeGrid(gridsize) {
    container.innerHTML = '';
    container.style.cssText = 
        `grid-template-columns: repeat(${gridsize}, 1fr); 
         grid-template-rows: repeat(${gridsize}, 1fr);`;

    for (let i = 0; i < gridsize * gridsize; i++){        
        let xpos = i%gridsize;
        let ypos = Math.floor(i/gridsize);

        const gridElement = document.createElement('div');
        gridElement.setAttribute('class', 'gridelement');
        gridElement.style.cssText = `grid-column-start: ${xpos+1}; grid-row-start: ${ypos+1};`;

        gridElement.addEventListener('mousedown', draw);
        gridElement.addEventListener('mouseover', draw);
        gridElement.addEventListener('dragstart', (e) => {e.preventDefault(); console.log('dragdown', e)});

        container.appendChild(gridElement);
    }
}

function draw(pixel) {
    if (!mouseButton) return;
    pixel.target.style.backgroundColor = 'black';
}

window.addEventListener('mousedown', () => {mouseButton = true; console.log('down');});
window.addEventListener('mouseup', () => {mouseButton = false; console.log('up');});

button.addEventListener('click', () => {
    let pValue = prompt('enter grid size, default = 16');
    makeGrid(pValue > 0 ? pValue : 16);
});

makeGrid(gridsize);