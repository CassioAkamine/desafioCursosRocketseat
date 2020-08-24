function experiencia(anos) {
    switch (anos) {
        case 0:
        case 1:
            return 'Iniciante';

        case 2:
        case 3:
            return 'Intermediário';

        case 4:
        case 5:
        case 6:
            return 'Avançado';

        case 7:
        default:
            return 'Jedi Master'

    }
}

const anosEstudo = 7;
const resultado = experiencia(anosEstudo);

console.log(resultado);



function experienciaII(anosII) {
    if ((anosII >= 0) & (anosII <= 1)) {
        return 'Iniciante';
    }
    else if ((anosII > 1) & (anosII <= 3)) {
        return 'Intermediário';
    }
    else if ((anosII > 3) & (anosII < 7)) {
        return 'Avançado';
    }
    else if (anosII >= 7) {
        return 'Jedi Master';
    }
}

const anosEstudoII = 3.1;
const resultadoII = experienciaII(anosEstudoII);

console.log(resultadoII);