// Gère toutes les actions sur la partie Tigger (mascotte) de la page
const tigger = {
    // Méthode appelée au démarrage
    init: function() {

        // On sélectionne Tigger
        const tiggerElement = document.querySelector('.tigger');
        
        // On pose un écouteur d'évenement clic
        tiggerElement.addEventListener('click', tigger.handleTiggerClick);
    },

    // Méthode appelée lorsqu'on clique sur Tigger
    handleTiggerClick: function() {

        console.log('Hello depuis handleTiggerClick'); 

        // Je sélectionne le parent dans lequel sera affiché le message 
        const parentElement = document.querySelector('.game');

        // Afficher un message
        tigger.create("Coucou je suis Tigger, pour jouer avec moi appuies sur JOUER", parentElement);

    },

    /**
     * Méthode permettant d'ajouter un message donné dans un parent donné
     * @param {String} textMessage Message à afficher
     * @param {Element} parentElement Elément dans lequel afficher le message
     */
    create: function(textMessage, parentElement) {

        //Avant de créer le nouveau message, on supprime les potentiels messages existants
        tigger.delete(parentElement);

        // On crée un message 
        const messageElement = document.createElement('p');

        // On ajoute les différentes infos au message (classe,texte)
        messageElement.classList.add('message');
        // On ajoute le texte qui provient du paramètre
        messageElement.textContent = textMessage;

        // On ajoute l'erreur en haut du parent
        parentElement.prepend(messageElement);

    },

    /**
     * Méthode permettant de supprimer tous les messages dans un élément donné
     * @param {Element} parentElement Element dans lequel on supprime tous les messages
     */
    delete: function(parentElement) {

        // On cherche dans le parent fourni tous les messages pour les supprimer
        const oldMessages = parentElement.querySelectorAll('.message');

        // Comme querySelectorAll renvoie toujours un tableau contenant les éléments trouvés, on parcourt ce tableau pour supprimer les messages un par un.

        for (const oldMessage of oldMessages) {
            
            // Pour chaque message, on appelle la méthode remove qui permet de les supprimer
            oldMessage.remove();

        }

    }

}