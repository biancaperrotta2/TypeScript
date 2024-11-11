//HOLA MUNDO
console.log("Hola mundo, mi primer programa en TS")

//DATOS PRIMITIVOS
let estudiasteJavaScript: boolean = true

if (estudiasteJavaScript){
    console.log("Podes seguir viendo este curso de TypeScript")
}else{
    console.log("Primero tenes que ver el curso de JavaScript")
}

//NUMBERS
let interMiami: number= 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
    let motivo: string = ""
    if (juegaMessi) {
        equipo1 += messi
        motivo = "porque juega Messi"
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
    if (equipo1 == equipo2) console.log("EMPATE")
    if (equipo1 < equipo2) console.log("Gana FC Dallas")
}

jugar(interMiami,fcDallas, juegaMessi)

//ANY (EVITARLO)
let disney: any

disney = "Star Wars y Marvel"
console.log(disney)

disney = 15000000
console.log(disney)

disney = true
console.log(disney)

//ARRAYS
let arregloNumeros: number[] = [1,2,3,4,5,6]
let arregloTexto: string[] = ["HTML", "CSS", "JS"]

arregloNumeros[0]
arregloTexto[0].indexOf("HTML")

//OBJETOS + TYPE PERSONALIZADO
type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaMate: boolean | null
}

let programador: Programador = {
    nombre: "Bianca Perrotta",
    tecnologias: ["Java","HTML", "CSS","JS"],
    tomaMate: true
}

let programador2 : Programador = {
    nombre: "Carlos",
    tecnologias: ["HTML", "Cobol"],
    tomaMate: null
}

console.log(programador)

//INTERFACES
interface ProgramadorInterfaz{
    nombre: string,
    tecnologias: string[],
    tomaMate: boolean | null
}

let dev: ProgramadorInterfaz = {
    nombre: "Bianca Perrotta",
    tecnologias: ["Java","HTML", "CSS","JS"],
    tomaMate: true
}

let dev2 = {
    nombre: "Carlos",
    tecnologias: ["HTML", "Cobol"],
    tomaMate: null,
    apellido: "Buenardo",
    recibido: false
}

function enviarCurriculum (programadorr: ProgramadorInterfaz){
    console.log(`Este curriculum es de ${programadorr.nombre}`)
}

enviarCurriculum(dev)
enviarCurriculum(dev2)

//CLASES Y POO
class Pelicula{
    nombre?: string;
    protagonistas?: string [];
    actores?: string[]

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} está siendo proyectada`)
    }

    constructor(nombre:string, protagonistas: string[], actores: string[]){
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }
}

const pelicula = new Pelicula("Barbie", ["Barbie", "Ken"],["Margot Robbie", "Ryan Gosling"] )
const pelicula2 = new Pelicula("Oppenheimer", ["Oppenheimer", "Strauss"], ["Cillian Murphy","Robert Downey Jr"])

pelicula.proyectarEnCine()
console.log(pelicula)

pelicula2.proyectarEnCine()
console.log(pelicula2)

//GENÉRICOS Y ENCAPSULAMIENTO
class Sorteo<T>{
    private ticket?: T;

    constructor(
        private nombre: string
    ){}

    setTicket(ticket: T){
        this.ticket = ticket
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<number>("Bianca Perrotta")
sorteo.setTicket(7)
console.log(sorteo.sortear())
