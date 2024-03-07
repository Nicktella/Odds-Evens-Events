document.addEventListener("DOMContentLoaded", function () {
    const state = {
        numberBank: [],
        oddCategory: [],
        evenCategory: [],
    };

    const form = document.querySelector("form");
    const numberInput = form.querySelector('input[name="number"]');
    const numberBankOutput = document.querySelector("#numberBank output");
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
    const sortOneButton = document.getElementById("sortOne");
    const sortAllButton = document.getElementById("sortAll");

    form.addEventListener("submit", addNumber);
    sortOneButton.addEventListener("click", sortOne);
    sortAllButton.addEventListener("click", sortAll);

    function addNumber(event) {
        event.preventDefault();
        const enteredNumber = Number(numberInput.value.trim());

        if (!isNaN(enteredNumber)) {
            state.numberBank.push(enteredNumber);
            render();
        }

        numberInput.value = '';
    }

    function sortOne() {
        const firstNumber = state.numberBank.shift();

        if (firstNumber % 2 === 0) {
            state.evenCategory.push(firstNumber);
        } else {
            state.oddCategory.push(firstNumber);
        }

        render();
    }

    function sortAll() {
        while (state.numberBank.length > 0) {
            const currentNumber = state.numberBank.shift();

            if (currentNumber % 2 === 0) {
                state.evenCategory.push(currentNumber);
            } else {
                state.oddCategory.push(currentNumber);
            }
        }

        render();
    }

    function render() {
        numberBankOutput.textContent = `Number Bank: [${state.numberBank.join(', ')}]`;
        oddsOutput.textContent = `Odds: [${state.oddCategory.join(', ')}]`;
        evensOutput.textContent = `Evens: [${state.evenCategory.join(', ')}]`;
    }
});
