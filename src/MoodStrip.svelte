<script>
  export let mapData;
  let gradient = "";

  $: {
    gradient = mapData.globalEmotion.gradient;
  }
</script>

<style>
  .mood-strip {
    height: 30px;
    background: transparent;
    opacity: 0.8;
  }
</style>

<div class="mood-strip" style={'background:' + gradient} />
