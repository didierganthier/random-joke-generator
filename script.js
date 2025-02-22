const baseUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJoke = () => {
    const jokeElement = document.getElementById("joke");
    const getJokeBtn = document.getElementById("getAJokeBtn");
    jokeElement.innerHTML = "⏳ Loading...";
    getJokeBtn.disabled = true;
    getJokeBtn.style.opacity = 0.5;

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        jokeElement.innerHTML = `<strong>${data.setup}</strong> <br> ${data.punchline}`;
    }).catch(error => {
        jokeElement.innerHTML = "❌ Oops! Something went wrong. Please try again later.";
        console.error(error);
    }).finally(() => {
        getJokeBtn.disabled = false;
        getJokeBtn.style.opacity = 1;
    });
}

document.getElementById("getAJokeBtn").addEventListener("click", getJoke);