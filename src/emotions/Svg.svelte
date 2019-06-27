<script>
	export let width;
  export let height;
  export let animate = true;
</script>

<style>
	div :global(svg) {
		transition: width 0.3s, height 0.3s;
    width: var(--svgwidth);
    height: var(--svgheight);
	}

	div :global(svg:hover) {
		width: calc(var(--svgwidth) * 2) !important;
		height: calc(var(--svgheight) * 2) !important;
	}
</style>

{#if animate}
<div style="--svgwidth: {width}; --svgheight: {height};">
  <slot></slot>
</div>
{:else}
  <slot></slot>
{/if}
