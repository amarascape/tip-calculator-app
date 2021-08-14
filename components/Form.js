import styles from "./Form.module.css";

function Form() {
  let tipPercent = 0;

  /**
   * Responds to the user selecting or setting a tip percent
   * by reading the value and setting the variable
   * tipPercent to that value.
   */
  const setTipPercent = async (event) => {
    event.preventDefault();

    //get the input clicked
    const target = event.target;

    //set the id value as the new tipPercent
    if (target.value === "15%") {
      tipPercent = 0.15;
    } else {
      if (target.value === "Custom") {
        tipPercent = "handle custom";
      } else {
        tipPercent = target.id;
      }
    }
  };

  /**
   * Calculate the tip and total per person and
   * changes the innerText of the display elements
   * as needed.
   */
  function calculateTip() {
    event.preventDefault();

    const billAmount = document.querySelector("#billAmount").value;
    console.log("billAmount:", billAmount);

    const numberOfPeople = document.querySelector("#numberOfPeople").value;
    console.log("numberOfPeople:", numberOfPeople);

    const tipPerPerson = (billAmount * tipPercent) / numberOfPeople;
    const totalPerPerson = billAmount / numberOfPeople;

    const outputTipPerPerson = document.querySelector("#TIP-PER-PERSON");
    console.log("before:", outputTipPerPerson.value);
    outputTipPerPerson.innerText = "$ " + tipPerPerson;
    console.log("after:", outputTipPerPerson.value);

    const outputTotalPerPerson = document.querySelector("#TOTAL-PER-PERSON");
    console.log("before:", outputTotalPerPerson.value);
    outputTotalPerPerson.innerText = "$ " + totalPerPerson;
    console.log("after:", outputTotalPerPerson.value);
  }

  /**
   * Checks each required value to see if they have been
   * filled approproately.
   * If true, calls calculateTip().
   * Otherside, displays warning messages to the user.
   */
  const attemptSubmit = async (event) => {
    event.preventDefault();

    let allRequiredFieldsFilled = true;

    let errorMessage =
      "Please ensure that all of these fields are filled and try again: ";

    //required fields
    if (tipPercent === 0) {
      allRequiredFieldsFilled = false;
      errorMessage = errorMessage + "  tip percent";
    }

    const billAmount = document.querySelector("#billAmount").value;
    if (billAmount === "") {
      allRequiredFieldsFilled = false;
      errorMessage = errorMessage + "  bill amount";
    }

    const numberOfPeople = document.querySelector("#numberOfPeople").value;
    if (numberOfPeople === "") {
      allRequiredFieldsFilled = false;
      errorMessage = errorMessage + "  number of people";
    }

    if (allRequiredFieldsFilled) {
      calculateTip();
    } else {
      // alert(errorMessage);
    }
  };

  return (
    <form className={styles.tipCalculatorForm} onSubmit={attemptSubmit}>
      {/* || BILL INPUT */}
      <h1 className={styles.billHeader}>Bill</h1>
      <input
        type="number"
        id="billAmount"
        name="billAmount"
        min="1"
        max="10000"
        onChange={attemptSubmit}
        required
      />
      {/* || TIP PERCENT INPUT */}
      <h1 className={styles.selectTipHeader}>Select Tip %</h1>
      <ul className={styles.tipPercentList} id="TIP-PERCENT-LIST">
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="5%"
            id="0.05"
            onClick={setTipPercent}
          ></input>
        </li>
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="10%"
            id="0.10"
            onClick={setTipPercent}
          ></input>
        </li>
        <li>
          <input
            id={styles.fifteenPercent}
            className={styles.tipPercentInput}
            type="button"
            value="15%"
            onClick={setTipPercent}
          ></input>
        </li>
        <li>
          <input
            className={styles.tipPercentInput}
            type="button"
            value="25%"
            id="0.25"
            onClick={setTipPercent}
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
            type="text"
            placeholder="Custom"
            onClick={setTipPercent}
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
        max="10000"
        onChange={attemptSubmit}
        required
      />
      {/* || CALCULATIONS OUTPUT */}
      <div className={styles.calculationsParent}>
        <div className={styles.calculationOutput}>
          {/* || CALCULATION: TIP AMOUNT PER PERSON */}
          <div className={styles.calculationOutputLabel}>
            <h1 id="TIP-AMOUNT-HEADER">Tip Amount</h1>
            <p>/ person</p>
          </div>
          <p className={styles.calculationOutputResult} id="TIP-PER-PERSON">
            $ ???.??
          </p>
        </div>
        {/* || CALCULATION: TOTAL PER PERSON */}
        <div className={styles.calculationOutput}>
          <div className={styles.calculationOutputLabel}>
            <h1 id="TOTAL-HEADER">Total</h1>
            <p>/ person</p>
          </div>
          <div className={styles.calculationOutputResult} id="TOTAL-PER-PERSON">
            $ ???.??
          </div>
        </div>
        {/* || CALCULATION: RESET BUTTON */}
        <button type="submit" className={styles.resetButton}>
          Submit
        </button>
        <button type="submit" className={styles.resetButton}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default Form;
