  <script lang="ts">
  export let route: string;
  export let page: string;
  $:currentPage = page == route
  </script>

  <a
    href={route}
    class="@[12rem]:w-full w-12 group-hover:w-full h-12 rounded-md bg-app-blue transition-all flex items-center text-app-black px-3 gap-x-2 relative"
    >
    {#if currentPage}
    <div class="absolute left-0 bg-br-app-white w-1 py-3"/>
    {/if}
    <span class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span><p
      class="@[12rem]:opacity-100 group-hover:opacity-100 opacity-0 transition-opacity"
    >
      Home
    </p></a
  >
