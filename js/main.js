function verifierLeFormulaire() {
    /* Cette fonction va m'aider à vérifier 
       que tous les champs du formulaire sont
       correctement renseignés  */


    // Déclaration de variables
    let contenuChampEmail = document.getElementById('email').value;
    let contenuChampMotdePasse = document.getElementById('motpasse').value;

    /* Enregistrement de l'espace d'affichage */
    let espaceDaffichageDuMessage = document.querySelector('#message-confirmation');

    if (contenuChampEmail != '' && contenuChampMotdePasse != '') {

        if (contenuChampMotdePasse.length > 8 && contenuChampMotdePasse.length < 16) {
            
            espaceDaffichageDuMessage.value = "Bravo ! Vous avez correctement rempli les champs du formulaire.";

        } else {
            
            espaceDaffichageDuMessage.value = "Ooohps ! Merci de vérifier que votre mot de passe est entre 8 et 16 caractères";

        }
        
    } else {
        
        espaceDaffichageDuMessage.value = "Zuut ! Veuillez vérifier que tous les champs sont correctement remplis !";

    }

}