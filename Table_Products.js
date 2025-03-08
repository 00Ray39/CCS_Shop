function createProductList(products) {
  // Erstelle eine Tabelle
  const table = document.createElement('table');
  
  // Füge den Header hinzu
  const headerRow = document.createElement('tr');
  const headers = ['Artikelnummer', 'Bezeichnung', 'Bild', 'Bestellen'];
  
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  
  // Füge die Produktzeilen hinzu
  products.forEach(product => {
    const row = document.createElement('tr');
    
    const artNrCell = document.createElement('td');
    artNrCell.textContent = product.artNr;
    row.appendChild(artNrCell);
    
    const bezeichnungCell = document.createElement('td');
    bezeichnungCell.textContent = product.bezeichnung;
    row.appendChild(bezeichnungCell);
    
    const imageCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.width = 50;
    imageCell.appendChild(img);
    row.appendChild(imageCell);
    
    const buttonCell = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Bestellen';
    button.onclick = () => orderProduct(product.artNr);
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);
    
    table.appendChild(row);
  });
  
  // Füge die Tabelle zum DOM hinzu
  document.body.appendChild(table);
}

function orderProduct(artNr) {
  console.log(`Produkt mit Artikelnummer ${artNr} wurde bestellt.`);
}

// Beispielprodukte
const products = [
  { artNr: '1234', bezeichnung: 'Produkt 1', thumbnail: 'product1.jpg' },
  { artNr: '5678', bezeichnung: 'Produkt 2', thumbnail: 'product2.jpg' }
];

// Produktliste erstellen
createProductList(products);
