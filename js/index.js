const data = document.querySelector(".data");
const country = document.querySelector("#country");
const current_country = document.querySelector(".current_country");
const button = document.querySelector(".btn_buscar");

function selectCountry() {
  const selectedCountry = country.value;
  return selectedCountry;
}

country.addEventListener("change", selectCountry);

button.addEventListener("click", () => {
  dateAndCountry(selectCountry());
});

function dateAndCountry(selectedCountry) {
  const date = new Date();
  const current_date = date.toLocaleString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  data.innerHTML = `<strong>Data:</strong> ${current_date}`;
  localStorage.setItem('current_date', current_date);
  current_country.innerHTML = `<strong>País:</strong> ${selectedCountry}`;
  localStorage.setItem('current_country', selectedCountry);
}

function loadDateAndCountry() {
  const current_date = localStorage.getItem('current_date');
  const country_selected = localStorage.getItem('current_country');
  
  if (current_date) {
    data.innerHTML = `<strong>Data:</strong> ${current_date}`;
    current_country.innerHTML = `<strong>País:</strong> ${country_selected}`;
  }
}

loadDateAndCountry();

const consulta = document.querySelector(".btn_consulta");
const diferenca = document.querySelector(".btn_diferenca");
const first_form = document.querySelector(".first_form");
const second_form = document.querySelector(".second_form");

consulta.addEventListener("click", () => {
  first_form.style.display = "block";
  second_form.style.display = "none";
});

diferenca.addEventListener("click", () => {
  first_form.style.display = "none";
  second_form.style.display = "block";
});