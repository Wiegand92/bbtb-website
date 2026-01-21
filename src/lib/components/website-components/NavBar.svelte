<script lang="ts">
    import NavMenu from "./NavMenu.svelte";
    import websiteLogo from '$lib/assets/images/websiteLogo.svg';
</script>

<div class="flex flex-col w-full items-center justify-center p-0 shadow-md bg-(--bbtb-secondary-background)">
    <img src={websiteLogo} class="p-8" alt="Website Logo" width="200px" />
    <span class="mb-4 w-full flex flex-col items-center justify-center">
        <h1 class="text-center text-6xl text-(--bbtb-foreground)">Building Bonds Through Books</h1>
        <sub class="text-center text-lg italic p-1 text-(--bbtb-foreground)">Bonding Beyond Sentencing: Uniting Families Through Books</sub>
    </span>
    <NavMenu />
</div>