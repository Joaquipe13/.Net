let frase="materias aprobadas 0 habiendo rendido 0 veces";
let veces = 0;
let materias = 0;
function AprobarMateria(){
    materias++;
    veces++;
    frase = `materias aprobadas ${materias} habiendo rendido ${veces} veces`;
}
function ReprobarMateria(){
    veces++;
    frase = `materias aprobadas ${materias} habiendo rendido ${veces} veces`;
}
AprobarMateria()
AprobarMateria()
AprobarMateria()
ReprobarMateria()
ReprobarMateria()
ReprobarMateria()
console.log(frase);