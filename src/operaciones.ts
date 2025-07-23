import { Pacientes } from "./pacientes";

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      resultado.push(pacientes[i]);
    }
  }

  return resultado;
};

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].especialidad === "Pediatra" &&
      pacientes[i].edad < 10
    ) {
      resultado.push(pacientes[i]);
    }
  }

  return resultado;
};

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
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

export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    const pacienteOriginal = pacientes[i];

    if (pacienteOriginal.especialidad === "Pediatra") {
      // Creamos una copia modificada
      const nuevoPaciente = {
        ...pacienteOriginal,
        especialidad: "Medico de familia" as const,
      };
      resultado.push(nuevoPaciente);
    } else {
      resultado.push(pacienteOriginal);
    }
  }

  return resultado;
};

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true; // Encontramos al menos uno
    }
  }
  return false; // Ninguno asignado a Pediatría
};

//Apartado 5: Opcional
export interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i = 0; i < pacientes.length; i++) {
    const especialidad = pacientes[i].especialidad;

    if (especialidad === "Medico de familia") {
      resultado.medicoDeFamilia++;
    } else if (especialidad === "Pediatra") {
      resultado.pediatria++;
    } else if (especialidad === "Cardiólogo") {
      resultado.cardiologia++;
    }
  }

  return resultado;
};
