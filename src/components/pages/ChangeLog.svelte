<script lang="ts">
  import Markdown from '../ui/Markdown.svelte';
</script>

<div class="prose border p-3 mb-3 rounded-xl">
  <h3>Change Log</h3>
  <Markdown
  small={true}
  markdown={`
#### 1.240924.03
* Fixed Navigation
`}
/>
  <Markdown
    small={true}
    markdown={`
#### 1.240924.02
* Added Random Image to inspiration
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.240924.01
* Initial releae
  `}
  />
</div>
