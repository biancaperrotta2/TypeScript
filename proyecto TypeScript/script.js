"use strict";
//HOLA MUNDO
console.log("Hola mundo, mi primer programa en TS");
//DATOS PRIMITIVOS
let estudiasteJavaScript = true;
if (estudiasteJavaScript) {
    console.log("Podes seguir viendo este curso de TypeScript");
}
else {
    console.log("Primero tenes que ver el curso de JavaScript");
}
//NUMBERS
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = "porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log("EMPATE");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
//ANY (EVITARLO)
let disney;
disney = "Star Wars y Marvel";
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
//ARRAYS
let arregloNumeros = [1, 2, 3, 4, 5, 6];
let arregloTexto = ["HTML", "CSS", "JS"];
arregloNumeros[0];
arregloTexto[0].indexOf("HTML");
let programador = {
    nombre: "Bianca Perrotta",
    tecnologias: ["Java", "HTML", "CSS", "JS"],
    tomaMate: true
};
let programador2 = {
    nombre: "Carlos",
    tecnologias: ["HTML", "Cobol"],
    tomaMate: null
};
console.log(programador);
let dev = {
    nombre: "Bianca Perrotta",
    tecnologias: ["Java", "HTML", "CSS", "JS"],
    tomaMate: true
};
let dev2 = {
    nombre: "Carlos",
    tecnologias: ["HTML", "Cobol"],
    tomaMate: null,
    apellido: "Buenardo",
    recibido: false
};
function enviarCurriculum(programadorr) {
    console.log(`Este curriculum es de ${programadorr.nombre}`);
}
enviarCurriculum(dev);
enviarCurriculum(dev2);
//CLASES Y POO
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Ryan Gosling"]);
const pelicula2 = new Pelicula("Oppenheimer", ["Oppenheimer", "Strauss"], ["Cillian Murphy", "Robert Downey Jr"]);
pelicula.proyectarEnCine();
console.log(pelicula);
pelicula2.proyectarEnCine();
console.log(pelicula2);
//GENÉRICOS Y ENCAPSULAMIENTO
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo("Bianca Perrotta");
sorteo.setTicket(7);
console.log(sorteo.sortear());
