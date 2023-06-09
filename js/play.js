const play = {
    // Méthode appelée au démarrage
    init: function() {

        // Sélectionner le bouton jouer
        const playButtonElement = document.querySelector('.play');
        
        // Poser un écouteur d'évenement clic
        playButtonElement.addEventListener('click', play.handlePlayClick);
    },

    handlePlayClick: function() {
        // Enlever la balise image et le button play présent dans la div
        const divElement = document.querySelector('.game');
        divElement.innerHTML = '';

        // Créer une div de classe rules qui contiendra les règles
        const divRulesElement = document.createElement('div');
        divRulesElement.classList.add('divRules');
        divElement.prepend(divRulesElement);

        // Ajouter une image 
        const imgElement = document.createElement('img');
        imgElement.src="../image/cat.png";
        imgElement.classList.add('rulesTigger');
        imgElement.alt="illustration d'un tigre (mascotte)"
        divRulesElement.prepend(imgElement);


        // Ajouter le message de Tigger expliquant les régles 
        tigger.create('Clique sur les deux couleurs que tu souhaites mélanger et regarde le résultat. Si tu as besoin d\'aide, clique sur Tigger.', divRulesElement);


        // Créer une div de classe divButton qui contiendra le bouton
        const divButtonElement = document.createElement('div');
        divButtonElement.classList.add('divButton');
        divElement.append(divButtonElement);

        // Ajouter un boutton suivant, le sélectionner et poser un écouteur dessus 
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.classList.add('nextButton');
        divButtonElement.append(nextButton);
        nextButton.addEventListener('click', play.handleNextClick);
    },

    //Méthode appelée lorsque l'on clique sur le bouton Suivant
    handleNextClick:function() {

        // Ajouter un H2
            const divH2Element = document.createElement('h2');
            divH2Element.textContent = "Les couleurs primaires :";
            divH2Element.classList.add('h2PrimaryColor');
            document.querySelector('.game').prepend(divH2Element);

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

            // Créer une div qui contient les couleurs primaires
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

                    // Yellow
                    const divYellowElement = document.createElement('div');
                    divYellowElement.classList.add('divYellow');
                    divPrimaryColorElement.prepend(divYellowElement);

             // Créer une div avec le nom des couleurs primaires
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

                    // Yellow
                    const divYellowTextElement = document.createElement('div');
                    divYellowTextElement.textContent = "Jaune";
                    divYellowTextElement.classList.add('divYellowText');
                    divPrimaryColorTextElement.prepend(divYellowTextElement);


        // Enlever le bouton suivant
            const nextButton = document.querySelector('.nextButton');
            nextButton.remove();

        // Creation d'un bouton commencer
            const beginButton = document.createElement('button');
            beginButton.textContent = "Commencer";
            beginButton.classList.add('beginButton');
            
            const divButtonElement = document.querySelector('.divButton');
            divButtonElement.prepend(beginButton);
            beginButton.addEventListener('click', play.handleBeginClick);   

        // Ajouter un message quand on clique sur Tigger
            // Sélectionner Tigger
            const tiggerElement = document.querySelector('.rulesTigger');
        
            // Poser un écouteur d'évenement clic
            tiggerElement.addEventListener('click', play.handleTiggerClick);

    },

    // Méthode appelée lorsque l'on clique sur Tigger
    handleTiggerClick: function() {

        // Sélection du parent dans lequel sera affiché le message 
        const parentElement = document.querySelector('.game');

        // Afficher un message
        tigger.create("Tu connais les couleurs primaires ? Alors mélangeons-les. Clique sur le bouton Commencer", parentElement);

    },


    // Méthode appelée lorsque l'on clique sur Commencer
    handleBeginClick: function() {

        // La balise div de classe gameContainer est vidée
        const divElement = document.querySelector('.game');
        divElement.innerHTML = '';

        // Creation d'une div qui contient les couleurs primaires cliquables
        const divColorElement = document.createElement('div');
        divColorElement.classList.add('divColors');
        divElement.prepend(divColorElement);

        // Ajout d'un h2
        const divH2Element = document.createElement('h2');
        divH2Element.textContent = "Choisis deux couleurs à mélanger :";
        divH2Element.classList.add('h2PrimaryColor');
        divColorElement.prepend(divH2Element);

            // conteneur pour les ronds de couleur
            const divColorCircle = document.createElement('div');
            divColorCircle.classList.add('colorCircle');
            divColorElement.append(divColorCircle);
            
                // Blue
                const divBlueElement = document.createElement('div');
                divBlueElement.classList.add('divBlue');
                divBlueElement.dataset.color = "blue";
                divColorCircle.prepend(divBlueElement);

                // Red
                const divRedElement = document.createElement('div');
                divRedElement.classList.add('divRed');
                divRedElement.dataset.color = "red";
                divColorCircle.prepend(divRedElement);

                // Yellow
                const divYellowElement = document.createElement('div');
                divYellowElement.classList.add('divYellow');
                divYellowElement.dataset.color = "yellow";
                divColorCircle.prepend(divYellowElement);
                

        // Creation d'une div contenant les couleurs à mélanger et Tigger
        const divColorMixteElement = document.createElement('div');
        divColorMixteElement.classList.add('divColorMixte');
        divElement.append(divColorMixteElement);

            // Conteneur couleurs
            const divMixedColors = document.createElement('div');
            divMixedColors.classList.add('mixedColors');
            divColorMixteElement.prepend(divMixedColors);

                // Conteneur couleur 1
                const divFirstColorElement = document.createElement('div');
                divFirstColorElement.classList.add('divFirstColor');
                divMixedColors.prepend(divFirstColorElement);

                // Conteneur couleur 2
                const divSecondColorElement = document.createElement('div');
                divSecondColorElement.classList.add('divSecondColor');
                divMixedColors.prepend(divSecondColorElement);

            // Tigger
            const imgElement = document.createElement('img');
            imgElement.src="../image/cat.png";
            imgElement.classList.add('tiggerImg');
            imgElement.alt="illustration d'un tigre (mascotte)"
            divColorMixteElement.append(imgElement);
        
        // Ajouter un message quand on clique sur Tigger
            const tiggerElement = document.querySelector('.tiggerImg');
            tiggerElement.addEventListener('click', play.handleTigger2Click);

        // Création d'une div contenant le bouton Mélanger 
        const divButtonElement = document.createElement('div');
        divButtonElement.classList.add('divButton');
        divElement.append(divButtonElement);

            // Ajouter un boutton Mélanger
            const shuffleButton = document.createElement('button');
            shuffleButton.textContent = "Mélanger";
            shuffleButton.classList.add('shuffleButton');
            divButtonElement.append(shuffleButton);

        // Ecouteurs d'événements 
            // Clic sur bleu
                const blueColor = document.querySelector('.divBlue');
                blueColor.addEventListener('click', play.handleBlueClick)

            // Clic sur rouge
                const RedColor = document.querySelector('.divRed');
                RedColor.addEventListener('click', play.handleRedClick)

            // Clic sur jaune
                const yellowColor = document.querySelector('.divYellow');
                yellowColor.addEventListener('click', play.handleYellowClick)

            // Clic sur le bouton Mélanger 
                const mixedButton = document.querySelector('.shuffleButton');
                mixedButton.addEventListener('click', play.handleShuffleClick)

    },

    // Méthode 2 appelée lorsque l'on clique sur Tigger
    handleTigger2Click: function() {
        const parentElement = document.querySelector('.game');
        tigger.create("Clique sur deux couleurs pour les sélectionner puis sur le bouton Mélanger pour voir le résultat", parentElement);

    },

    // Méthode appelée lorsque l'on clique sur la pastille bleue
    handleBlueClick:function(event) {
        
        // On récupère l'élément sélectionné
        const clickedColor = event.target;

        //Appel à la méthode permettant de remplir les balises div avec les couleurs sélectionnées
        play.divSelectedColors(clickedColor);
    },

    // Méthode appelée lorsque l'on clique sur la pastille rouge
    handleRedClick:function(event) {
        const clickedColor = event.target;
        play.divSelectedColors(clickedColor);
    },

    // Méthode appelée lorsque l'on clique sur la pastille jaune
    handleYellowClick:function(event) {
        const clickedColor = event.target;
        play.divSelectedColors(clickedColor);
    },

    // Définition de deux varaiables correspondantes aux couleurs sélectionnées par l'utilisateur et de l'objet qui les contiendra
    firstColor: "",
    secondColor: "",
    selectedColorsTable: {},


    // Méthode pour déterminer first et secondColor
    selectedColors: function(clickedColor) {
        
        if (play.firstColor === "") {
            play.firstColor = clickedColor.dataset.color;
            play.selectedColorsTable.firstColor = play.firstColor;
        } else if (play.secondColor === "" & play.firstColor != clickedColor.dataset.color) {
            play.secondColor = clickedColor.dataset.color;
            play.selectedColorsTable.secondColor = play.secondColor;
        } else if (play.firstColor == clickedColor.dataset.color) {
            tigger.create("Tu as choisis deux fois la même couleur, choisis-en une autre", document.querySelector('.game'))
        } else {
            tigger.create("Tu as déjà choisis deux couleurs, appuie sur Mélanger pour voir le résultat", document.querySelector('.game'))
        }

        return play.selectedColorsTable;

    },

    //Méthode qui permet de remplir divFirst et divSecondColor avec les couleurs sélectionnées et de grossir la bordure des pastilles sélectionnées
    divSelectedColors: function(clickedColor) {
        const selectedColors = play.selectedColors(clickedColor);
        const firstColor = selectedColors.firstColor;
        const secondColor = selectedColors.secondColor;

        if(firstColor == "red") {
            document.querySelector('.divFirstColor').classList.add('red');
            document.querySelector('.divRed').classList.add('selectedColor');
        } else if (firstColor == "blue") {
            document.querySelector('.divFirstColor').classList.add('blue');
            document.querySelector('.divBlue').classList.add('selectedColor');
        } else if(firstColor == "yellow") {
            document.querySelector('.divFirstColor').classList.add('yellow');
            document.querySelector('.divYellow').classList.add('selectedColor');
        } else {
            return false;
        }

        if(secondColor == "red") {
            document.querySelector('.divSecondColor').classList.add('red');
            document.querySelector('.divRed').classList.add('selectedColor');
        } else if (secondColor == "blue") {
            document.querySelector('.divSecondColor').classList.add('blue');
            document.querySelector('.divBlue').classList.add('selectedColor');
        } else if (secondColor == "yellow") {
            document.querySelector('.divSecondColor').classList.add('yellow');
            document.querySelector('.divYellow').classList.add('selectedColor');
        } else {
            return false;
        }
    },


    // Méthode appelée lorsque l'on clique sur Mélanger
    handleShuffleClick: function() {
        // Afficher un message de Tigger
        tigger.create("Clique sur le bouton Rejouer pour faire un nouveau mélange", document.querySelector('.game'))
     
        // Supression de l'événement sur Tigger et sur les pastilles de couleurs 
        document.querySelector('.tiggerImg').removeEventListener('click', play.handleTigger2Click);

        document.querySelector('.divBlue').removeEventListener('click', play.handleBlueClick);

        document.querySelector('.divRed').removeEventListener('click', play.handleRedClick);

        document.querySelector('.divYellow').removeEventListener('click', play.handleYellowClick);

        // Changer le texte du bouton
        document.querySelector('.shuffleButton').textContent = "Rejouer";

        // Appel à la méthode obtainedColor
        play.obtainedColor(); 

        // Réinitialisation des valeurs par défaut
        play.firstColor = "",
        play.secondColor = "",
        play.selectedColorsTable = {};

        // Modification de l'événement 
        document.querySelector('.shuffleButton').removeEventListener('click', play.handleYellowClick);
        document.querySelector('.shuffleButton').addEventListener('click', play.handleBeginClick)

    },

    // Méthode pour que la couleur obtenue par le mélange s'affiche dans la div de classe mixedColor
    obtainedColor: function() {
        const divFirstColor = document.querySelector('.divFirstColor');
        const divSecondColor = document.querySelector('.divSecondColor');
        const divMixedColor = document.querySelector('.mixedColors');

        if(divFirstColor.classList.contains('blue') & divSecondColor.classList.contains('red') | divFirstColor.classList.contains('red') & divSecondColor.classList.contains('blue')) {
            divMixedColor.classList.add('purple');
            divFirstColor.remove();
            divSecondColor.remove();
        } else if(divFirstColor.classList.contains('blue') & divSecondColor.classList.contains('yellow') | divFirstColor.classList.contains('yellow') & divSecondColor.classList.contains('blue')) {
            divMixedColor.classList.add('green');
            divFirstColor.remove();
            divSecondColor.remove();
        } else if (divFirstColor.classList.contains('yellow') & divSecondColor.classList.contains('red') | divFirstColor.classList.contains('red') & divSecondColor.classList.contains('yellow')) {
            divMixedColor.classList.add('orange');
            divFirstColor.remove();
            divSecondColor.remove();
        } else {
            return false;
        }

    }

}