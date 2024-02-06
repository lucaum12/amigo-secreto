let amigosQueJaForam = [];

function adicionar() {
    let amigoEscolhido = document.getElementById("nome-amigo");
    let amigosIncluidos = document.getElementById("lista-amigos");

    if(amigosQueJaForam.includes(amigoEscolhido.value)) {
        alert("Erro:  Nome já incluido!");
    }
    else if(amigoEscolhido.value == "") {
        alert("Insira um nome válido!");
    }
    else if(amigosIncluidos.textContent == "") {
        amigosIncluidos.textContent = amigoEscolhido.value;
        amigosQueJaForam.push(amigoEscolhido.value);
    }
    else {
        amigosIncluidos.textContent = amigosIncluidos.textContent + ", " + amigoEscolhido.value;
        amigosQueJaForam.push(amigoEscolhido.value);
    }
    document.getElementById("nome-amigo").value = "";
}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    amigosQueJaForam = [];
}

function sortear() {
    embaralharNomes(amigosQueJaForam);
    let sorteio = document.getElementById("lista-sorteio");

    if(amigosQueJaForam.length < 4) {
        alert("Insira 4 ou mais nomes!");
    }
    else {
        for(let i = 0; i < amigosQueJaForam.length; i++) {

            if(i == amigosQueJaForam.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + `<p id="lista-sorteio">${amigosQueJaForam[i]} --> ${amigosQueJaForam[0]}</p>`;
            }
            else {
                sorteio.innerHTML = sorteio.innerHTML + `<p id="lista-sorteio">${amigosQueJaForam[i]} --> ${amigosQueJaForam[i + 1]}</p>`;
            }
        }
    }
}

function embaralharNomes(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}