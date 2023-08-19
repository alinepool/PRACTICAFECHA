function diasTotalesMeses(mes) {
    let diasDelMes;
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            diasDelMes = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            diasDelMes = 30;
            break;
        case 2:
            diasDelMes = 28;
            break;
        default:
            diasDelMes = "Mes inválido";
    }
    return diasDelMes;
}

function calcularDia() {
    const anio = parseInt(document.getElementById("año").value);
    const mes = parseInt(document.getElementById("mes").value);
    const dia = parseInt(document.getElementById("dia").value);

    const anioBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    const diasDelMes = diasTotalesMeses(mes);

    if (anioBisiesto && mes === 2) {
        document.getElementById("dia").max = 29;
    } else {
        document.getElementById("dia").max = diasTotalesMeses;
    }

    const fechaUser = new Date(anio, mes - 1, dia);
    const diaLunesDomingo = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const semana = fechaUser.getDay();
    const nombreDiaSemana = diaLunesDomingo[semana];

    let habilInhabil = "";
    switch (semana) {
        case 0:
        case 6:
            habilInhabil = "Inhábil";
            break;
        default:
            habilInhabil = "Hábil";
    }

    document.getElementById("diaDeLaSemana").textContent = nombreDiaSemana + "  es día " + habilInhabil;
}

function validarLimite(input) {
    const valor = parseFloat(input.value);
    const max = parseFloat(input.max);
    
    if (valor > max) {
        input.value = max;
    }
}
