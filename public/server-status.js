// Definisci gli indirizzi dei server e le loro porte
const servers = {
    dayz: { ip: '85.190.161.41', port: '36000' },    // IP e porta di un server DayZ
    // rust: { ip: '123.45.67.90', port: '28015' },    // IP e porta di un server Rust
    // minecraft: { ip: '123.45.67.91', port: '25565' } // IP e porta di un server Minecraft
};

// Funzione per controllare lo stato dei server
async function checkServerStatus() {
    // Controlla il server DayZ
    const dayzStatus = document.getElementById('dayz-status');
    const dayzPlayers = document.getElementById('dayz-players');
    const dayzServer = servers.dayz;

    // Usa una funzione di fetch per controllare lo stato del server
    const dayzResponse = await checkServer(dayzServer.ip, dayzServer.port);
    if (dayzResponse.online) {
        dayzStatus.textContent = 'Online';
        dayzStatus.className = 'status online';
        dayzPlayers.textContent = dayzResponse.players;  // numero di giocatori
    } else {
        dayzStatus.textContent = 'Offline';
        dayzStatus.className = 'status offline';
        dayzPlayers.textContent = '-';
    }

    // // Controlla il server Rust
    // const rustStatus = document.getElementById('rust-status');
    // const rustPlayers = document.getElementById('rust-players');
    // const rustServer = servers.rust;

    // const rustResponse = await checkServer(rustServer.ip, rustServer.port);
    // if (rustResponse.online) {
    //     rustStatus.textContent = 'Online';
    //     rustStatus.className = 'status online';
    //     rustPlayers.textContent = rustResponse.players;
    // } else {
    //     rustStatus.textContent = 'Offline';
    //     rustStatus.className = 'status offline';
    //     rustPlayers.textContent = '-';
    // }

    // // Controlla il server Minecraft
    // const minecraftStatus = document.getElementById('minecraft-status');
    // const minecraftPlayers = document.getElementById('minecraft-players');
    // const minecraftServer = servers.minecraft;

    // const minecraftResponse = await checkServer(minecraftServer.ip, minecraftServer.port);
    // if (minecraftResponse.online) {
    //     minecraftStatus.textContent = 'Online';
    //     minecraftStatus.className = 'status online';
    //     minecraftPlayers.textContent = minecraftResponse.players;
    // } else {
    //     minecraftStatus.textContent = 'Offline';
    //     minecraftStatus.className = 'status offline';
    //     minecraftPlayers.textContent = '-';
    // }
}

// Simulazione della funzione di controllo del server
async function checkServer(ip, port) {
    // Simula una chiamata API o fai una richiesta HTTP per ottenere lo stato del server
    // Ad esempio, usa fetch o XMLHttpRequest se il server fornisce un'API
    console.log(`Controllo server a ${ip}:${port}`);

    // Questa funzione simula la risposta di un server (personalizzabile)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                online: Math.random() > 0.2, // 80% di probabilità che sia online
                players: Math.floor(Math.random() * 100) // numero casuale di giocatori
            });
        }, 1000);
    });
}

// Aggiorna lo stato dei server ogni 10 secondi
setInterval(checkServerStatus, 10000);

// Controlla lo stato dei server al caricamento della pagina
checkServerStatus();
