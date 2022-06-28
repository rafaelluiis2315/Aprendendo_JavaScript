function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {  //se queiser o valor usuer, so trocar 'Admin' por 'Usuer'.
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('luiz', 'Admin');
usuarios.set('sthephany', 'Admin');
usuarios.set('Jorge', 'Usuer');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));