<script lang="ts">
    const cardStyles = "p-4 text-center shadow-md shadow-black my-8 h-24 w-2xs rounded-lg lg:w-lg bg-(--bbtb-foreground) lg:mx-10 flex-1";
</script>

<div class='container flex min-w-full p-2 flex-col items-center lg:flex-row justify-around'>
    <div class={cardStyles}>
        <p>
            2.7 million American children have a parent that's incarcerated and more than 5 million children have had a parent in prison or jail at some point in their lives.
        </p>
    </div>
    <div class={cardStyles}>
        <p>
            As of 2026, Building Bonds Through Books has supported over 75 families impacted by parental incarceration.
        </p>
    </div>
</div>

<style lang='postcss'>
    .card{
        background-color: var(--bbtb-foreground);
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        height: 7rem;
        padding: 1.5rem;
        margin: 1rem;
        flex: 1;
        text-align: center;
    }
    p{
        color: var(--bbtb-background);
    }
</style>