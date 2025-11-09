function calc(operation) {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(a) || isNaN(b)) {
        result = "Entrer deux nombres !";
    } else {
        switch (operation) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/':
                result = b === 0 ? "Erreur !" : a / b;
                break;
        }
    }

    document.getElementById("resultat").textContent = result;
}
