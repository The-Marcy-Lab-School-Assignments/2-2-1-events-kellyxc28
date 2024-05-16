const incrementButtonHandler = () => {
  const incrementedResult = document.querySelector('#results');
  incrementedResult.textContent = Number(incrementedResult.textContent) + 1;
};

const main = () => {
  const incrementButton = document.querySelector('#add-one');
  incrementButton.addEventListener('click', incrementButtonHandler);
};

main();
