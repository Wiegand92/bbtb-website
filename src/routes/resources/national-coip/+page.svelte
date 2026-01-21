<script lang="ts">
    import ResourceDisplay from "$lib/components/website-components/ResourceDisplay.svelte";

    const files = [
        { title: "National Resources for Children of Incarcerated Parents", file: "/national-coip/National Resources for COIP.pdf", pdf: true},
        { title: "Additional National Resources", file: "/national-coip/Additional National Resources.docx", pdf: false }
    ];
</script>
<h1 class="text-4xl font-bold text-(--bbtb-foreground) my-8 text-center">How-To Guides for Supporting Incarcerated Loved Ones</h1>
{#each files as file}
    {#if file.pdf === true}
        <ResourceDisplay resources={[{title: file.title, file: file.file}]} pdf={true} />
    {:else}
        <ResourceDisplay resources={[{title: file.title, file: file.file}]} pdf={false} />
    {/if}
{/each}