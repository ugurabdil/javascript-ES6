let mesaj = `
Migros'a hoş geldiniz.
 Money kartınız var mı?
 1-Evet
 2-Hayır
`;

const urunler = [
  {
    urunIsmi: "Süt",
    fiyat: 15,
  },
  {
    urunIsmi: "Bebek bezi",
    fiyat: 100,
  },
  {
    urunIsmi: "KusBası",
    fiyat: 200,
  },
];

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
  let isim = prompt("Adınızı giriniz:");
  let soyisim = prompt("Soyisminizi giriniz");

  const musteri = new Musteri(isim, soyisim, sonuc, urunler);
  let odenecekTutar=musteri.hesapla();

  alert(`
  Müşteri Bilgileri: ${isim} ${soyisim}
  Ödenecek Tutar: ${odenecekTutar}
  `)
} else {

    const musteri=new Musteri(null,null,sonuc,urunler);
    odenecekTutar=musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}
