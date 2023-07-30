<script lang="ts">
import NavbarButton from "./NavbarButton.svelte"
  let isToggle = false;

  const onToggleClick = () => (isToggle = !isToggle);

  export let page: string;
</script>

<aside
  class={`@container min-h-full bg-bar ${
    isToggle ? "w-64" : "w-20 hover:w-64"
  } transition-all group flex flex-col items-start p-4 gap-4`}
>
  <NavbarButton page={page} route="/"/>
  <NavbarButton page={page} route="/about"/>
  <button on:click={onToggleClick} class="w-12 h-12 flex items-center px-3 gap-x-2 @[12rem]:w-full"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/></svg></span><p class="opacity-0 @[12rem]:opacity-100 transition-opacity whitespace-nowrap">Toggle Sidebar</p></button>
</aside>
