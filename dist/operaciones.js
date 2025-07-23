"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentaPacientesPorEspecialidad = exports.HayPacientesDePediatria = exports.reasignaPacientesAMedicoFamilia = exports.activarProtocoloUrgencia = exports.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = exports.obtenPacientesAsignadosAPediatria = void 0;
const obtenPacientesAsignadosAPediatria = (pacientes) => {
    const resultado = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            resultado.push(pacientes[i]);
        }
    }
    return resultado;
};
exports.obtenPacientesAsignadosAPediatria = obtenPacientesAsignadosAPediatria;
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes) => {
    const resultado = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" &&
            pacientes[i].edad < 10) {
            resultado.push(pacientes[i]);
        }
    }
    return resultado;
};
exports.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios;
const activarProtocoloUrgencia = (pacientes) => {
    let activarProtocolo = false;
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
            activarProtocolo = true;
            break;
        }
    }
    return activarProtocolo;
};
exports.activarProtocoloUrgencia = activarProtocoloUrgencia;
const reasignaPacientesAMedicoFamilia = (pacientes) => {
    const resultado = [];
    for (let i = 0; i < pacientes.length; i++) {
        const pacienteOriginal = pacientes[i];
        if (pacienteOriginal.especialidad === "Pediatra") {
            // Creamos una copia modificada
            const nuevoPaciente = {
                ...pacienteOriginal,
                especialidad: "Medico de familia",
            };
            resultado.push(nuevoPaciente);
        }
        else {
            resultado.push(pacienteOriginal);
        }
    }
    return resultado;
};
exports.reasignaPacientesAMedicoFamilia = reasignaPacientesAMedicoFamilia;
const HayPacientesDePediatria = (pacientes) => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            return true; // Encontramos al menos uno
        }
    }
    return false; // Ninguno asignado a Pediatría
};
exports.HayPacientesDePediatria = HayPacientesDePediatria;
const cuentaPacientesPorEspecialidad = (pacientes) => {
    const resultado = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    };
    for (let i = 0; i < pacientes.length; i++) {
        const especialidad = pacientes[i].especialidad;
        if (especialidad === "Medico de familia") {
            resultado.medicoDeFamilia++;
        }
        else if (especialidad === "Pediatra") {
            resultado.pediatria++;
        }
        else if (especialidad === "Cardiólogo") {
            resultado.cardiologia++;
        }
    }
    return resultado;
};
exports.cuentaPacientesPorEspecialidad = cuentaPacientesPorEspecialidad;
