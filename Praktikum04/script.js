window.addEventListener("load", function () {
  alert("Selamat datang di Blog Teknologi!");


  const footer = document.querySelector("footer p");
  const jam = new Date().toLocaleTimeString("id-ID");
  footer.textContent = `Hak Cipta © 2024 — Blog Teknologi | Dibuka pukul ${jam}`;
});


document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("mouseover", function () {
    link.style.fontSize = "1.2em";
  });
  link.addEventListener("mouseout", function () {
    link.style.fontSize = "1em";
  });
});


const form = document.getElementById("formKontak");
const pesanSukses = document.getElementById("pesanSukses");


const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  pesanSukses.textContent = ""; 
  let valid = true;

 
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");

  const errNama = document.getElementById("errNama");
  const errEmail = document.getElementById("errEmail");
  const errPesan = document.getElementById("errPesan");


  if (nama.value.trim() === "") {
    errNama.textContent = "Nama tidak boleh kosong.";
    valid = false;
  } else if (nama.value.trim().length < 3) {
    errNama.textContent = "Nama minimal 3 karakter.";
    valid = false;
  } else {
    errNama.textContent = "";
  }

 
  if (email.value.trim() === "") {
    errEmail.textContent = "Email tidak boleh kosong.";
    valid = false;
  } else if (!regexEmail.test(email.value.trim())) {
    errEmail.textContent = "Format email tidak valid (contoh: nama@email.com).";
    valid = false;
  } else {
    errEmail.textContent = "";
  }

 
  if (pesan.value.trim() === "") {
    errPesan.textContent = "Pesan tidak boleh kosong.";
    valid = false;
  } else if (pesan.value.trim().length < 10) {
    errPesan.textContent = "Pesan minimal 10 karakter.";
    valid = false;
  } else {
    errPesan.textContent = "";
  }


  if (valid) {
    pesanSukses.textContent = "✅ Pesan berhasil dikirim! Terima kasih, " +
      nama.value.trim() + ".";
    alert("Pesan berhasil dikirim!");
    form.reset();
  }
});


["nama", "email", "pesan"].forEach(function (id) {
  const input = document.getElementById(id);
  input.addEventListener("input", function () {
    const err = document.getElementById(
      "err" + id.charAt(0).toUpperCase() + id.slice(1)
    );
    if (err) err.textContent = "";
  });
});