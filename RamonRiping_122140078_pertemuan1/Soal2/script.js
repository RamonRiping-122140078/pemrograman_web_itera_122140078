function sapaNama(nama) {
  return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function () {
  const nama = document.getElementById("nama-input").value;
  if (nama.trim() === "") {
    document.getElementById(
      "sapa-output"
    ).innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
  } else {
    const pesan = sapaNama(nama);
    document.getElementById(
      "sapa-output"
    ).innerHTML = `<p class="text-green-500">${pesan}</p>`;
  }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
  let hasil = 0;
  switch (operasi) {
    case "tambah":
      hasil = angka1 + angka2;
      break;
    case "kurang":
      hasil = angka1 - angka2;
      break;
    case "kali":
      hasil = angka1 * angka2;
      break;
    case "bagi":
      if (angka2 === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan";
      }
      hasil = angka1 / angka2;
      break;
    case "pangkat":
      hasil = Math.pow(angka1, angka2);
      break;
    case "akarkuadrat":
      if (angka1 < 0) {
        return "Error: Bilangan negatif tidak memiliki akar kuadrat";
      } else if (!isNaN(angka2)) {
        return "Error: Akar kuadrat hanya membutuhkan satu angka";
      }
      hasil = Math.sqrt(angka1);
      break;
    case "modulus":
      hasil = angka1 % angka2;
      break;
    default:
      return "Operasi tidak valid";
  }
  return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "tambah");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kurang").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kurang");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kali").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kali");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-bagi").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "bagi");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-pangkat").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "pangkat");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
  }
});

document
  .getElementById("btn-akarkuadrat")
  .addEventListener("click", function () {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1)) {
      document.getElementById(
        "hasil-kalkulator"
      ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
      const hasil = hitungKalkulator(angka1, angka2, "akarkuadrat");
      document.getElementById(
        "hasil-kalkulator"
      ).innerHTML = `<p>Hasil: √^2 dari ${angka1} = ${hasil}</p>`;
    }
  });

document.getElementById("btn-modulus").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "modulus");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
  }
});
