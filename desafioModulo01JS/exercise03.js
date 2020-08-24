// Criando função para localizar um vetor
function temHabilidades(skills) {
    // Debugando para saber que tipo de estrutura vou usar.
    // console.log(typeof skills);

    const string = skills.toString().indexOf("Javascript");

    if (string !== -1) {
        return true;
    }
    return false;
}

const skills = ["Javascript", "ReactJS", "React Native"];
const resultado = temHabilidades(skills);

console.log(resultado);