let estudiante = {
  nombre: "Peio",
  edad: "34",
  mascota: {
    tipo: "Perro",
    nombre: "Kyra",
  },
  asignaturas: [
    { nombre: "Historia", notas: [7, 8, 5] },
    { nombre: "Matemáticas", notas: [4, 9, 7] },
    { nombre: "Filosofía", notas: [3, 1, 4] },
  ],
};

let nombreMascota = estudiante.mascota.nombre;

let nombrePrimeraAsignatura = estudiante.asignaturas[0].nombre;

console.log(nombreMascota);
console.log(nombrePrimeraAsignatura);
