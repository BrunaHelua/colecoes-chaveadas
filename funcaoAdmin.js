function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            //map.get("Admins");
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Bruna','Admin');
usuarios.set('Matheus','Admin');
usuarios.set('Rita','User');
usuarios.set('Luciano','User');
usuarios.set('Isabelle','Admin');

console.log(getAdmins(usuarios));