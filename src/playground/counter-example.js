let count = 0;
const addOne = () => {
  count++;
  renderCounterApp(); //technique to re-render for every click
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  //function that wraps in order to re-render
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
