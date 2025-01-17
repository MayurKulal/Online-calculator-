// Append value to the display
function appendValue(value) {
  document.getElementById("result").value += value;
}

// Clear the display
function clearDisplay() {
  document.getElementById("result").value = "";
}

// Delete the last character
function deleteLast() {
  const display = document.getElementById("result");
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    const display = document.getElementById("result");
    display.value = eval(display.value); // Evaluate the string as JavaScript
  } catch {
    document.getElementById("result").value = "Error";
  }
}
