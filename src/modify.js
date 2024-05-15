// These are your event handlers
const clickCounterHandler = () => {
  const clickButton = document.querySelector('#click-button');
  clickButton.dataset.clicks = Number(clickButton.dataset.clicks) + 1;
  if (clickButton.dataset.clicks < 2) {
    clickButton.textContent = `I've been clicked ${clickButton.dataset.clicks} time.`;
  } else {
    clickButton.textContent = `I've been clicked ${clickButton.dataset.clicks} times!`;
  }
  console.log(clickButton.dataset.clicks);
};

const handleKeydown = () => {};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {};

// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  const incrementingButton = document.querySelector('#click-button');
  incrementingButton.addEventListener('click', clickCounterHandler);
};

main();
