<template>
  <div class="pengajuan-peminjaman">
    <Sidebar />
    <div class="flex-grow p-4 sm:ml-96">
      <div class="md:p-4 rounded-lg">
        <div class="h-auto mt-8 rounded md:p-4">
          <div class="text-center">
            <p class="font-bold text-4xl text-black">Pengajuan Peminjaman</p>
          </div>
          <form class="mt-8">
            <div class="flex flex-col justify-start items-start">
              <div class="md:flex md:items-center mb-4">
                <div class="">
                  <label class="block text-gray-900 font-bold text-xl md:text-right mb-1 md:mb-0 pr-16 mr-1.5" for="inline-name-event">Nama Acara :</label>
                </div>
                <div class="">
                  <input
                    class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 placeholder:font-normal placeholder:text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="inline-name-event"
                    type="text"
                    placeholder="masukkan nama acara"
                    required />
                </div>
              </div>
              <div class="md:flex md:items-center mb-4">
                <div class="">
                  <label class="block text-gray-900 font-bold text-xl md:text-right mb-1 md:mb-0" for="inline-date"> Tanggal Pinjam : </label>
                </div>
                <div class="">
                  <input
                    class="bg-white appearance-none border-2 border-gray-200 rounded w-full mx-10 py-2 px-4 font-light text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="inline-date"
                    type="date"
                    required />
                </div>
              </div>
              <div class="md:flex md:items-center mb-4">
                <div class="">
                  <label class="block text-gray-900 font-bold text-xl md:text-right mb-1 md:mb-0 pr-28 mr-3" for="inline-location"> Lokasi : </label>
                </div>
                <div class="">
                  <input
                    class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 placeholder:font-normal placeholder:text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="inline-location"
                    type="text"
                    placeholder="Placeholder"
                    required />
                </div>
              </div>
            </div>
            <div class="">
              <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div class="my-10 rounded dark:bg-gray-800">
                  <div class="relative overflow-x-auto">
                    <table class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 border-b font-normal">
                        <tr>
                          <th scope="col" class="px-2 py-3 text-base text-gray-900">Nama Barang</th>
                          <th scope="col" class="px-6 py-3 text-base text-gray-400 text-right">Jumlah barang</th>
                          <th scope="col" class="px-6 py-3 text-base text-gray-400 text-right">Stok</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="max-w-sm mx-auto">
                              <label for="countries" class="hidden mb-2 text-base font-medium text-gray-900 dark:text-white">Select an option</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-primary focus:border-ring-primary block w-full p-2.5">
                                <option class="font-normal" selected>Placeholder</option>
                                <option class="font-normal" value="BS">Bass</option>
                                <option class="font-normal" value="SS">Sound System</option>
                                <option class="font-normal" value="DR">Drum</option>
                                <option class="font-normal" value="GI">Gitar</option>
                              </select>
                            </div>
                          </th>
                          <td class="px-6 py-4 text-right">
                            <label for="counter-input" class="hidden mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                            <div class="relative flex items-center justify-end">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border-2 border-gray-900 rounded-full h-6 w-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 1h16" />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                data-input-counter
                                class="flex-shrink-0 text-gray-900 dark:text-white border-2 mx-3 border-gray-300 rounded-xl px-1 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                placeholder=""
                                value="12"
                                required />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border-2 border-gray-900 rounded-full h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td class="px-6 py-4 text-right">50</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="max-w-sm mx-auto">
                              <label for="countries" class="hidden mb-2 text-base font-medium text-gray-900 dark:text-white">Select an option</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-primary focus:border-ring-primary block w-full p-2.5">
                                <option class="font-normal" selected>Placeholder</option>
                                <option class="font-normal" value="BS">Bass</option>
                                <option class="font-normal" value="SS">Sound System</option>
                                <option class="font-normal" value="DR">Drum</option>
                                <option class="font-normal" value="GI">Gitar</option>
                              </select>
                            </div>
                          </th>
                          <td class="px-6 py-4 text-right">
                            <label for="counter-input" class="hidden mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                            <div class="relative flex items-center justify-end">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border-2 border-gray-900 rounded-full h-6 w-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 1h16" />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                data-input-counter
                                class="flex-shrink-0 text-gray-900 dark:text-white border-2 mx-3 border-gray-300 rounded-xl px-1 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                placeholder=""
                                value="12"
                                required />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border-2 border-gray-900 rounded-full h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td class="px-6 py-4 text-right">50</td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                          <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="max-w-sm mx-auto">
                              <label for="countries" class="hidden mb-2 text-base font-medium text-gray-900 dark:text-white">Select an option</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-primary focus:border-ring-primary block w-full p-2.5">
                                <option class="font-normal" selected>Placeholder</option>
                                <option class="font-normal" value="BS">Bass</option>
                                <option class="font-normal" value="SS">Sound System</option>
                                <option class="font-normal" value="DR">Drum</option>
                                <option class="font-normal" value="GI">Gitar</option>
                              </select>
                            </div>
                          </th>
                          <td class="px-6 py-4 text-right">
                            <label for="counter-input" class="hidden mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                            <div class="relative flex items-center justify-end">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border-2 border-gray-900 rounded-full h-6 w-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 1h16" />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                data-input-counter
                                class="flex-shrink-0 text-gray-900 dark:text-white border-2 mx-3 border-gray-300 rounded-xl px-1 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                placeholder=""
                                value="12"
                                required />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border-2 border-gray-900 rounded-full h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td class="px-6 py-4 text-right">50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-x-5 mt-5">
              <button type="submit" class="bg-button2 hover:text-white hover:underline text-black py-3 px-10 rounded-md">Simpan</button>
              <button type="button" class="bg-red-600 text-black hover:text-white hover:underline py-3 px-12 rounded-md">Batal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "PengajuanPeminjamanPage",
  components: {
    Sidebar,
  },
};
</script>

<style></style>
