// Primeiro exercício

function logradouro() {
    const endereco = {
        rua: "Rua dos Pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };
    console.log(`O usuário moram em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero}.`);
};

logradouro();