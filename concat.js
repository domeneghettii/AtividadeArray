// Metodo concat 
// Utilizado para mesclar/concatenar dois ou mais arrays

let numero = [1, 2, 3, 4, 5];

let letra = ['a', 'b', 'c', 'd', 'e'];

let numeroLetra = numero.concat(letra);

console.log(numeroLetra);

// [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']


let acessorios = ['pulseira', 'brinco', 'cinto', 'anel', 'colar'];

let jogos = ['valorant', 'fortnite', 'minecraft', 'rocket league', 'fifa'];

let acessoriosJogos = acessorios.concat(jogos);

console.log(acessoriosJogos);

// ['pulseira', 'brinco', 'cinto', 'anel', 'colar', ''valorant', 'fortnite', 'minecraft', 'rocket league', 'fifa'];
