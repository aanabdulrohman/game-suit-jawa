let t = true;
while (t) {
  // menangkap pilihan player

  let p = prompt("Kamu mau milih apa : gajah, orang, semut?");
  let hasil = "";

  // menangkaap pilihan komputer & membangkitkan bilangan random
  let comp = Math.random(); //menghasilkan bilangan random

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    // if (comp == orang) {
    //   hasil = "MENANG";
    // } else {
    //   hasil = "KALAH";
    // }

    // menggunakan operatur ternari agar lebih singkat
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "Anda memasukan pilihan yang salah";
  }

  // tampilkan hasilnya
  alert(
    "Kamu memilih " +
      p +
      " dan komputer memilih " +
      comp +
      "\nMaka hasilnya kamu " +
      hasil
  );

  t = confirm("Mau bermain lagi ?");
}
alert("Terimakasih telah bermain");
