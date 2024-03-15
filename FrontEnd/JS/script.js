const url = 'http://localhost:5678/api/';
// Définir l'URL de base pour les requêtes API via swagger

let gallery = [];
let galleryFilter = [];
// Initialisation de deux tableaux pour stocker la galerie complète et la galerie filtrée

let categories = [];
// Initialisation d'un tableau pour stocker les catégories

const elemGallery = document.querySelector(".gallery");
// Sélection de l'élément HTML représentant la galerie
const filtres = document.getElementById('filtres');
// Sélection de l'élément HTML représentant les filtres



const ScrollViewProject = document.getElementById('ViewProject');
// Sélection de l'élément avec l'ID 'ViewProject'
ScrollViewProject.addEventListener('click', () => {
    // Ajout d'un écouteur d'événement au clic sur l'élément 'ScrollViewProject'
    window.location.href = '#portfolio';
    // Défilement vers la section avec l'ID 'portfolio' sur la même page
})

fetch(url + "works", {
    method: "GET"
    // Utilisation Fetch pour effectuer une requête GET 
}).then((result) => {
    return result.json()
    // Conversion de la réponse en format JSON
}).then(data => {
    gallery = data;
    galleryFilter = data;
    // Attribution des données de la galerie à deux tableaux : 'gallery' et 'galleryFilter'
    displayGallery(gallery, elemGallery);

    // Affichage de la galerie dans les éléments HTML correspondants

})

function displayGallery(parametregallerie, elmn) {
    // Définition de la fonction displayGallery qui affiche la galerie dans un élément HTML spécifique

    elmn.innerHTML = '';
    // elmn le contenu de l'élément HTML
    for (let i = 0; i < parametregallerie.length ; i++) {
        // Parcours des éléments de la galerie 
        let fig = document.createElement('figure');
        // Création d'un élément 'figure' pour chaque élément de la galerie
        let img = document.createElement('img');
        // Création d'un élément 'img' avec la source de l'image définie par l'URL dans la galerie
        img.src = parametregallerie[i].imageUrl;
        fig.appendChild(img);

        if (elmn.classList[0] != "boite-project-modal") {
            // Vérification de la classe de l'élément pour déterminer s'il s'agit d'un affichage modal ou non
            let caption = document.createElement('figcaption');
            caption.textContent = parametregallerie[i].title;
            fig.appendChild(caption);
            // ajoute un élément 'figcaption' avec le titre de l'image
        } else {
            const binbackground = document.createElement('button');
            binbackground.classList.add('project-modal');
            const bin = document.createElement('i');
            bin.classList.add('fa-solid');
            bin.classList.add('fa-trash-can');
            bin.classList.add('fa-sm');
            

            binbackground.addEventListener('click', async (e) => {
                // Ajout d'un écouteur d'événement pour la suppression d'une image côté serveur et dans le DOM HTML
                let idGallerie = e.target.getAttribute('data-id');

                await fetch(url + "works/" + idGallerie, {
                    method: "DELETE",
                    // Requête DELETE pour supprimer l'image côté serveur
                    headers: {
                        'Accept': '*/*'
                    }

                }).then((result) => {
                    fetch(url + "works", {
                        method: "GET"
                    }).then((result) => {
                        return result.json()
                    }).then(data => {
                        gallery = data;
                        galleryFilter = data;
                        displayGallery(gallery, elemGallery);
                    
                        // Après suppression, actualisation de la galerie et réaffichage
                    })
                })
            });
        }

        elmn.appendChild(fig);
        // Ajout de la 'figure' à l'élément HTML spécifié
    }
}

fetch(url + "categories", {
    method: "GET"
    // Utilisation de Fetch pour effectuer une requête GET
}).then((result) => {
    return result.json()
    // Conversion de la réponse en format JSON
}).then(data => {
    categories = data;
    // Attribution des données des catégories au tableau 'categories'
    if (filtres != null && filtres != undefined) {
        // Vérification de l'existence de l'élément 'filtres' avant d'appeler la fonction displayCategories
        displayCategories();
        // Affichage des catégories
    }

});


