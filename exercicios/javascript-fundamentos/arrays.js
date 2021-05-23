// Array é indexado, ou seja, ele possui um indice relacionado aos seus elementos
const valores = [7.7, 8.9, 9.8,4.5]

console.log(valores[1]);

console.log(valores[4]);
console.log(valores[4]=10); //podemos aumentar o tamanho do array dinamicamente
console.log(valores);

console.log(valores.length); // Nos dá o "tamanho" do array falando de quantos elementos ele possui

valores.push({id:3}, false, null, 'oi'); console.log(valores); // push() adiciona elementos ao array

valores.pop();console.log(valores); // retira o último elemento do array 

delete valores[7]; console.log(valores); // deleta um elemento específico


