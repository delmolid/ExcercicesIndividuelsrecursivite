import { dossierPrincipal } from "./data.js"; // Import du fichier data.js

// Fonction permettant d'afficher le nom du dossier principal
function afficherDossier(dossierPrincipal) {
  return dossierPrincipal.nom;
}

// console.log(afficherDossier(dossierPrincipal));


function afficherDossierIteratif(dossierPrincipal) {
  if (dossierPrincipal.contenu) {
    console.log(`📂 ${dossierPrincipal.nom}`);
  }

  if (dossierPrincipal.contenu && dossierPrincipal.contenu.length > 0) {
    for (let i = 0; i < dossierPrincipal.contenu.length; i++) {
      // Vérification de la structure des sous-dossiers et fichiers
      if (dossierPrincipal.contenu[i].contenu) {
        console.log(`📂 ${dossierPrincipal.contenu[i].nom}`); // Dossier avec contenu
        // Exploration des sous-dossiers
        for (let j = 0; j < dossierPrincipal.contenu[i].contenu.length; j++) {
          if (dossierPrincipal.contenu[i].contenu[j].contenu) {
            console.log(`📂 ${dossierPrincipal.contenu[i].contenu[j].nom}`);
            // Exploration des sous-dossiers encore plus profonds
            for (
              let k = 0;
              k < dossierPrincipal.contenu[i].contenu[j].contenu.length;
              k++
            ) {
              console.log(
                `📄 ${dossierPrincipal.contenu[i].contenu[j].contenu[k].nom}`
              );
            }
          } else {
            console.log(`📄 ${dossierPrincipal.contenu[i].contenu[j].nom}`); // Fichier dans un dossier sans sous-dossier
          }
        }
      } else {
        // Si cet élément n'a pas de sous-dossier ou de contenu, on le traite comme un fichier
        console.log(`📄 ${dossierPrincipal.contenu[i].nom}`);
      }
    }
  } else {
    // Si aucun contenu, on considère qu'il s'agit d'un fichier (par exemple, `CV.pdf`)
    console.log(`📄 ${dossierPrincipal.nom}`); // Fichier à la racine
  }
}
// afficherDossierIteratif(dossierPrincipal);

function affichageDossierRecursif(dossierPrincipal){ 
if (dossierPrincipal.contenu) {
  console.log(`📂 ${dossierPrincipal.nom}`)
  if (dossierPrincipal?.contenu.length > 0) {
    dossierPrincipal.contenu.forEach(element => affichageDossierRecursif(element));
  }
} else {
  console.log(`📄 ${dossierPrincipal.nom}`)
}
}

affichageDossierRecursif(dossierPrincipal)

// Les fonctions afficherDossierIteratif et afficherDossierRecursif permettent d’explorer une structure hiérarchique de dossiers et fichiers. 
// Cependant, elles utilisent deux approches fondamentalement différentes : l'itération et la récursivité. 
// Voici une comparaison détaillée, avec les avantages et les inconvénients de chaque méthode.

/* ---------------------------------------------------------------------
   | Critère                   | Récursif                            | Itératif                             |
   ---------------------------------------------------------------------
   | Lisibilité                | Simple et reflète la structure      | Moins intuitif à cause de la gestion |
   |                          | imbriquée.                          | manuelle.                            |
   ---------------------------------------------------------------------
   | Complexité du code        | Court et compact.                   | Plus long, nécessite une pile ou     |
   |                          |                                     | une file manuelle.                   |
   ---------------------------------------------------------------------
   | Profondeur des dossiers   | Limité par la taille de la pile     | Pas de limite de profondeur.         |
   |                          | d'appels.                          |                                      |
   ---------------------------------------------------------------------
   | Performance mémoire       | Peut consommer beaucoup de mémoire  | Plus stable sur des structures       |
   |                          | pour une grande profondeur.         | profondes.                           |
   ---------------------------------------------------------------------
   | Contrôle de l'exploration | Suit un ordre naturel (profondeur). | Plus flexible : largeur, profondeur, |
   |                          |                                     | etc.                                 |
   ---------------------------------------------------------------------
   | Débogage                  | Plus difficile à suivre             | Plus facile à suivre dans une boucle.|
   |                          | (multiples appels).                 |                                      |
   ---------------------------------------------------------------------
   | Cas d'utilisation         | Idéal pour des structures modérées  | Préféré pour des structures          |
   |                          | et lisibilité.                      | profondes ou complexes.              |
   ---------------------------------------------------------------------
*/
