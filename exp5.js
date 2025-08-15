const rates = {
    "USD": 1,
    "EUR": 0.92,
    "GBP": 0.78,
    "INR": 83.34
};

function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "";
        return;
    }

    let converted = (amount / rates[from]) * rates[to];
    document.getElementById("result").innerHTML = `Converted Amount: ${converted.toFixed(2)} ${to}`;
}
