/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {: This line sets up an event listener for the "DOMContentLoaded" event. 

The function inside the listener will be executed once the HTML document is fully loaded and parsed.

const state = { numberBank: [], oddCategory: [], evenCategory: [] };: This declares an object named state that will store the current state of your application.

It has three properties: numberBank, oddCategory, and evenCategory, each initialized as an empty array. 

This object is used to keep track of the numbers entered by the user and the categorized numbers.
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", function () {
    const state = {
        numberBank: [],
        oddCategory: [],
        evenCategory: [],
    };
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const form = document.querySelector("form"); //targeting 'form'
    const numberInput = form.querySelector('input[name="number"]'); //targeting the form's input defined with [name="number"]
    const numberBankOutput = document.querySelector("#numberBank output"); //target the number bank's output
    const oddsOutput = document.querySelector("#odds output"); //target the odds ID
    const evensOutput = document.querySelector("#evens output"); //target the evens ID
    const sortOneButton = document.getElementById("sortOne"); //Establishing a one button and getting the ID of "sortOne"
    const sortAllButton = document.getElementById("sortAll");  ////Establishing a one button and getting the ID of "sortAll"

    form.addEventListener("submit", addNumber); //On your form, we are listening for an arguement of "submit" and "addNumber"
    sortOneButton.addEventListener("click", sortOne); // Acessing our "sortOneButton" function and listening for our on "click", and putting in the arguement the ID "sortOne"
    sortAllButton.addEventListener("click", sortAll); // Acessing our "sortAllButton" function and listening for our on "click", and putting in the arguement the ID "sortOne"

   
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
If the entered value is a valid number or can be converted to a number, the condition evaluates to true, and the code block inside the curly braces is executed.

If the entered value is not a valid number, (!isNaN) the condition evaluates to false, and the code block is skipped.

state.numberBank.push(enteredNumber): If the condition is true, meaning the entered value is a valid number, this line adds the entered number to the numberBank array in the state object.

The push() method is used to add elements to the end of an array.

render(): After adding the number to the numberBank, the render function is called to update the displayed content on the webpage, reflecting the changes in the state.

numberInput.value = '': This line sets the value of the numberInput element to an empty string, effectively clearing the input field after a number is added.

This provides a better user experience and allows users to input a new number without manually clearing the input field.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
   
function addNumber(event) {
        event.preventDefault();
        const enteredNumber = Number(numberInput.value.trim());

        if (!isNaN(enteredNumber)) {
            state.numberBank.push(enteredNumber);
            render();
        }

        numberInput.value = '';
    }

    /* 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const firstNumber = state.numberBank.shift();: This line removes and returns the first element from the numberBank array in the state object. 

The shift() method modifies the original array by removing the first element and returns that removed element.

if (firstNumber % 2 === 0) { state.evenCategory.push(firstNumber); } else { state.oddCategory.push(firstNumber); }: 
This conditional statement checks whether the firstNumber is even or odd.

If firstNumber % 2 === 0 (i.e., the remainder when divided by 2 is 0), it means the number is even. 

In this case, the firstNumber is added to the evenCategory array in the state object using state.evenCategory.push(firstNumber);.

If firstNumber % 2 !== 0, it means the number is odd. In this case, the firstNumber is added to the oddCategory array in the state object using state.oddCategory.push(firstNumber);.

render();: After sorting the number into either the evenCategory or oddCategory, the render function is called to update the displayed content on the webpage, reflecting the changes in the state.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/ 
    function sortOne() {
        const firstNumber = state.numberBank.shift();

        if (firstNumber % 2 === 0) {
            state.evenCategory.push(firstNumber);
        } else {
            state.oddCategory.push(firstNumber);
        }

        render();
    }

    /*
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
while (state.numberBank.length > 0): This is a while loop that continues as long as there are elements in the numberBank.
 It repeatedly executes the code block inside the loop until the condition (state.numberBank.length > 0) is no longer true.

const currentNumber = state.numberBank.shift();: Inside the loop, it takes the first number from the numberBank using the shift() method. 

This removes the first element from the array and returns it.

if (currentNumber % 2 === 0): It checks if the current number is even by using the modulo operator %. 
If the remainder when dividing currentNumber by 2 is 0, then the number is even.

If the number is even, it gets pushed into the state.evenCategory array.

If the number is odd, it gets pushed into the state.oddCategory array.

render();: After all numbers are sorted into the appropriate categories, the render function is called to update the displayed content on the webpage, reflecting the changes in the state.

In summary, the "sortAll" function empties the numberBank by moving all its elements to either the evenCategory or the oddCategory based on their parity (even or odd), and then it updates the display.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
     
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
    /*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    numberBankOutput.textContent: This line updates the content of the HTML element with the ID numberBank (presumably an output element) to display the current contents of the numberBank array. The content is formatted as a string using template literals, and the join(', ') method is used to concatenate the elements of the array with a comma and a space.

    oddsOutput.textContent: This line updates the content of the HTML element with the ID odds (presumably an output element) to display the current contents of the oddCategory array. 
    Similar to the previous line, it formats the content as a string using template literals and join(', ').

    evensOutput.textContent: This line updates the content of the HTML element with the ID evens (presumably an output element) to display the current contents of the evenCategory array. 
    Again, it formats the content as a string using template literals and join(', ').

    In summary, the render function ensures that the displayed content reflects the current state of the numberBank, oddCategory, and evenCategory arrays.
    It updates the HTML elements with the appropriate IDs to show the numbers in a formatted manner.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    */
    
    function render() {
        numberBankOutput.textContent = `Number Bank: [${state.numberBank.join(', ')}]`;
        oddsOutput.textContent = `Odds: [${state.oddCategory.join(', ')}]`;
        evensOutput.textContent = `Evens: [${state.evenCategory.join(', ')}]`;
    }
});
