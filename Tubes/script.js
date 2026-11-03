// Membuat fungsi bernama "validasi"
function validasi() {
    
    // 1. Ambil nilai dari inputan HTML
    let nama = document.getElementById("nama").value;
    let barang = document.getElementById("barang").value;

    // 2. Cek apakah nama kosong
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return false; // Gagalkan pengiriman form
    }

    // 3. Cek apakah barang belum dipilih
    if (barang === "") {
        alert("Silakan pilih barang dulu!");
        return false; // Gagalkan pengiriman form
    }

    // 4. Jika semua sudah diisi
    alert("Pesanan berhasil dikirim atas nama " + nama);
    return true; // Izinkan form terkirim
}