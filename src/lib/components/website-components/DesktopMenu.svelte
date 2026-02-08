<script>
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import { navigationLinks } from "$lib/helpers/navigation";
    // Common styling for consistency between links and triggers
    const desktopNavItemStyle = "text-lg bg-(none) h-10 mx-2";
    const menuItemStyle = "text-(--bbtb-foreground)"
    const menuStyle = "flex flex-col justify-center top-11 left-2 bg-(--bbtb-background) p-4 shadow-lg rounded-md z-10";

</script>

<NavigationMenu.List class="w-full hidden lg:flex h-14 justify-center bg-(--bbtb-foreground) text-(--bbtb-background)"> 
{#each navigationLinks as link}
    <NavigationMenu.Item>
      {#if link.submenu}
        <NavigationMenu.Trigger class={desktopNavItemStyle}>
          {link.title}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class={menuStyle}>
          {#each link.submenu as sublink}
            <NavigationMenu.Link href={sublink.href} class={menuItemStyle} target={sublink.external ? "_blank" : "_self"}>
              {sublink.title}
            </NavigationMenu.Link>
          {/each}
        </NavigationMenu.Content>
      {:else}
        <NavigationMenu.Link href={link.href} class={desktopNavItemStyle} target={link.external ? "_blank" : "_self"}>
          {link.title}
        </NavigationMenu.Link>
      {/if}
    </NavigationMenu.Item>
{/each}
</NavigationMenu.List>
