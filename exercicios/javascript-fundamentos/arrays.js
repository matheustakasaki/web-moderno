{
    // Array é indexado, ou seja, ele possui um indice relacionado aos seus elementos
    const valores = [7.7, 8.9, 9.8, 4.5]

    /*
        Os arrays são heterogêneos. Ele pode ter diversos elementos onde cada um tem seu próprio tipo
    */

    console.log(valores[1]);
    console.log('Valor do elemento no índice 4: ' + valores[4]);

    console.log('Adicionando dinamicamente um novo elemento de índice 4 com o valor 10:', valores[4] = 5); //podemos aumentar o tamanho do array dinamicamente
    console.log(valores);

    console.log(valores.length);
    // length()
    // Nos dá o "tamanho" do array falando de quantos elementos ele possui

    valores.push( { id: 3, name: 'teste'} , false, null, "opa" );
    console.log(valores);
    // push()
    // adiciona elementos ao array

    valores.pop(); 
    console.log('Removendo último elemento com Pop', valores); 
    //  pop();
    // retira o último elemento do array 

    delete valores[7]; console.log(valores);
    // Deleta um elemento específico do array

    console.log(typeof valores);
}