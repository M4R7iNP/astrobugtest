<script>
  let {
    children,
  } = $props();
</script>

<div
    class="tooltip-root"
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .tooltip-root {
    background-color: #f00;
  }
</style>
