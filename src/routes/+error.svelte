<script>
    import {page} from '$app/state';
    import logo from '$lib/assets/images/websiteLogo.svg';
</script>

<h1 class="text-3xl text-(--bbtb-foreground) font-bold my-4 text-center">Error { page?.error?.message }</h1>
<img src={logo} alt="Building Bonds Through Books Logo" class="mx-auto my-4 w-20 h-20"/>
<p class="text-(--bbtb-foreground) text-center mx-4 mb-8">Sorry, an unexpected error has occurred. Please try refreshing the page or return to the <a href='/' class='underline hover:text-(--bbtb-pink)'>homepage</a>.</p>