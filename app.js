import { countsAsAYes } from './test/counts-as-a-yes.js';

const button = document.getElementById('button');
const results = document.getElementById('results');



button.addEventListener('click', () => {

    const userName = prompt(`What is your name?`);
    let correctAnswers = 0
    console.log(userName)
    
    
    
    const userHasConfirmed = confirm(`${userName}!Do you really want to take this quiz?`);
    if (!userHasConfirmed) {
        alert(`You have opted out.`);
        return;
    }

    


  
    const yearResponse = prompt(`Okay ${userName}! Was Nicolas born in 1964?`);
        if (countsAsAYes(yearResponse)) {
           correctAnswers++;
    }



    const dinoResponse = prompt(`Okay ${userName}! Did Nicolas once accidently buy a stolen dinosaur skull?`);
        if (countsAsAYes(dinoResponse)) {
            correctAnswers++;
    }




    const catResponse = prompt(`Okay ${userName}! Was Nicolas Cage's cat named, Lewis?`);
        if (!countsAsAYes(catResponse)) {
           correctAnswers++;
    }




    alert('Quiz complete! Check the page for your results');
    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 3.`;

});