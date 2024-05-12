let array = ['Silla', 'lápiz', 'elefante', 'mariposa', 'montaña', 'avión', 'guitarra', 'libro', 'reloj', 'taza', 'ventana', 'sol', 'nube', 'perro', 'gato', 'árbol', 'río', 'computadora', 'pizza', 'bicicleta', 'teléfono', 'bufanda', 'estrella', 'casa', 'jirafa', 'oso', 'plátano', 'helado', 'trueno', 'arcoíris', 'flor', 'abeja', 'zapato', 'cama', 'isla', 'pirata', 'astronauta', 'araña', 'maleta', 'martillo', 'camión', 'dinosaurio', 'globo', 'paraguas', 'dragón', 'televisión', 'payaso', 'médico', 'vaso', 'pelota', 'coche', 'vela', 'sandía', 'gafas', 'cohete', 'globo terráqueo', 'astronauta', 'espejo', 'arco', 'tigre', 'abuelo', 'elefante', 'bicicleta', 'árbol', 'manzana', 'ballena', 'unicornio', 'palmera', 'piano', 'sombrero', 'trébol', 'arcoíris', 'barco', 'águila', 'mariposa', 'bufanda', 'guitarra', 'león', 'elefante', 'camión', 'avión', 'reloj', 'nube', 'gato', 'perro', 'lápiz', 'silla', 'ventana', 'taza', 'montaña', 'sol', 'luna', 'estrella', 'libro', 'isla', 'helado', 'pizza', 'cama', 'teléfono', 'computadora', 'globo', 'trueno', 'araña', 'abeja', 'arco', 'dragón', 'dinosaurio', 'médico', 'payaso', 'pirata', 'astronauta', 'vela', 'zapato', 'maleta', 'casa', 'bufanda', 'elefante', 'gato', 'perro', 'jirafa', 'cebra', 'león'];

function Buscar(array,palabra){
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == palabra){
            cont++;
        }
    }
    return cont;
}
console.log(Buscar(array,'elefante'));
