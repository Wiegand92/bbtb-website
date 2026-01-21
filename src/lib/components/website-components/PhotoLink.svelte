<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import books from '$lib/assets/images/icons/books.jpeg';
  import mission from "$lib/assets/images/icons/mission.jpeg";
  import resources from "$lib/assets/images/icons/resources.jpeg";

  const cardStyles = "p-0 aspect-square w-48 md:w-64 lg:w-72 lg:mx-10 hover:scale-105 transition-transform duration-300 ease-in-out justify-center";
</script>
<div class="flex lg:flex-row lg:justify-center w-full my-10 flex-col items-center gap-4">
    <Card.Root class={cardStyles}>
        <Card.Content>
            <a href="/about/books">
                <img src={books} alt="Books available through bbtb"/>
            </a>
        </Card.Content>
    </Card.Root>
    <Card.Root class={cardStyles}>
        <Card.Content>
            <a href="/about/mission">
                <img src={mission} alt="Our Mission"/>
            </a>
        </Card.Content>
    </Card.Root>
    <Card.Root class={cardStyles}>
        <Card.Content>
            <a href="/resources/how-to">
                <img src={resources} alt="Resources"/>
            </a>
        </Card.Content>
    </Card.Root>
</div>
<style lang='postcss'>
    img{
        height: fit-content;
        padding: 0rem;
    }
</style>