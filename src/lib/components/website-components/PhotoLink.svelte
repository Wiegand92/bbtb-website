<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import books from '$lib/assets/images/icons/books.jpeg';
  import mission from "$lib/assets/images/icons/mission.jpeg";
  import resources from "$lib/assets/images/icons/resources.jpeg";
  import { resolve } from '$app/paths';

  const cardStyles = "p-0 shadow-sm shadow-(color:--bbtb-black) lg:mx-10 hover:scale-105 transition-transform duration-300 ease-in-out justify-center";
  const imgStyles = "h-auto w-48 md:w-64 lg:w-72 rounded-lg";
</script>
<div class="flex lg:flex-row lg:justify-center w-full my-10 flex-col items-center gap-4">
    <Card.Root class={cardStyles}>
        <Card.Content class="p-1">
            <a href={resolve("/about/books")}>
                <img src={books} class={imgStyles} alt="Books available through bbtb"/>
            </a>
        </Card.Content>
    </Card.Root>
    <Card.Root class={cardStyles}>
        <Card.Content class="p-1">
            <a href={resolve("/about/mission")}>
                <img src={mission} class={imgStyles} alt="Our Mission"/>
            </a>
        </Card.Content>
    </Card.Root>
    <Card.Root class={cardStyles}>
        <Card.Content class="p-1">
            <a href={resolve("/resources/how-to")}>
                <img src={resources} class={imgStyles} alt="Resources"/>
            </a>
        </Card.Content>
    </Card.Root>
</div>