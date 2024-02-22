let listaIncluidos = [];

function adicionar() {
    let listaAmigos = document.getElementById("lista-amigos");
    let amigoEscolhido = document.getElementById("nome-amigo").value;

    if(amigoEscolhido == "") {
        alert("Insira um nome válido!");
    }
    else if(listaIncluidos.includes(amigoEscolhido)) {
        alert("Nome já incluso!");
    }
    else {
        listaAmigos.innerHTML = listaAmigos.innerHTML + `<p id="lista-amigos">${amigoEscolhido}</p>`;
        listaIncluidos.push(amigoEscolhido);
    }
    document.getElementById("nome-amigo").value = "";

    atualizarLista();
    atualizarSorteio();
}


function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-sorteio").textContent = "";
    document.getElementById("lista-amigos").textContent = "";
    listaIncluidos = [];
}

function sortear() {
    embaralharLista(listaIncluidos);
    let sorteio = document.getElementById("lista-sorteio");

    for(let i = 0; i < listaIncluidos.length; i++) {

        if(i == listaIncluidos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + `<p id="lista-sorteio">${listaIncluidos[i]} --> ${listaIncluidos[0]}</p>`
        }
        else {
            sorteio.innerHTML = sorteio.innerHTML + `<p id="lista-sorteio">${listaIncluidos[i]} --> ${listaIncluidos[i + 1]}</p>`;
        }
    }
}

function embaralharLista(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById("lista-sorteio");
    sorteio.textContent = "";
}

function excluirAmigo(index) {
    listaIncluidos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.textContent = "";
    //preciso criar um for para percorrer o array inteiro;]
    for(let i = 0; i < listaIncluidos.length; i++) {
        //conforme o for vai sendo executado até o final do array, quero que vai adicionando um novo paragrafo e os nomes para cada paragrafo;
        let paragrafo = document.createElement("p");
        paragrafo.textContent = listaIncluidos[i];


        //agora eu preciso adicionar os elementos paragrafos criados á listaAmigos, porquê é lá que os paragrafos devem estar no HTML;
        listaAmigos.appendChild(paragrafo);
        

        //preciso adicionar um evento de clique no nome para ser removido;
        paragrafo.addEventListener("click", function() {
            excluirAmigo(i)
        });
    }
}