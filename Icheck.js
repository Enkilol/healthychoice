const queryString = new URLSearchParams(window.location.search);
const code = queryString.get("code");

fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json?lang=en`)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.product.image_url;
        const productName = data.product.product_name;
        const nutritionFacts = data.product.nutriments;
        const allergens = data.product.allergens.split(',');


        const productImage = document.createElement('img');
        productImage.onload = () => {
            // L'immagine è stata caricata correttamente
            document.getElementById("product-image").src = imageUrl;
        }
        productImage.onerror = () => {
            // Errore durante il caricamento dell'immagine
            console.error("Impossibile caricare l'immagine del prodotto");
        }
        productImage.src = imageUrl;
        document.body.appendChild(productImage);


        document.getElementById("product-name").innerHTML = productName;
        document.getElementById("Info-nutrizionali").innerHTML = nutritionFacts;
        document.getElementById("allergeni").innerHTML = allergens;

    })
    .catch(error => console.error(error));
