<template>
  <div class="inventari-barang">
    <Sidebar />
    <div class="flex-grow p-4 sm:ml-96">
      <div class="md:p-4 rounded-lg">
        <div class="h-auto mt-8  rounded md:p-4">
          <div class="">
            <p class="font-semibold text-4xl text-black text-center flex-grow">INVENTARIS BARANG</p>
            <router-link to="/pengajuanpeminjaman">
              <button class="my-5 bg-button1 hover:underline text-black py-2.5 px-5 rounded-xl text-base font-normal">Ajukan Peminjaman Barang</button>
            </router-link>
          </div>
          <div class="h-48 mb-4 rounded">
            <h2 class="text-start pl-5">Riwayat Peminjaman</h2>
            <div class="px-10 py-2.5 mt-3 flex-col-5 bg-gray-300 gap-x-10 rounded-full">
              <div class="flex justify-between">
                <div class="px-7">Nama_acara</div>
                <div class="px-7">Tanggal_pinjam</div>
                <div class="px-7">Lokasi</div>
                <div class="px-7">Jumlah barang</div>
                <div class="px-7">Status</div>
              </div>
            </div>
            <div class="px-10 py-2.5 mt-5 flex-col-5 bg-gray-300 gap-x-10 rounded-full">
              <div class="flex justify-between">
                <div class="px-7">Nama_acara</div>
                <div class="px-7">Tanggal_pinjam</div>
                <div class="px-7">Lokasi</div>
                <div class="px-7">Jumlah barang</div>
                <div class="px-7">Status</div>
              </div>
            </div>
            <div class="px-10 py-2.5 mt-5 flex-col-5 bg-gray-300 gap-x-10 rounded-full">
              <div class="flex justify-between">
                <div class="px-7">Nama_acara</div>
                <div class="px-7">Tanggal_pinjam</div>
                <div class="px-7">Lokasi</div>
                <div class="px-7">Jumlah barang</div>
                <div class="px-7">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "InventarisBarangPage",
  components: {
    Sidebar,
  },
};
</script>

<style></style>
