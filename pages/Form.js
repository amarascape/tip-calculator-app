function Form() {
  const calculateTip = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={calculateTip}>
      {/* || BILL INPUT */}
      <h1 id="BILL-HEADER">Bill</h1>
      {/* || TIP PERCENT INPUT */}
      <h1 id="SELECT-TIP-HEADER">Select Tip %</h1>
      <ul id="TIP-PERCENT-LIST">
        <li>
          <input type="button" value="5%"></input>
        </li>
        <li>
          <input type="button" value="10%"></input>
        </li>
        <li>
          <input type="button" value="15%"></input>
        </li>
        <li>
          <input type="button" value="25%"></input>
        </li>
        <li>
          <input type="button" value="50%"></input>
        </li>
        <li>
          <input type="button" value="Custom"></input>
        </li>
      </ul>
      {/* || NUMBER OF PEOPLE INPUT */}
      <h1 id="NUMBER-OF-PEOPLE-HEADER">Number of People</h1>
      {/* || CALCULATIONS OUTPUT */}
      <h1 id="TIP-AMOUNT-HEADER">Tip Amount</h1>
      <p>/ person</p>
      <h1 id="TOTAL-HEADER">Total</h1>
      <p>/ person</p>
      {/* || RESET BUTTON */}
      <a>Reset</a>
    </form>
  );
}

export default Form;
