"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = exports.obtenPacientesAsignadosAPediatria = void 0;
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
