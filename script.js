async function getJoke() { 
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf4edea95emshc392b5386f26af0p1c4ff8jsn143010c0eabb', 
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.success && data.body.length > 0) {
            const joke = data.body[0];
            document.getElementById('setup').innerText = joke.setup;
            document.getElementById('punchline').innerText = joke.punchline;
        } else {
            document.getElementById('setup').innerText = 'Failed to load joke.';
            document.getElementById('punchline').innerText = '';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('setup').innerText = 'Error fetching joke.';
        document.getElementById('punchline').innerText = '';
    }
}


getJoke();

