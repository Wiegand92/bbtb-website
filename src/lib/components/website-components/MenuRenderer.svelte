<script>
    import DesktopMenu from "./DesktopMenu.svelte";
    import MobileMenu from "./MobileMenu.svelte";
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
</script>

<NavigationMenu.Root>
    <DesktopMenu />
    <MobileMenu />
</NavigationMenu.Root>
