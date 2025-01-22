import { dossierPrincipal } from "./data.js"; // Import du fichier data.js

// Fonction permettant d'afficher le nom du dossier principal
function afficherDossier(dossierPrincipal) {
  return dossierPrincipal.nom;
}

console.log(afficherDossier(dossierPrincipal));

// Fonction récursive permettant d'afficher le contenu du dossier principale Ada
function afficherDossierIteratif(dossierPrincipal) {
 let contenu = dossierPrincipal.contenu;
 console.log(contenu);
 let collectif = [];
 for (let tableau of contenu) {
  console.log(tableau.nom) 
    
}
}
afficherDossierIteratif(dossierPrincipal)

function afficherDossierRecursif(dossierPrincipal) {
  if (dossierPrincipal.contenu.length === 0) {
    console.log(dossierPrincipal.nom); 
    afficherDossierRecursif(dossierPrincipal.contenu);
  } else {
      for (let i = 0; i < dossierPrincipal.contenu.length; i++) {
        console.log(dossierPrincipal.contenu[i].nom);
   }
    }


  }
  
afficherDossierRecursif(dossierPrincipal);
