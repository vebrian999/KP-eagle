<template>
  <div class="absensi-page md:flex flex-col md:flex-row">
    <Sidebar />
    <div class="flex-grow p-4 sm:ml-96">
      <div class="p-4  rounded-lg flex flex-col justify-between md:gap-y-64">
        <div class="h-auto md:h-48 mb-8 rounded p-4">
          <p class="my-7 font-semibold text-3xl text-black">Event Terdekat</p>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-center text-black border-collapse border border-black">
              <thead class="text-xs text-gray-700">
                <tr class="bg-primary text-white text-center border-2 border-black font-normal text-2xl">
                  <th scope="col" class="px-6 py-3 border-2 border-black">Nama Event</th>
                  <th scope="col" class="px-6 py-3 border-2 border-black">Tanggal</th>
                  <th scope="col" class="px-6 py-3 border-2 border-black">Others</th>
                </tr>
              </thead>
              <tbody class="font-normal text-2xl">
                <tr class="bg-white border-2 border-black">
                  <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap border-2 border-black text-left">Event_XXXXX</th>
                  <td class="px-6 py-4 border-2 border-black">DD/MM/YYYY</td>
                  <td class="px-6 py-4 border-2 border-black">
                    <button class="hover:underline focus:outline-none">Detail</button>
                  </td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap border-2 border-black text-left">Event_XXXXX</th>
                  <td class="px-6 py-4 border-2 border-black">DD/MM/YYYY</td>
                  <td class="px-6 py-4 border-2 border-black">
                    <button class="hover:underline focus:outline-none">Detail</button>
                  </td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap border-2 border-black text-left">Event_XXXXX</th>
                  <td class="px-6 py-4 border-2 border-black">DD/MM/YYYY</td>
                  <td class="px-6 py-4 border-2 border-black">
                    <button class="hover:underline focus:outline-none">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center mt-4">
            <button class="hover:underline focus:outline-none">Show more</button>
          </div>
        </div>

        <div class="md:flex items-start h-auto md:h-56 mb-4 rounded bg-gray-300 dark:bg-gray-800 p-4 mx-0 md:mx-28">
          <p class="my-3 ml-3 font-semibold text-xl text-black">Pengumuman:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "AbsensiPage",
  components: {
    Sidebar,
  },
};
</script>
