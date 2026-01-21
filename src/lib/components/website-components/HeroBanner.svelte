<script lang="ts">
    import envelopeBackground from '$lib/assets/images/evelopeBackground.jpg';
    import BookRequestButton from './BookRequestButton.svelte';
	import { onDestroy, onMount } from 'svelte';
    // onMount(() => {
    //     // Initialize Give Lively widget
    //     const gl=document.createElement('script');
    //     gl.src='https://secure.givelively.org/widgets/simple_donation/building-bonds-through-books.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=10&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100';
    //     document.getElementsByTagName('head')[0].appendChild(gl);
    // });
    onDestroy(() => {
        // Remove Givelively widget
        //@ts-ignore
        // document.getElementById('gl-widget-modal').remove();
    });
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