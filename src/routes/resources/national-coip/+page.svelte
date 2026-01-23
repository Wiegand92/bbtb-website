<script lang="ts">
    import ResourceDisplay from "$lib/components/website-components/ResourceDisplay.svelte";
    import { asset } from '$app/paths';

    const files = [
        { title: "National Resources for Children of Incarcerated Parents", file: asset('/national-coip/National Resources for COIP.pdf'), pdf: true},
        // { title: "Additional National Resources", file: asset('/national-coip/Additional National Resources.docx'), pdf: false }
    ];
</script>
<h1 class="text-4xl font-bold text-(--bbtb-foreground) my-8 text-center">National Resources for Children of Incarcerated Parents</h1>
{#each files as file}
    {#if file.pdf === true}
        <ResourceDisplay resources={[{title: file.title, file: file.file}]} pdf={true} />
    {:else}
        <ResourceDisplay resources={[{title: file.title, file: file.file}]} pdf={false} />
    {/if}
{/each}