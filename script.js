setInterval(function atualizarRelogio() {
    let relogio = document.getElementById('relogio01');
    let data = new Date(); // Obtém a hora exata UTC
    
    // Ajuste para o fuso horário de Nova York (UTC-5 ou UTC-4 no horário de verão)
    let opcoes = { timeZone: "America/New_York", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    let horarioNY = new Intl.DateTimeFormat("en-US", opcoes).formatToParts(data);
    
    let h = horarioNY.find(part => part.type === "hour").value;
    let m = horarioNY.find(part => part.type === "minute").value;
    let s = horarioNY.find(part => part.type === "second").value;
    
    relogio.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Função para exibir a data atualizada corretamente
function exibirDataAtualizada() {
    let meses = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    
    let semanas = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    
    let data = new Date();
    let opcoes = { timeZone: "America/New_York", weekday: "long", day: "2-digit", month: "long", year: "numeric" };
    let dataNY = new Intl.DateTimeFormat("en-US", opcoes).formatToParts(data);
    
    let diasem = dataNY.find(part => part.type === "weekday").value;
    let dia = dataNY.find(part => part.type === "day").value;
    let mes = dataNY.find(part => part.type === "month").value;
    let ano = dataNY.find(part => part.type === "year").value;
    
    document.getElementById("date").innerHTML = `${diasem}, ${dia} ${mes}, ${ano}`;
}

// Atualiza a data à meia-noite de Nova York
function atualizarData() {
    let data = new Date();
    let opcoes = { timeZone: "America/New_York", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    let horarioNY = new Intl.DateTimeFormat("en-US", opcoes).formatToParts(data);
    
    let horas = parseInt(horarioNY.find(part => part.type === "hour").value);
    let minutos = parseInt(horarioNY.find(part => part.type === "minute").value);
    let segundos = parseInt(horarioNY.find(part => part.type === "second").value);
    
    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000); // Verifica a cada segundo
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
