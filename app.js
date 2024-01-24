const form = document.querySelector(".container");
const inputs = document.querySelectorAll('.tip-type');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people').value || 1;
const people1 = document.querySelector("#people");
const total1 = document.querySelector("#total");
const amount = document.querySelector("#tip-amount");

let tipSelected = 0;

// total1.innerHTML = "$0.00";
// amount.innerHTML = "$0.00";

const tipAmount = () =>{
  const tip = bill.value * (tipSelected / 100)/ people;
  amount.innerHTML = "$" + Number(tip).toFixed(2);
}

const total = () => {
  const wr = bill.value * (tipSelected / 100)/ people1.value;
  const amount1 = ((Number((wr)*people1.value) + Number(bill.value)))/people1.value;
  console.log(bill.value)
  console.log(people1.value)
  console.log(wr);
  total1.innerHTML = "$" + Number(amount1).toFixed(2);
}

inputs.forEach(element => {
  element.addEventListener('click', () => {
    tipSelected = element.value.slice(0, -1);
    tipAmount();
  })
})


// people.addEventListener('change', () => {
//   tipAmount();
// })

bill.addEventListener('change', () => {
  tipAmount();
  total();
})

people1.addEventListener('change', () => {
  tipAmount();
  total();
})
