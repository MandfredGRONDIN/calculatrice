class Calculatrice {
    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        if (b === 0) {
            throw new Error("Division par zero non autorisé.");
        }
        return a / b;
    }
}

module.exports = Calculatrice;