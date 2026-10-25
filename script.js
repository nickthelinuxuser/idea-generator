const genButton = document.querySelector('button.generate');
const ideaText = document.querySelector('h1.idea');

function randomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function startsWithVowel(str) {
    return /^[aeiou]/i.test(str);
}

genButton.addEventListener("click", () => { genButton.innerHTML = "Regenerate?" }, {once: true});

// generate idea
genButton.addEventListener("click", () => {
    genButton.style.animation = "none";
    ideaText.style.animation = "none";
    void genButton.offsetWidth;
    void ideaText.offsetWidth;

    genButton.style.animation = "buttonFade 200ms ease-in-out forwards";
    genButton.style.pointerEvents = "none";
    ideaText.style.animation = "800ms ease-in-out gambleShrink"
    
    let count = 0;
    
    const intervalId = setInterval(() => {
        const writingStyleNum = Math.random();
        
        const style = randomArrayElement(styles);
        const project = randomArrayElement(projects);
        const elementObj = randomArrayElement(elements);
        
        const element = elementObj.name; 
        
        const elementPlural = elementObj.plural ? "s" : ""; 
        
        let aORan = "";
        
        if (writingStyleNum < .33) {
            if (startsWithVowel(element)) {
                aORan = "n";
            }
            
            ideaText.innerHTML = `A${aORan} ${element}-centered ${project} styled like ${style}.`;
        } else if (writingStyleNum < .66) {
            if (startsWithVowel(project)) {
                aORan = "n";
            }
            
            ideaText.innerHTML = `A${aORan} ${project} inspired by ${style} with ${element}${elementPlural}.`;
        } else {
            if (startsWithVowel(style)) {
                aORan = "n";
            }
            
            ideaText.innerHTML = `A${aORan} ${style} styled ${project} with ${element}${elementPlural}.`;
        }
        ++count
        
        if (count === 20) {
            genButton.style.animation = "none";
            void genButton.offsetWidth;
            genButton.style.animation = "buttonFade 200ms ease-in-out forwards reverse";
            genButton.style.pointerEvents = "auto";
            ideaText.style.animation = "none"
            clearInterval(intervalId);
  }
}, 40)

});
