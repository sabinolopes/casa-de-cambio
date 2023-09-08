import Swal from 'sweetalert2';
import './style.css';
import '../dist/output.css';

const board = document.querySelector('#list');
const refValueText = document.querySelector('#ref-value');
const formButton = document.querySelector('#currency-form');
const input = document.querySelector('input');
const liClass = [
  'rounded-md',
  'bg-li-cl',
  'w-36',
  'h-11',
  'flex',
  'justify-around',
  'p-5',
];

const getCurrencyUrl = (currency) => {
  if (!currency) {
    Swal.fire({
      title: 'Error',
      text: 'Você precisa passar uma moeda',
      icon: 'error',
      confirmButtonText: 'Tente Novamente',
    });
  }

  const url = `https://api.exchangerate.host/latest?base=${currency}`;

  return url;
};

const createElements = (currency, rates) => {
  if (!currency) return;

  refValueText.innerText = `Valores referentes a 1 ${currency.toUpperCase()}`;
  const currencies = Object.entries(rates);

  currencies.forEach((curr) => {
    const [key, value] = curr;
    const img = '<img class="h-3.5 w-3.5 mr-2" src="src/images/coins.svg">';
    const imgKey = `<span class="flex">${img}${key}</span>`;
    const li = document.createElement('li');
    li.classList.add(...liClass);

    li.innerHTML = `${imgKey} <span class="text-span-cl">${value.toFixed(2)}</span>`;
    board.appendChild(li);
  });
};

async function getCurrencyRef(url, currency) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { rates } = data;
    console.log(rates);
    createElements(currency, rates);
  } catch {
    Swal.fire({
      title: 'Error',
      text: 'Moeda inexistente!',
      icon: 'error',
      confirmButtonText: 'Tente Novamente',
    });
  }
}

formButton.addEventListener('submit', (event) => {
  event.preventDefault();
  const currency = input.value;
  const url = getCurrencyUrl(currency);
  getCurrencyRef(url, currency);
});
