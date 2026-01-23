<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/images/websiteLogo.svg';
	import NavBar from '$lib/components/website-components/NavBar.svelte';
	import Footer from '$lib/components/website-components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<NavBar />
{@render children()}

<Footer />
