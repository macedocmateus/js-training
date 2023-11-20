// Estrutura de dados

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

let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeights = []

for(let patient of patients) {
  patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsWeights.push(patient.weight)
  patientsHeights.push(patient.height)
}

alert(`Nomes dos pacientes: ${patientsNames}, idade dos pacientes: ${patientsAges},
peso dos pacientes: ${patientsWeights}, altura dos pacientes: ${patientsHeights}`)