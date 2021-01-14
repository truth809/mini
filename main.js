// fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);

}

// update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
    
}

// create html list item the given data item
function createHTMLString(item) {
    return `
      <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description">${item.gender}, ${item.size}</span>
      </li>
    `;
}

// main
loadItems()
.then(items => {
    displayItems(items);
    // setEventListeners(items);
})
.catch(console.log(''));