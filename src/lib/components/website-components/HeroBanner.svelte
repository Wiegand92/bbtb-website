<script lang="ts">
    import envelopeBackground from '$lib/assets/images/evelopeBackground.jpg';
    import BookRequestButton from './BookRequestButton.svelte';
	
</script>
<div class="hero-banner w-full h-maxcontent flex flex-col items-center justify-center text-center p-20" style="background-image: url({envelopeBackground}); background-size: cover; background-position: center;">
    <h2 class="text-4xl mb-4 drop-shadow-lg">Welcome to Building Bonds Through Books</h2>
    <p class="text-lg mb-8 max-w-2xl drop-shadow-lg">Supporting children and families impacted by incarceration through books</p>
    <BookRequestButton />
    
</div>

<style lang="postcss">
    .hero-banner{
        background-color: rgba(0, 0, 0, 0.5);
        background-blend-mode: darken;
        color: var(--bbtb-background);
    }
</style>