function displayCategories() {
    // Définition de la fonction displayCategories
    let btn = document.createElement('button');
    // Création d'un bouton 'Tous'
    btn.textContent = 'Tous';
    // Définition du texte du bouton à 'Tous'
    btn.setAttribute('data-id', 0);
    // Attribution d'un attribut 'data-id' au bouton avec une valeur de 0
    btn.addEventListener('click', (e) => {
        FiltreProjets(e);
        // Ajout d'un écouteur d'événement au clic sur le bouton 'Tous', appelant la fonction FiltreProjets
    });
    btn.addEventListener('click', (e) => {
        // Ajout d'un écouteur d'événement au clic sur le bouton de catégorie, appelant la fonction FiltreProjets
        for (let i = 0; i < categories.length; i++) {
            let btnColorZero = document.querySelector('[data-id="' + 0 + '"]');
            if (btnColorZero != null) {
                btnColorZero.style.background = 'transparent';
                btnColorZero.style.color = '#1D6154';
            }
            let btnColor = document.querySelector('[data-id="' + categories[i].id + '"]');
            if (btnColor != null) {
                btnColor.style.background = 'transparent';
                btnColor.style.color = '#1D6154';
            }
        }
        btn.style.background = '#1D6154';
        btn.style.color = '#FFFFFF';
        // Changement du style du bouton pour indiquer la catégorie sélectionnée

        FiltreProjets(e);
        // Appel de la fonction FiltreProjets pour filtrer les projets par catégorie
    });

    btn.style.background = '#1D6154';
    btn.style.color = '#FFFFFF';
    // Attribution de styles CSS au bouton

    filtres.appendChild(btn);
    // Ajout du bouton à l'élément HTML représentant les filtres

    for (let i = 0; i < categories.length; i++) {
        let btn = document.createElement('button');
        // Création d'un bouton pour chaque catégorie
        btn.textContent = categories[i].name;
        // Définition du texte du bouton à partir du nom de la catégorie
        btn.setAttribute('data-id', categories[i].id);
        // Attribution d'un attribut 'data-id' au bouton avec la valeur de l'ID de la catégorie

        btn.addEventListener('click', (e) => {
            // Ajout d'un écouteur d'événement au clic sur le bouton de catégorie, appelant la fonction FiltreProjets
            for (let i = 0; i < categories.length; i++) {
                let btnColorZero = document.querySelector('[data-id="' + 0 + '"]');
                if (btnColorZero != null) {
                    btnColorZero.style.background = 'transparent';
                    btnColorZero.style.color = '#1D6154';
                }
                let btnColor = document.querySelector('[data-id="' + categories[i].id + '"]');
                if (btnColor != null) {
                    btnColor.style.background = 'transparent';
                    btnColor.style.color = '#1D6154';
                }
            }
            btn.style.background = '#1D6154';
            btn.style.color = '#FFFFFF';
            // Changement du style du bouton pour indiquer la catégorie sélectionnée

            FiltreProjets(e);
            // Appel de la fonction FiltreProjets pour filtrer les projets par catégorie
        });

        filtres.appendChild(btn);
        // Ajout du bouton à l'élément HTML représentant les filtres
    }
}

const FiltreProjets = (e) => {
    // Définition de la fonction FiltreProjets pour filtrer les projets par catégorie
    galleryFilter = gallery.filter(item => item.categoryId == e.target.getAttribute('data-id'));
    // Filtrage des projets selon l'ID de la catégorie sélectionnée
    if (galleryFilter.length == 0) {
        // Vérification si aucun projet ne correspond à la catégorie sélectionnée
        displayGallery(gallery, elemGallery);
        // Si aucun projet ne correspond, afficher tous les projets
    } else {
        displayGallery(galleryFilter, elemGallery);
        // Sinon, afficher les projets correspondant à la catégorie sélectionnée
    }
};
