<script>
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import { navigationLinks } from "$lib/helpers/navigation";
    // Common styling for consistency between links and triggers
    const navItemStyle = "text-lg bg-(none) mx-2 px-4";
    const menuItemStyle = "text-(--bbtb-foreground)"
    const mobileMenuStyle = "bg-(--bbtb-background) m-2 p-4 shadow-lg rounded-md";
    // State for Drawer (Mobile Menu)
    let open = $state(false)
    function handleOpenChange() {
        open = !open;
    }
</script>

<div class="lg:hidden w-full h-10 bg-(--bbtb-foreground)"></div>
<Drawer.Root bind:open>
    <Drawer.Trigger class="lg:hidden fixed top-4 right-4 rounded-md shadow-sm shadow-black w-10 h-10 bg-(--bbtb-foreground) p-2">
        <div class="h-6 w-6 flex flex-col justify-around">
            <div class="h-1 w-full bg-(--bbtb-background) rounded-sm"></div>
            <div class="h-1 w-full bg-(--bbtb-background) rounded-sm"></div>
            <div class="h-1 w-full bg-(--bbtb-background) rounded-sm"></div>
        </div>
    </Drawer.Trigger>
    <Drawer.Content class='bg-(--bbtb-foreground) text-(--bbtb-background)'>
      <Drawer.Header>
        <Drawer.Title class='text-center text-lg underline text-(--bbtb-background)'>Navigation</Drawer.Title>
      </Drawer.Header>
      <NavigationMenu.List class="w-full flex-col items-start bg-(--bbtb-foreground) text-(--bbtb-background)">
        {#each navigationLinks as link}
          {#if link.submenu}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger class={navItemStyle}>
                {link.title}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content class={mobileMenuStyle}>
                {#each link.submenu as sublink}
                  <NavigationMenu.Link onclick={handleOpenChange} href={sublink.href} class={menuItemStyle} target={sublink.external ? "_blank" : "_self"}>
                    {sublink.title}
                  </NavigationMenu.Link>
                {/each}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          {:else}
            <NavigationMenu.Item>
              <NavigationMenu.Link onclick={handleOpenChange} href={link.href} class={navItemStyle} target={link.external ? "_blank" : "_self"}>
                {link.title}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          {/if}
        {/each}
      </NavigationMenu.List>
      <Drawer.Footer>
        <Drawer.Close>Cancel</Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>