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

const handleKeydown = (e) => {
  console.log(e);
  const keydownTracker = document.querySelector('#keydown-tracker');
  if (e.code === 'KeyA') keydownTracker.textContent = 'You pressed KeyA';
  if (e.code === 'Space') keydownTracker.textContent = 'You pressed Space';
  if (e.code === 'Enter') keydownTracker.textContent = 'You pressed Enter';
};

const inlineHandler = () => {
  const inlineButton = document.querySelector('#inline-example');
  inlineButton.dataset.clicks = Number(inlineButton.dataset.clicks) + 1;
  if (inlineButton.dataset.clicks < 2) {
    inlineButton.textContent = `I've been clicked ${inlineButton.dataset.clicks} time.`;
  } else {
    inlineButton.textContent = `I've been clicked ${inlineButton.dataset.clicks} times!`;
  }
  console.log(inlineButton.dataset.clicks);
};

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

  const p = document.querySelector('body');
  p.addEventListener('keydown', handleKeydown);

  const inlineButton = document.querySelector('#inline-example');
  inlineButton.addEventListener('click', inlineHandler);
};

main();
