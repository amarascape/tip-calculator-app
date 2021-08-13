import styles from "./Form.module.css";

function Form() {
  const calculateTip = async (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.tipCalculatorForm} onSubmit={calculateTip}>
      {/* || BILL INPUT */}
      <h1 classNames={styles.billHeader}>Bill</h1>
      <input
        type="number"
        id="billAmount"
        name="billAmount"
        min="1"
        max="1000000"
      />
      {/* || TIP PERCENT INPUT */}
      <h1 className={styles.selectTipHeader}>Select Tip %</h1>
      <ul className={styles.tipPercentList}>
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="5%"
          ></input>
        </li>
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="10%"
          ></input>
        </li>
        <li>
          <input
            id={styles.fifteenPercent}
            className={styles.tipPercentInput}
            type="button"
            value="15%"
          ></input>
        </li>
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="25%"
          ></input>
        </li>
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="50%"
          ></input>
        </li>
        <li>
          <input
            id={styles.customPercent}
            className={styles.tipPercentInput}
            type="button"
            value="Custom"
          ></input>
        </li>
      </ul>
      {/* || NUMBER OF PEOPLE INPUT */}
      <h1 className={styles.numberOfPeopleHeader}>Number of People</h1>
      <input
        type="number"
        id="numberOfPeople"
        name="numberOfPeople"
        min="1"
        max="1000000"
      />
      {/* || CALCULATIONS OUTPUT */}
      <div className={styles.calculationsOutput}>
        <div className={styles.calculationOutput}>
          <div>
            <h1 id="TIP-AMOUNT-HEADER">Tip Amount</h1>
            <p>/ person</p>
          </div>
          <div>$ ???.??</div>
        </div>
        <div className={styles.calculationOutput}>
          <div>
            <h1 id="TOTAL-HEADER">Total</h1>
            <p>/ person</p>
          </div>
          <div>$ ???.??</div>
        </div>
      </div>

      {/* || RESET BUTTON */}
      <a>Reset</a>
    </form>
  );
}

export default Form;