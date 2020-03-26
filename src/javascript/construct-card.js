veiculos.forEach(veiculo => {

    // Container principal - pai
    let card  = document.createElement('div');

    // Container titulo
    let cardTitulo = document.createElement('div');
    let titulo = document.createElement('h1');
    let tituloTexto = document.createTextNode(veiculo.titulo);

    titulo.appendChild(tituloTexto);

    // Container descrição
    let cardDescricao = document.createElement('div');
    let descricao = document.createElement('p');
    let descricaoTexto = document.createTextNode(veiculo.descricao);

    descricao.appendChild(descricaoTexto);

    // Container Imagem

    //Contador Imagem
    let index = 0;

    let cardImg = document.createElement('div');
    let img = document.createElement('img');

    img.setAttribute('src',veiculo.foto[index]);

    img.onclick = ()=>{
        if(index < veiculo.foto.length){
            // Renderizar imagem
            img.setAttribute('src',veiculo.foto[index]);
            //Contador
            index ++; 
        }else{
            index = 0;
        }
    }

    // Container button
    let cardButton = document.createElement('div');
    let button = document.createElement('button');
    let textButton = document.createTextNode('Orçar');

    button.appendChild(textButton);

    //Atribuir elementos para a div pai
    card.appendChild(cardImg);
    card.appendChild(cardTitulo);
    card.appendChild(cardDescricao);
    card.append(cardButton);

    // Atribuir classes css
    card.setAttribute('class','card-carro');
    cardTitulo.setAttribute('class','card-carro-titulo');
    cardDescricao.setAttribute('class','card-carro-descricao');
    cardImg.setAttribute('class','card-carro-img');
    cardButton.setAttribute('class','card-carro-btn');

    // Atribuir elementos em seus pais
    cardImg.appendChild(img);
    cardTitulo.appendChild(titulo);
    cardDescricao.appendChild(descricao);
    cardButton.appendChild(button);

    // Renderizar na tela da aplicação
    document.querySelector("#frota").appendChild(card);
});