function fillSelect(options, selectId) {                         // Declaring function named fillSelect and paste options (array of options we want display) and selectId (the id of element <select>)
  const selectElement = document.querySelector(selectId);        // Picking up selectId and storing in the const selectElement
  options.forEach(option => {                                    // Cycling each element in the array we want 
    const optionElement = document.createElement("option");      // 
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement)
  });
}

const states = [
  "Austria",
  "Belgium",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Italy",
  "Luxemburg",
  "Netherlands",
  "Norway",
  "Portugal",
  "Romania",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom"
];

fillSelect(states, '#inputState');


const carModels = {
  bmw: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", 
  "X5", "X6", "X7", "XM"],

  mini: ["Cooper", "Cooper S", "Countryman", "Clubman", "Paceman", "John Cooper Works",]
};

function populateCarModels(selectedBrand) {
  const modelSelect = document.getElementById('inputModel');
  modelSelect.innerHTML = ''; 

  const models = carModels[selectedBrand];
  models.forEach(model => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
}

function populateCarBrands() {                                     //function which populate the menu based on the value of brands
  const brandSelect = document.getElementById('inputBrand');
  Object.keys(carModels).forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand.toUpperCase();                     
    brandSelect.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  populateCarBrands();
});

document.getElementById('inputBrand').addEventListener('change', function() {
  const selectedBrand = this.value;
  populateCarModels(selectedBrand);
});

//----------------------------------------------------------------------------------

const button = document.querySelector('#submit');
button.addEventListener('click', function(event){
  event.preventDefault;
})



//----> Preparing Datas for the backend <-----

const name = document.querySelector('#firstName');
const surname = document.querySelector('#lastName');
const email = document.querySelector('#inputEmail');
const address = document.querySelector('#inputAddress');
const city = document.querySelector('#inputCity');
const state = document.querySelector('#inputState');
const zip = document.querySelector('#inputZip');
const brand = document.querySelector('#inputBrand');
const model = document.querySelector('#inputModel');

const datas = {
  name: firstName,
  surname: lastName,
  email: email,
  address: address,
  city: city,
  state: state,
  zip: zip,
  brand: brand,
  model: model,
}

