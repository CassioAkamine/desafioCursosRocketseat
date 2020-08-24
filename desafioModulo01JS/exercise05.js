const usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"] //join
    }
];

function varrerArray() {
    // Iterar sobre um array, que contem objetos...

    for (const usuario of usuarios) {
        // console.log(usuario);
        const mensagem = `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(", ")}`;
        console.log(mensagem);
    }
    // For Each
    // usuarios.forEach(usuario => console.log(usuario));

    // for (let posicao = 0; posicao < usuarios.length; posicao++) {
    //     console.log(usuarios[posicao]);
    // }
}

varrerArray();