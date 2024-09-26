// Funzione per il countdown
function startCountdown(eventDate) {
    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "L'evento è iniziato!";
        }
    }, 1000);
}

// Imposta la data dell'evento (esempio: 5 giorni nel futuro)
const eventDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000); // 5 giorni da oggi
startCountdown(eventDate);

// Funzione per cambiare tema giorno/notte
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});


