<script lang="ts">
  export let content: string
  export let count: number = 0
  console.log(count)
  const handleClick = (): void => {
    count++
    console.log('click capture...')
  }
</script>

<button on:click|capture={handleClick}>
  {count}
</button>
<b>{content}</b>
