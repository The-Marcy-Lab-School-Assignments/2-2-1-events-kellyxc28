/** FEEDBACK: Hey! This code should be passing but it is not so I'm going to mark this as complete! */
const incrementButtonHandler = () => {
  let counter = document.querySelector("#results").textContent
  counter++ 
  document.querySelector("#results").textContent = counter
};

const main = () => {
  const incrementButton = document.querySelector('#add-one');
  incrementButton.addEventListener('click', incrementButtonHandler);
};

main();
