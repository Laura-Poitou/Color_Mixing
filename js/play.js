const play = {
    // Méthode appelée au démarrage
    init: function() {

        // On sélectionne le bouton jouer
        const playButtonElement = document.querySelector('.play');
        
        // On pose un écouteur d'évenement clic
        playButtonElement.addEventListener('click', play.handlePlayClick);
    },

    handlePlayClick: function() {
        // On enlève la balise image et le button play présent dans la div
        const divElement = document.querySelector('.gameContainer');
        divElement.innerHTML = '';

        // On créé une div de classe rules qui contiendra les règles
        const divRulesElement = document.createElement('div');
        divRulesElement.classList.add('divRules');
        divElement.prepend(divRulesElement);

        // On ajoute une image 
        const imgElement = document.createElement('img');
        imgElement.src="../image/cat.png";
        imgElement.classList.add('rulesTigger');
        imgElement.alt="illustration d'un tigre (mascotte)"
        divRulesElement.prepend(imgElement);


        // On ajoute le message de Tigger expliquant les régles 
        tigger.create('Clique sur les deux couleurs que tu souhaites mélanger et regarde le résultat. Si tu as besoin d\'aide, clique sur Tigger.', divRulesElement);


        // On créé une div de classe button qui contiendra le bouton
        const divButtonElement = document.createElement('div');
        divButtonElement.classList.add('divButton');
        divElement.append(divButtonElement);

        // Ajouter un boutton suivant, le sélectionner et poser un écouteurs dessus 
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.classList.add('nextButton');
        divButtonElement.append(nextButton);
        nextButton.addEventListener('click', play.handleNextClick);
    },

    handleNextClick:function() {

        // Add H2
            const divH2Element = document.createElement('h2');
            divH2Element.textContent = "Les couleurs primaires :";
            divH2Element.classList.add('h2PrimaryColor');
            document.querySelector('.gameContainer').prepend(divH2Element);

        // Supprimer la balise p de classe message
            const pElement = document.querySelector('.message');
            pElement.remove();

        // Créer une div contenant le rappel sur les couleurs primaires
            // Sélection de la div de classe divRules
            const divRulesElement = document.querySelector('.divRules');

            // Ajout de la div de classe Reminder
            const divReminderElement = document.createElement('div');
            divReminderElement.classList.add('divReminder');
            divRulesElement.prepend(divReminderElement);

            // Create div with primary colors
                const divPrimaryColorElement = document.createElement('div');
                divPrimaryColorElement.classList.add('divPrimaryColor');
                divReminderElement.prepend(divPrimaryColorElement);

                    // Blue
                    const divBlueElement = document.createElement('div');
                    divBlueElement.classList.add('divBlue');
                    divPrimaryColorElement.prepend(divBlueElement);

                    // Red
                    const divRedElement = document.createElement('div');
                    divRedElement.classList.add('divRed');
                    divPrimaryColorElement.prepend(divRedElement);

                    // Blue
                    const divYellowElement = document.createElement('div');
                    divYellowElement.classList.add('divYellow');
                    divPrimaryColorElement.prepend(divYellowElement);

             // Create div with primary colors text
                const divPrimaryColorTextElement = document.createElement('div');
                divPrimaryColorTextElement.classList.add('divPrimaryColorText');
                divReminderElement.append(divPrimaryColorTextElement);

                    // Blue
                    const divBlueTextElement = document.createElement('div');
                    divBlueTextElement.textContent = "Bleu";
                    divBlueTextElement.classList.add('divBlueText');
                    divPrimaryColorTextElement.prepend(divBlueTextElement);

                    // Red
                    const divRedTextElement = document.createElement('div');
                    divRedTextElement.textContent = "Rouge";
                    divRedTextElement.classList.add('divRedText');
                    divPrimaryColorTextElement.prepend(divRedTextElement);

                    // Blue
                    const divYellowTextElement = document.createElement('div');
                    divYellowTextElement.textContent = "Jaune";
                    divYellowTextElement.classList.add('divYellowText');
                    divPrimaryColorTextElement.prepend(divYellowTextElement);


        // Enlever le bouton suivant
            const nextButton = document.querySelector('.nextButton');
            nextButton.remove();

        


        // Ajouter un message quand on clique sur Tigger
            // On sélectionne Tigger
            const tiggerElement = document.querySelector('.rulesTigger');
        
            // On pose un écouteur d'évenement clic
            tiggerElement.addEventListener('click', play.handleTiggerClick);

    },

    // Méthode appelée lorsqu'on clique sur Tigger
    handleTiggerClick: function() {

        // Je sélectionne le parent dans lequel sera affiché le message 
        const parentElement = document.querySelector('.gameContainer');

        // Afficher un message
        tigger.create("Tu connais les couleurs primaires ? Alors mélangeons-les. Clique sur le bouton Commencer", parentElement);

    },


    // Méthode appelée lorsqu'on clique sur Commencer
    handleBeginClick: function() {

        

    },

}