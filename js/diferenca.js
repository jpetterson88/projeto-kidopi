const listaPaises1 = document.querySelector(".first_select");
const listaPaises2 = document.querySelector(".second_select");
const resultado = document.querySelector(".result");

async function mostrarLista() {
  const response = await fetch("https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1");
  const data = await response.json();
  const newData = Object.values(data);

  newData.map((country) => {
    listaPaises1.insertAdjacentHTML("beforeend", 
    `<option value="${country}">${country}</option>`);
  });
  
  newData.map((country) => {
    listaPaises2.insertAdjacentHTML("beforeend", 
    `<option value="${country}">${country}</option>`);
  });
}

mostrarLista();

function select_country(lista) {
  const selected = lista.value;
  return selected;
}

async function pegarDados(country) {
  const response = await fetch(`https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country}`);
  const data = await response.json();
  const totConfirmados = Object.values(data).reduce((acumulador, objeto) => {
    return acumulador + objeto.Confirmados;
  }, 0);
  const totMortos = Object.values(data).reduce((acumulador, objeto) => {
    return acumulador + objeto.Mortos;
  }, 0);

  const taxaDeMorte = (totMortos / totConfirmados).toFixed(4);
  return taxaDeMorte;
}

let taxaPais1 = null;
let taxaPais2 = null;
let diferenca = null;

listaPaises1.addEventListener('change', async (event) => {
  const country = select_country(event.target);
  taxaPais1 = await pegarDados(country);
  console.log(`taxaPais1 atualizada: ${taxaPais1}`);
});

listaPaises2.addEventListener('change', async (event) => {
  const country = select_country(event.target);
  taxaPais2 = await pegarDados(country);
  console.log(`taxaPais2 atualizada: ${taxaPais2}`);
});

const botaoCalcularDiferenca = document.querySelector('button');
botaoCalcularDiferenca.addEventListener('click', () => {
  if (taxaPais1 !== null && taxaPais2 !== null) {
    diferenca = taxaPais1 - taxaPais2;
    resultado.innerHTML = `Resultado: ${diferenca.toFixed(4)}`;
    console.log(`Diferença entre taxaPais1 e taxaPais2: ${diferenca.toFixed(4)}`);
  } 
});