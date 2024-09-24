<script>
  import MarkdownIt from 'markdown-it';
  import { getRandomKeywords } from '../../lib/keywords';
  import { generalTopics, getPrompt, postTypes } from "../../lib/prompts";
  import { getRandomItem, getRandomItemWithIndex } from "../../lib/random";
  import Answer from "../ui/Answer.svelte";
  import ToggleContent from "../ui/ToggleContent.svelte";

  const md = new MarkdownIt();
  let answer;

  function generate() {
    answer = '';

    const generalTopic = getRandomItemWithIndex(generalTopics);
    answer += md.render(generalTopic.item) + '<br/>';

    const specificTopic = getPrompt(generalTopic.index);
    answer += md.render(specificTopic) + '<br/>';

    const postType = getRandomItem(postTypes);
    answer += md.render(postType) + '<br/>';

    const keywords = getRandomKeywords(5);
    answer += '<strong>Keywords:</strong> ' + keywords.join(', ');
    return answer;
  };

</script>

<ToggleContent hide={false}>
  <span slot="title">Prompt Generator</span>
  <form on:submit|preventDefault={generate} class="flex justify-center">
    <button class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">Generate</button>
  </form>
  {#if answer}
    <Answer {answer}/>
  {/if}
</ToggleContent>
