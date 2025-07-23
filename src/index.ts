import { pacientes } from "./pacientes";
import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  HayPacientesDePediatria,
  cuentaPacientesPorEspecialidad
} from "./operaciones";

//Pacientes
console.log("Pacientes en Pediatría:");
const soloPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(soloPediatria);

//Pacientes menores de 10 años
console.log("\nPacientes en Pediatría menores de 10 años:");
const menoresDe10 = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(menoresDe10);

//Activar protocolo de urgencia
const protocolo = activarProtocoloUrgencia(pacientes);
console.log("\n¿Activar protocolo de urgencia?:", protocolo ? "Sí" : "No");

//Reasignar pacientes
const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log("\nLista de pacientes tras reasignación:");
for (let i = 0; i < pacientesReasignados.length; i++) {
  console.log(
    `${pacientesReasignados[i].nombre} -> ${pacientesReasignados[i].especialidad}`
  );
}

//Hay pacientes en pediatría
const hayPediatria = HayPacientesDePediatria(pacientes);
console.log("\n¿Hay pacientes asignados a Pediatría?:", hayPediatria ? "Sí" : "No");

//No total de pacientes en Médico de familia, pediatría y cardiología
const conteoEspecialidades = cuentaPacientesPorEspecialidad(pacientes);
console.log("\nNúmero de pacientes por especialidad:");
console.log("Médico de familia:", conteoEspecialidades.medicoDeFamilia);
console.log("Pediatría:", conteoEspecialidades.pediatria);
console.log("Cardiología:", conteoEspecialidades.cardiologia);

