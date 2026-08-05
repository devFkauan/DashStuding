function addTimer () {
    const relogio = document.querySelector('.relogio')
    function dateLocalTimerFromSeconds (seconds) {
        let data = new Date( seconds * 1000)

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    let seconds = 0;
    let timer;

    function startTimer () {
        timer = setInterval(() => {
            seconds++
            relogio.innerHTML = dateLocalTimerFromSeconds(seconds);
        }, 1000)
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        
        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            startTimer();
        }
        
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
    })
}

addTimer()