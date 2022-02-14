const preview = document.querySelector(".preview");
const pizza = document.querySelector(".pizza");
const pizzaNom = document.querySelector(".pizzaNom");

function charge() {
    preview.classList.add('preview_animated');
    pizza.classList.add('pizza_animated');
    pizzaNom.classList.add('pizzaNom_animated');

    fetch('JSon.json')
        .then(response => { /* Une fois que le fichier est chargé */
            return response.json();  /* Convertissons le en json */
        })
        .then(data => { /* Une fois le fichier converti */
            createPizza(data); /* Appelons notre fonction */
        });

}
const createPizza = function (data) {
    /* Références dans le document HTML */
    const pizza = document.querySelector('.pizzaNom');
    const enseigne = document.querySelector('.sortie');
    const slogan = document.querySelector('.slogan');

    /* Populons le HTML avec le contenu du JSON */
   
    let pizzaList = '';
    for (var x = 0; x < data.pizza.length; x++) {
        let pizza = data.pizza[x];
        pizzaList += '<ul>' + pizza.name + ' | ' + pizza.prix + '<img src="'+ pizza.photo + '"/>' + '</ul>' ;
    }

    pizza.innerHTML = pizzaList;
    enseigne.innerHTML = data.enseigne;
    slogan.innerHTML = data.slogan;
}

