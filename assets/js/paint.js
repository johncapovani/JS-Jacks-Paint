

//This function loops through all img elements in the index.html sheet.
//Adds two event listeners, a mouseover (add opacity) and a mouse out (remove opacity) 
//addEventListener is considered a function
function configureListeners() {
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
    }
}


//When the event listner is triggered it calls this function
///if this (the event that triggers it) it will add the class of dim to it
//dim can be found on the css sheet which adds opacity to the element
//Inokes the getProductInfo function by using the event.target.id as the partnumber value
function addOpacity(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);
}

//Removes the class dim from the object
//removes the color-price text content and the color name content
function removeOpacity(event) {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }

    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    //this tells the user that if the event does not get explicity handled its default action should not be taken as it normally would be
    event.preventDefault();
}


//The partnumber is found from the id
//This function is invoked by the add opacity function!
function getProductInfo(partNumber) {
    let price;
    let colorName;

    switch (partNumber) {
        case 'pn1':
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)
            break;
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
            break;
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'
            updatePrice(colorName, price)
            break;
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White'
            updatePrice(colorName, price)
            break;
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'
            updatePrice(colorName, price)
            break;
        case 'pn7':
            price = '$8.99'
            colorName = 'Medium Blue'
            updatePrice(colorName, price)
            break;
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'
            updatePrice(colorName, price)
            break;
        case 'pn9':
            price = '$17.99'
            colorName = 'Bright Yellow'
            updatePrice(colorName, price)
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;

        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }

}