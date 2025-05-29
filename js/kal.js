let celfar = true;

function convert() {
  const input = document.getElementById("in").value.trim();
  const value = parseFloat(input);
  // VALIDASI INPUT
  if (isNaN(value)) {
    alert(
      "Belum ada input suhu yang valid. Silakan masukkan angka suhu yang benar."
    );
    document.getElementById("in").focus();
    return;
  }

  // KONVERSI SUHU
  let hasil, calcText;

  if (celfar) {
    hasil = (value * 9) / 5 + 32;
    calcText = `${value}°C × (9/5) + 32 = ${hasil}°F`;
  } else {
    hasil = ((value - 32) * 5) / 9;
    calcText = `(${value}°F - 32) × 5/9 = ${hasil.toFixed(2)}°C`;
  }

  document.getElementById("out").value = hasil.toFixed(2);
  document.getElementById("cal").value = calcText;
}

// RESET
function resetFields() {
  document.getElementById("in").value = "";
  document.getElementById("out").value = "";
  document.getElementById("cal").value = "";
}

// REVERSE
function toggleMode() {
  celfar = !celfar;

  const inputLabel = document.getElementById("in-lab");
  const outputLabel = document.getElementById("out-lab");
  const introText = document.getElementById("teks");
  const rumusTitle = document.getElementById("rumus-jud");
  const rumusDeskripsi = document.getElementById("rumus-id");
  const rumusFormula = document.getElementById("rumus-rum");
  // CEL ke FAR
  if (celfar) {
    inputLabel.innerHTML = "<b>Celsius (&deg;C):</b>";
    outputLabel.innerHTML = "<b>Fahrenheit (&deg;F):</b>";
    introText.innerHTML =
      "Masukkan suhu derajat Celsius (&deg;C) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (&deg;F).";
    rumusTitle.innerText = "Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)";
    rumusDeskripsi.innerHTML =
      "Suhu <i>S</i> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <i>S</i> dalam derajat Celsius (&deg;C) kali <b>9/5</b> tambah <b>32</b>.";
    rumusFormula.innerHTML =
      "S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> × 9/5) + 32<br />atau<br />S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> × 1.8) + 32";
    // FAR ke CEL
  } else {
    inputLabel.innerHTML = "<b>Fahrenheit (&deg;F):</b>";
    outputLabel.innerHTML = "<b>Celsius (&deg;C):</b>";
    introText.innerHTML =
      "Masukkan suhu derajat Fahrenheit (&deg;F) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celsius (&deg;C).";
    rumusTitle.innerText = "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";
    rumusDeskripsi.innerHTML =
      "Suhu <i>S</i> dalam derajat Celsius (&deg;C) sama dengan suhu <i>S</i> dalam derajat Fahrenheit (&deg;F) dikurangi <b>32</b> lalu dikali <b>5/9</b>.";
    rumusFormula.innerHTML =
      "S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) × 5/9<br />atau<br />S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) × 0.5556";
  }

  resetFields();
}
