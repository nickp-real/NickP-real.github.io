<script lang="ts">
  const { name, route, page }: { name: string; route: string; page: string } = $props();
  const isCurrentPage = $derived(page == route);
</script>

<a
  href={route}
  class={`transition-all hover:text-app-blue ${isCurrentPage ? "text-br-app-blue font-bold" : "text-app-white"}`}
>
  {name}
</a>
