let gridColor,
    gridHeight,
    gridWidth,
    button,
    tableGrid,
    tableRow,
    tableColumn;
    
    button = document.querySelector('input[type=submit]');
    tableGrid = document.querySelector('#pixelCanvas');

// Select color input
gridColor = document.querySelector('#colorPicker');

// Select size input
gridHeight = document.querySelector('#inputHeight');
gridWidth = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
  button.addEventListener("click", function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
  });

//grid creation function
function makeGrid() {
  //grid loop
  for (i = 0; i < gridHeight.value; i++) {
    tableRow = document.createElement('tr');
    for (j = 0; j < gridWidth.value; j++) {
      tableColumn = document.createElement('td');
      tableRow.appendChild(tableColumn);
    }
    tableGrid.appendChild(tableRow);
  }  
}  

//empty grid 
function clearGrid() {
    const emptyGrid;
    if (emptyGrid = tableGrid.hasChildNodes();
    // It has at least one
    tableGrid.removeChild(emptyGrid);
  
}

