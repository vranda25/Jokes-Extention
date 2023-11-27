fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(data => {
        const jokeText = data.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerText = jokeText;
    })