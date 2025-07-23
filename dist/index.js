"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pacientes_1 = require("./pacientes");
const operaciones_1 = require("./operaciones");
//Pacientes
console.log("Pacientes en Pediatría:");
const soloPediatria = (0, operaciones_1.obtenPacientesAsignadosAPediatria)(pacientes_1.pacientes);
console.log(soloPediatria);
//Pacientes menores de 10 años
console.log("\nPacientes en Pediatría menores de 10 años:");
const menoresDe10 = (0, operaciones_1.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios)(pacientes_1.pacientes);
console.log(menoresDe10);
//Activar protocolo de urgencia
const protocolo = (0, operaciones_1.activarProtocoloUrgencia)(pacientes_1.pacientes);
console.log("\n¿Activar protocolo de urgencia?:", protocolo ? "Sí" : "No");
//Reasignar pacientes
const pacientesReasignados = (0, operaciones_1.reasignaPacientesAMedicoFamilia)(pacientes_1.pacientes);
console.log("\nLista de pacientes tras reasignación:");
for (let i = 0; i < pacientesReasignados.length; i++) {
    console.log(`${pacientesReasignados[i].nombre} -> ${pacientesReasignados[i].especialidad}`);
}
//Hay pacientes en pediatría
const hayPediatria = (0, operaciones_1.HayPacientesDePediatria)(pacientes_1.pacientes);
console.log("\n¿Hay pacientes asignados a Pediatría?:", hayPediatria ? "Sí" : "No");
//No total de pacientes en Médico de familia, pediatría y cardiología
const conteoEspecialidades = (0, operaciones_1.cuentaPacientesPorEspecialidad)(pacientes_1.pacientes);
console.log("\nNúmero de pacientes por especialidad:");
console.log("Médico de familia:", conteoEspecialidades.medicoDeFamilia);
console.log("Pediatría:", conteoEspecialidades.pediatria);
console.log("Cardiología:", conteoEspecialidades.cardiologia);
