&nbsp;
# Sophie Bluel: Architecte d'intérieur

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)



![](https://forthebadge.com/images/badges/built-with-love.svg)
&nbsp;

&nbsp;
## Description

Projet 3 du parcours développeur web de chez OpenClassrooms

L'objectif était de créez une page web dynamique avec JavaScript 
> Pour en savoir plus, retrouvez le brief de mission en bas de page


## Compétences évaluées

- Créez une page web dynamique avec JavaScript 

- Récupérer les données utilisateurs dans le JavaScript via des formulaires

- Manipuler les éléments du DOM avec JavaScript
 
- Gérer les événements utilisateurs avec JavaScript
 

&nbsp;

&nbsp;
## Installation du backend

> Cloner le repo en local

> Se placer dans le dossier ``Backend``

> Pour lancer l'API ``npm start``

## Compte admin de test

> email: sophie.bluel@test.tld

> password: S0phie 



&nbsp;

&nbsp;
## Brief de mission

> Vous travaillez comme développeur front-end pour l’agence ArchiWebos qui comprend 50 salariés. 

> Ayant terminé votre dernier projet avec un peu d'avance, vous êtes envoyé en renfort comme développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.

>  Vous devez donc développer :

> -la page de présentation des travaux de l'architecte ;

> -la page de connexion de l'administrateur du site

> -la modale permettant d'uploader de nouveaux médias 

&nbsp;


> @copyright Johnny Clarys# Projet3_Apprenez_a_programmer_avec_JS
# Projet3_Apprenez_a_programmer_avec_JS



MON PROJET ÉTAPE PAR ÉTAPE : 


ETAPE 0 

● Terminer les cours JavaScript ✔️

● Installer NodeJS et npm ✔️

● Analysez en détail les différents éléments de l’énoncé : prenez
connaissance du Kanban et du code mis à votre disposition, et n’hésitez
pas à prendre des notes si nécessaire. ✔️

● Clonez le repo GitHub. ✔️

● Suivez le ReadMe pour l’installation des dépendances du dossier
Backend pour l’installation des dépendances. ✔️

● Lancez le back-end du projet et découvrez la documentation Swagger
de l’API. ✔️

● Faites un test de la route de récupération des travaux de l’architecte, via
Swagger ou un outil comme Postman, afin de connaître des données
existantes en base de données. ✔️

ETAPE 1

1.1

● Installé l’environnement de développement.✔️

● Testé que je récupère bien les informations du back-end (par exemple
avec Postman ou Swagger). ✔️ 

● La galerie fonctionnelle affichée avec la liste des travaux provenant du
back-end. ✔️

● Faites l’appel à l’API avec fetch afin de récupérer dynamiquement les
projets de l’architecte. ✔️

● Utilisez JavaScript pour ajouter à la galerie les travaux de l’architecte que
vous avez récupéré. ✔️

● Supprimez du HTML les travaux qui étaient présents. Il ne doit vous rester
que le contenu que vous avez ajouté dynamiquement grâce à JavaScript. ✔️

1.2

● Tous les projets s’affichant dans la galerie en provenance du back-end.✔️

● La possibilité de filtrer la galerie par catégorie de projet. ✔️

● Il y a plusieurs façons ici de récupérer les catégories. En analysant les
informations à votre disposition, tentez de répondre aux questions
suivantes pour implémenter les catégories :

■ Ai-je suffisamment d’informations dans les données
reçues ?  ✔️ oui

■ Dois-je faire un autre appel à l’API ?  ✔️ Non

● Au clic sur un élément du menu de catégories, filtrer les travaux selon le
filtre sélectionné.✔️


ETAPE 2

2.1

● La page d’accueil avec la galerie fonctionnelle et filtrable par catégorie.  ✔️

● La page de login intégrée mais non fonctionnelle. ✔️

● Avant de considérer comme conclu le travail d’intégration,
demandez-vous :Est-ce que le rendu est conforme à la maquette ? ✔️

2.2

● Le formulaire intégré à la page de connexion. ✔️

● Le formulaire de connexion fonctionnel avec : 

○ Redirection vers la page d’accueil quand la connexion est
confirmée. ✔️

○ Un message d’erreur quand les informations utilisateur / mot de
passe ne sont pas correctes. ✔️

● Pour réaliser cette étape, demandez-vous :

○ Quel type de requête me permet d’envoyer les valeurs des entrées
de mon formulaire ? méthode POST (lignes 15 et 16 de login.js) ✔️

○ Si la combinaison utilisateur - mot de passe est correcte, comment
rediriger vers la page d’accueil et s’assurer que la configuration est
maintenue ? 
avec window.location.href ( ligne 36 de login.js) 
et localStorage.setItem('token' (ligne 33 de login.js) ✔️

○ Si la combinaison est fausse, comment prévenir l’utilisateur ?
affichage du message d'erreur dans un élément avec la classe 'error' 
catch((error) => {
        let elm = document.querySelector('.error');
        elm.innerHTML = error.message;
        elm.style.display = 'flex';
( lignes 38 à 41 du login.js)  ✔️
Point de vigilance :

● Pensez à stocker le token d'authentification pour pouvoir réaliser les
envois et suppressions de travaux.




