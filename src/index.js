const incrementButtonHandler = () => {
  const results = document.querySelector('#results');
  results.textContent = Number(results.textContent) + 1;
};

const main = () => {
  const incrementButton = document.querySelector('#add-one');
  incrementButton.addEventListener('click', incrementButtonHandler);
};

main();
