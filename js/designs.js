let gridColor,
gridHeight,
gridWidth,
button,
tableGrid,
tableRow,
tableColumn;
button = document.querySelector('form').lastElementChild;
tableGrid = document.querySelector('#pixelCanvas');

// let gridHeight = document.querySelector('#inputHeight').value;
// let gridWidth = document.querySelector('#inputWidth').value;
// Select color input

// Select size input


// When size is submitted by the user, call makeGrid()
button.addEventListener("click", function(e){
  gridHeight = document.querySelector('#inputHeight').value;
  gridWidth = document.querySelector('#inputWidth').value;
  e.preventDefault();
  makeGrid();
});


function makeGrid() {
  clearGrid();
  // gridColor = document.querySelector('#colorPicker').value;
  button = document.querySelector('form').lastElementChild;
  //grid loop
  for (i = 0; i < gridHeight; i++) {
    tableRow = document.createElement('tr');
    for (j = 0; j < gridWidth; j++) {
      tableColumn = document.createElement('td');
      tableRow.appendChild(tableColumn);
    }
    tableGrid.appendChild(tableRow);
  }  
}  

// clear grid function
function clearGrid(){ 
  tableGrid.removeChild();
}


