function generateBackground() {
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;

  const resultDiv = document.getElementById("result");
  resultDiv.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  resultDiv.innerHTML = `<p>Your Gradient: ${color1} to ${color2}</p>`;
}
