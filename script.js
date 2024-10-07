document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", calculateInterest);
});

function calculateInterest() {
  const rate = parseFloat(
    document.querySelector('input[placeholder="6.25"]').value
  );
  const amount = parseFloat(
    document.querySelector('input[placeholder="5000"]').value
  );
  const years = parseFloat(
    document.querySelector('input[placeholder="Years"]').value
  );

  if (!isNaN(rate) && !isNaN(amount) && !isNaN(years)) {
    const monthlyInterest = (amount * (rate / 100)) / 12;
    const quarterlyInterest = (amount * (rate / 100)) / 4;
    const annualInterest = amount * (rate / 100);
    const totalReturn = annualInterest * years;

    document.querySelectorAll(".results input")[0].value =
      monthlyInterest.toFixed(2);
    document.querySelectorAll(".results input")[1].value =
      quarterlyInterest.toFixed(2);
    document.querySelectorAll(".results input")[2].value =
      annualInterest.toFixed(2);
    document.querySelectorAll(".results input")[3].value =
      totalReturn.toFixed(2);
  }
}
