<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    export let resources: {
        title: string;
        file: string;
    }[];
    export let pdf: boolean;
    const buttonStyle = "bg-(--bbtb-foreground) text-(--bbtb-background) text-lg p-6 rounded-lg hover:bg-(--bbtb-pink) hover:text-(--bbtb-foreground) transition-colors duration-300 ease-in-out";
</script>

<div class='flex flex-col px-4 justify-center items-center'>
{#each resources as resource}
    {#if pdf===true}
        <div class="resource-item mb-6 items-center text-center">
            <a href={resource.file} target="_blank" class="">
                <h2 class="text-2xl text-(--bbtb-foreground) font-semibold mb-2 hover:text-(--bbtb-pink) hover:bg-(--bbtb-secondary-background) transition-colors duration-300 ease-in-out">{resource.title}</h2>
            </a>
            <Button href={resource.file} download class={buttonStyle}>Download PDF</Button>
        </div>
    {:else}
        <div class="resource-item mb-6 items-center text-center">
            <h2 class="text-2xl text-(--bbtb-foreground) font-semibold mb-2">{resource.title}</h2>
            <Button href={resource.file} download class={buttonStyle}>Download Resource</Button>
        </div>
    {/if}
{/each}
</div>