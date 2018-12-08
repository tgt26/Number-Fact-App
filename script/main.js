//jshint esversion: 6

const numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFact);

function getFact() {

    const number = document.querySelector('#numberInput').value;
    const factText = document.querySelector('#factText');
    const fact = document.querySelector('#fact');

    fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text())
        .then(data => {
            fact.style.display = 'block';
            factText.style.display = 'block';

            factText.innerHTML = data;
        });
}