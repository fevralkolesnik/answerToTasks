<script lang="ts">
  export let value = "";
  export let names:Array<string>;
</script>

<!-- <button on:click={increment}>
  count is {count}
</button> -->

<select class="select" bind:value={value}>
  {#each names as name, index (index)}
  <option value={name}>{name}</option>
  {/each}
</select>

<style>
  .select {
    width: 200px;
    border-radius: 24px;
    font-size: 20px;
  }
</style>
