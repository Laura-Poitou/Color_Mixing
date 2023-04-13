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
        tigger.create('Clique sur deux couleurs pour voir le résultat. ', divRulesElement);


        // Ajouter un boutton suivant, le sélectionner et poser un écouteurs dessus 
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.classList.add('nextButton');
        divRulesElement.append(nextButton);
        nextButton.addEventListener('click', play.handleNextClick);
    },

    handleNextClick:function() {
        // On enlève la balise image et le button play présent dans la div
        const divElement = document.querySelector('.gameContainer');
        divElement.innerHTML = '';

        // On créé une div de classe rules qui contiendra les règles
        const divGameElement = document.createElement('div');
        divGameElement.classList.add('divGame');
        divElement.prepend(divGameElement);
    }

}