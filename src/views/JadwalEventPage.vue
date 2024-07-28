<template>
  <div class="jadwal-event md:flex flex-col md:flex-row">
    <Sidebar />
    <div class="flex-grow p-4 sm:ml-96">
      <div class="md:p-4 rounded-lg">
        <div class="h-auto mb-8 rounded md:p-4">
          <div class="md:flex justify-between items-center">
            <p class="my-7 font-semibold text-3xl text-black text-start flex-grow">Jadwal Event</p>
            <div class="relative mx-auto md:mb-0 mb-8 text-gray-600 flex items-center">
              <button type="submit" class="absolute right-full left-3.5 top-0.5 mt-2 mr-4">
                <svg
                  class="text-gray-500 h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background: new 0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px">
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
              <input class="border-2 border-light border-gray-300 bg-white w-full font-light h-11 px-14 pl-12 pr-3 rounded-lg text-lg focus:outline-none" type="search" name="search" placeholder="Search" />
            </div>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full md:text-sm text-xs text-center text-black border-collapse border border-black">
              <thead class="font-normal md:text-sm text-xs bg-primary text-white">
                <tr>
                  <th scope="col" class="px-14 py-3 border-2 border-black">Nama Event</th>
                  <th scope="col" class="md:px-3 px-5 py-3 border-2 border-black">Tanggal</th>
                  <th scope="col" class="md:px-10 px-10 py-3 border-2 border-black">Lokasi</th>
                  <th scope="col" class="md:px-3 px-10 py-3 border-2 border-black">Crew call time</th>
                  <th scope="col" class="md:px-5 px-10 py-3 border-2 border-black">Dress Code</th>
                  <th scope="col" class="px-3 py-3 border-2 border-black">Crew yang bertugas</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-2 border-black">
                  <td class="border-2 border-black text-left align-top pt-2 pl-5" rowspan="5">Event_XXXXX</td>
                  <td class="border-2 md:px-3 px-5 border-black text-center pt-2 align-top" rowspan="5">DD/MM/YYYY</td>
                  <td class="border-2 border-black text-center pt-2 align-top" rowspan="5">babarsari</td>
                  <td class="border-2 md:px-0 px-6 border-black text-center pt-2 align-top" rowspan="5">00.00</td>
                  <td class="border-2 md:px-3 px-10 border-black text-center align-top pt-2" rowspan="5">hitam</td>
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="border-2 border-black text-left align-top pt-2 pl-5" rowspan="6">Event_XXXXX</td>
                  <td class="border-2 md:px-3 px-5 border-black text-center pt-2 align-top" rowspan="6">DD/MM/YYYY</td>
                  <td class="border-2 border-black text-center pt-2 align-top" rowspan="6">babarsari</td>
                  <td class="border-2 md:px-0 px-6 border-black text-center pt-2 align-top" rowspan="6">00.00</td>
                  <td class="border-2 md:px-3 px-10 border-black text-center align-top pt-2" rowspan="6">hitam</td>
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
                <tr class="bg-white border-2 border-black">
                  <td class="md:px-6 px-20 py-1.5 border-2 border-black">User_12312</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "JadwalEventPage",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
/* No custom styles needed */
</style>
