const options = ['Walcz !', 'Bierz nogi za pas i uciekaj ile sił !'];
const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const btnOption = document.querySelector('.showOptions');
const btnAdvice = document.querySelector('.showAdvice');
const result = document.querySelector('h1');

const addOption = (e) => {
  e.preventDefault();
  for (x of options) {
    if (x === input.value) {
      alert('Taka możliwość już istnieje ! Wpisz inną możliwość.');
      input.value = '';
      return;
    }

  }
  options.push(input.value);
  console.log(input.value);
  input.value = '';
};

const showOptions = () => {
  if (options.length) {
    alert('Możliwe opcje:\n' + options.join('\n'));
  } else {
    alert('Nie wprowadzono żadnej możliwości !');
  }

};

const showAdvice = (e) => {
  e.preventDefault();
  if (options.length) {
    let i = Math.floor(Math.random() * options.length);
    result.innerText = options[i];
  } else alert('Niestety nie mam żadnej rady dla Ciebie !');

};

const resetOptions = e => {
  e.preventDefault();
  options.length = 0;
  result.innerText = '';
  console.log('Tabela możliwości została wyczyszczona');
}

btnReset.addEventListener('click', resetOptions);
btnAdd.addEventListener('click', addOption);
btnOption.addEventListener('click', showOptions);
btnAdvice.addEventListener('click', showAdvice);
