function SepararTipo(array,tipo){
    let arrayTipo = [];
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] == tipo){
            arrayTipo.push(array[i]);
        }
    }
    return arrayTipo;
}
let array = [1, true, 'story', 2, false, 'story', 3, true, 'story'];
console.log(SepararTipo(array,'boolean'));