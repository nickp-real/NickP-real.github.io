<script lang="ts">
  import NavbarButton from "./NavbarButton.svelte";
  import { routes } from "@components/routes";

  const { page }: { page: string } = $props();
</script>

<nav class="flex py-2 gap-8 print:hidden">
  {#each Object.entries(routes) as [route, name]}
    <NavbarButton {page} {route} {name} />
  {/each}
</nav>
