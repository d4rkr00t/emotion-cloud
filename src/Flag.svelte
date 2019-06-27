<script>
  export let locationId;

  import Australia from "./flags/Australia.svelte";
  import Brazil from "./flags/Brazil.svelte";
  import India from "./flags/India.svelte";
  import Japan from "./flags/Japan.svelte";
  import Malaysia from "./flags/Malaysia.svelte";
  import Netherlands from "./flags/Netherlands.svelte";
  import Philippines from "./flags/Philippines.svelte";
  import Poland from "./flags/Poland.svelte";
  import Turkey from "./flags/Turkey.svelte";
  import Ukraine from "./flags/Ukraine.svelte";
  import USA from "./flags/USA.svelte";

  const componentToIds = [
    {
      component: Netherlands,
      id: "516b18ae43d11ffad821a01306fcfbb7b1a699a1",
      name: "Amsterdam, Netherlands"
    },
    {
      component: Turkey,
      id: "8b30de8d0026b9a13991ae34e9156dae60320522",
      name: "Ankara, Turkey"
    },
    {
      component: USA,
      id: "c0f9e76ae87a44d09f4ecc3638893280374d4d9d",
      name: "Austin, United States"
    },
    {
      component: India,
      id: "fd6923b3ff11ab7edee1cb1038e3ed69a99e2b6e",
      name: "Bengaluru, India"
    },
    {
      component: USA,
      id: "f346ebea1e75403daab6d606573cee04feb64890",
      name: "Boston, United States"
    },
    {
      component: USA,
      id: "133286126346044a11684c98194097d0d9e80aaf",
      name: "Falls Church, United States"
    },
    {
      component: Poland,
      id: "89669a88161843d8f82875bc1ac0bb10a814c15d",
      name: "Gdansk, Poland"
    },
    {
      component: USA,
      id: "e301220d593fa1756ae0dfe89a6dba74164a4cb3",
      name: "Georgetown, United States"
    },
    {
      id: "64c10e153b7e2d9b40cee7e9f7d5ca1865eeb01a",
      name: "Home Office"
    },
    {
      component: Malaysia,
      id: "c4a315a05b9a529c54af2caccc5ae9bb8662059c",
      name: "Kuala Lumpur, Malaysia"
    },
    {
      component: Ukraine,
      id: "5e8d5f3446f5a0aafbd528523c50c7af683e1143",
      name: "Lviv, Ukraine"
    },
    {
      component: Philippines,
      id: "d40655e729700e8c723336383e0b17ccdd947625",
      name: "Manila, Philippines"
    },
    {
      component: USA,
      id: "d97e538e8a103f8023d27937519b26aa72d60455",
      name: "Mountain View, United States"
    },
    {
      component: USA,
      id: "1f3533226035e0d6f3ac71ddf0d327bc9fc4f178",
      name: "New York, United States"
    },
    {
      component: Brazil,
      id: "a23e3ba4ad7dddafd1c17bffaaae42ec5b7bdf1d",
      name: "Porto Alegre, Brazil"
    },
    {
      component: USA,
      id: "f32746ce7bfe8c5af880d05befcbb17b0cdb9d83",
      name: "San Francisco, United States"
    },
    {
      component: Brazil,
      id: "2f1e3b97386fe65984f83bedd6a0d22b8d02cd34",
      name: "Sao Paulo, Brazil"
    },
    {
      component: Australia,
      id: "a12a50054f1a55944bb55f7e9f3a183f47ee23b6",
      name: "Sydney, Australia"
    },
    {
      component: Japan,
      id: "b3b30a080f4801c52a9b2ae8fe1a11c044a8655c",
      name: "Yokohama, Japan"
    }
  ];


  const flagObj = componentToIds.find(loc => loc.id === locationId);
</script>

<style>
  .fallback {
    display: block;
    width: 15px;
    height: 15px;
    background:rgb(7, 71, 166);
    border-radius: 100%;
  }
</style>


{#if flagObj}
 <svelte:component this={flagObj.component} width="15px" height="15px" />
{:else}
  <span class="fallback" />
{/if}
