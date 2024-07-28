<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full py-4 gradient-sidebar flex flex-col justify-between">
      <ul class="space-y-0 font-medium text-center">
        <div class="space-y-4 xl:space-y-6 mb-10">
          <img class="mx-auto rounded-full h-24 md:w-24" src="../assets/images/avatars.jpg" alt="author avatar" />
          <div class="space-y-2">
            <div class="flex justify-center items-center flex-col space-y-1 text-xl font-medium leading-6">
              <h3 class="text-white">Welcome</h3>
              <p class="text-white">User_12312131</p>
            </div>
          </div>
        </div>
        <li class="md:-mx-0.5">
          <router-link to="/" class="nav-link flex items-center p-4 text-white px-20 bg-transparent hover:bg-white hover:text-black group md:text-2xl border-2 border-white border-b-0">
            <span class="flex-1 whitespace-nowrap">Absensi</span>
          </router-link>
        </li>

        <li class="md:-mx-0.5">
          <router-link to="/jadwalevent" class="nav-link flex items-center p-4 text-white px-20 bg-transparent hover:bg-white hover:text-black group md:text-2xl border-2 border-white border-b-0">
            <span class="flex-1 whitespace-nowra">Jadwal Acara</span>
          </router-link>
        </li>

        <li class="md:-mx-0.5">
          <router-link to="/inventarisbarang" class="nav-link flex items-center p-4 text-white px-20 bg-transparent hover:bg-white hover:text-black group md:text-2xl border-2 border-white border-b-0">
            <span class="flex-1 whitespace-nowra">Inventaris Barang</span>
          </router-link>
        </li>
        <li class="md:-mx-0.5">
          <a href="#" class="flex items-center p-4 text-white px-20 bg-transparent hover:bg-white hover:text-black group md:text-2xl border-2 border-white">
            <span class="flex-1 whitespace-nowrap">Akun saya</span>
          </a>
        </li>
      </ul>
      <div class="text-center">
        <a href="#" class="flex items-center p-4 text-white px-20 bg-transparent hover:bg-red-600 hover:text-white group font-medium md:text-2xl">
          <span class="flex-1 whitespace-nowrap">Log Out</span>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style></style>
