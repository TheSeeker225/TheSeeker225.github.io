function verifierLeFormulaire() {
    /* Cette fonction va m'aider à vérifier 
       que tous les champs du formulaire sont
       correctement renseignés */


    /* Enregistrement des champs du formulaire */
    let champDeSaisieDeEmail = document.getElementById('email');
    let champDeSaisieDeMotPasse = document.getElementById('motpasse');
    
    /* Enregistrement de l'espace d'affichage */
    let espaceDaffichageDuMessage = document.querySelector('#message-confirmation');
    
    if (champDeSaisieDeEmail.length > 16 && champDeSaisieDeMotPasse.length > 8) {

        espaceDaffichageDuMessage.innerText = "Bravo ! Vous avez correctement rempli les champs du formulaire.";

    } else {

        espaceDaffichageDuMessage.innerText = "Ooohps ! Veuillez vérifier que les champs du formulaire sont correctement remplis !";

    }
    
}

function direBonjour(){
    
    var message = document.querySelector('#message-confirmation');

    message.innerText = "Bravo ! Hello World !";
}