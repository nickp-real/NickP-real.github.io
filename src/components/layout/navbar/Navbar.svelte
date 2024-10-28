<script lang="ts">
  import NavbarButton from "./NavbarButton.svelte";

  const routes = {
    "/": "Home",
    "/blogs": "Blogs",
  };

  const { page }: { page: string } = $props();
</script>

<nav class="flex py-2 gap-8">
  {#each Object.entries(routes) as [route, name]}
    <NavbarButton {page} {route} {name} />
  {/each}
</nav>
