<script>
    import Tooltip from './Tooltip.svelte';
    import TooltipContent from './TooltipContent.svelte';
    let isHovering = false;
    let count = 0;
    function onClick() {
        console.log('Clicked!');
        count += 1;
    }
</script>

<div
    class="root"
    class:hovering={isHovering}
    onmouseover={() => isHovering = true}
    onmouseout={() => isHovering = false}
    onclick={onClick}
>
    HELLO WORLD!
    Count: {count}
  {#if isHovering}
    <Tooltip>
      <TooltipContent />
    </Tooltip>
  {/if}
</div>

<style>
.root {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
}
</style>
