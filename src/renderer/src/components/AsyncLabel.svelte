<script lang="ts">
  import { waitAmount } from '../utils'

  export let content: string
</script>

{#await waitAmount(1000)}
  <i>loading...</i>
{:then}
  <p>{content}</p>
{/await}
