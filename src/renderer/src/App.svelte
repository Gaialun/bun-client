<script lang="ts">
  import electronLogo from './assets/electron.svg'
  import AsyncLabel from './components/AsyncLabel.svelte'
  import Button from './components/Button.svelte'

  let count = 0

  $: {
    console.log(count)
  }
</script>

<Button content={electronLogo}></Button>

<AsyncLabel content={electronLogo} />
