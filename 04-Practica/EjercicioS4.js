function AgregarSiNoEsta(array, valor){
    if(array.indexOf(valor) === -1){
        array.push(valor);
    }
    return array;
}
let array = [1, 2, 3, 4, 5];
console.log(AgregarSiNoEsta(array, 6));