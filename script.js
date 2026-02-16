// ===== Temperature Converter =====
const celsiusInput =
  document.getElementById("celsius");
const fahrenheitInput =
  document.getElementById("fahrenheit");
const convertTempBtn = document.getElementById(
  "convert-temp"
);

convertTempBtn.addEventListener("click", () => {
  if (celsiusInput.value) {
    fahrenheitInput.value = (
      (celsiusInput.value * 9) / 5 +
      32
    ).toFixed(2);
  } else if (fahrenheitInput.value) {
    celsiusInput.value = (
      ((fahrenheitInput.value - 32) * 5) /
      9
    ).toFixed(2);
  } else {
    alert("Enter a value to convert!");
  }
});

// Color Converter Script

function convertHex() {
  let hex = document
    .getElementById("hexInput")
    .value.trim();

  // Remove # if user includes it
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  // Validate hex length
  if (hex.length !== 6) {
    document.getElementById(
      "result"
    ).textContent = "Invalid HEX code";
    return;
  }

  // Convert to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    document.getElementById(
      "result"
    ).textContent = "Invalid HEX code";
    return;
  }

  document.getElementById(
    "result"
  ).textContent = `RGB: rgb(${r}, ${g}, ${b})`;
  document.getElementById(
    "preview"
  ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
