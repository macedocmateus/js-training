/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "mateus",
    age: 31,
    weight: 99,
    height: 164,
  },

  {
    name: "fael",
    age: 37,
    weight: 110,
    height: 175,
  },

  {
    name: "jailson",
    age: 45,
    weight: 80,
    height: 170,
  },
]




function printPatientIMC(patient) {
  
  return`
    Paciente ${patient.name} possui o IMC de 
    ${(patient.weight / ((patient.height / 100) **2)).toFixed(2)}
  `
}

for (let patient of patients) {
  let IMCmessagem = printPatientIMC(patient)
  alert(IMCmessagem)
}


