        class Calculator {
            add(a, b) {
                return a + b;
            }

            static multiply(a, b) {
                return a * b;
            }
        }

        const calc = new Calculator();
        const box = document.getElementById('centered-box');
        box.innerHTML += `<p>Sum: ${calc.add(5, 10)}</p>`;
        box.innerHTML += `<p>Product: ${Calculator.multiply(2, 8)}</p>`;
