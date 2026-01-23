<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import {resolve} from '$app/paths';
  // Common styling for consistency between links and triggers
  const navItemStyle = "text-lg bg-(none) p-2 mx-2";
  const menuItemStyle = "text-(--bbtb-foreground)"
  const menuStyle = "flex flex-col justify-center top-10 bg-(--bbtb-background) p-4 shadow-lg rounded-md z-10";
  const mobileMenuStyle = "bg-(--bbtb-background) p-4 shadow-lg rounded-md";
</script>

<NavigationMenu.Root>
  <!-- Desktop Horizontal View -->
  <NavigationMenu.List class=" w-full hidden lg:flex justify-center bg-(--bbtb-foreground) text-(--bbtb-background)">
    
    <!-- Home (Direct Link) -->
    <NavigationMenu.Item>
      <NavigationMenu.Link href={resolve("/")} class={navItemStyle}>
        Home
      </NavigationMenu.Link>
    </NavigationMenu.Item>

    <!-- About (Trigger) -->
    <NavigationMenu.Item>
      <NavigationMenu.Trigger class={navItemStyle}>
        About
      </NavigationMenu.Trigger>
      <NavigationMenu.Content class={menuStyle}>
        <NavigationMenu.Link href={resolve("/about/mission")} class={menuItemStyle}>Mission</NavigationMenu.Link>
        <NavigationMenu.Link href={resolve("/about/team")} class={menuItemStyle}>Team</NavigationMenu.Link>
      </NavigationMenu.Content>
    </NavigationMenu.Item>

    <!-- Books (Trigger) -->
    <NavigationMenu.Item>
      <NavigationMenu.Trigger class={navItemStyle}>
        Request Books
      </NavigationMenu.Trigger>
      <NavigationMenu.Content class={menuStyle}>
        <NavigationMenu.Link href="https://docs.google.com/forms/d/e/1FAIpQLSex7ofV5lnFsOv8iaiE3gnFHlf3VlCpBAWfHtzSpVJ35lUb3g/viewform?usp=header" target="_blank" class={menuItemStyle}>Request Books</NavigationMenu.Link>
        <NavigationMenu.Link href={resolve("/about/books")} class={menuItemStyle}>Our Books</NavigationMenu.Link>
        <!-- <NavigationMenu.Link href={resolve("/about/books")} class={menuItemStyle}>FAQ</NavigationMenu.Link> -->
      </NavigationMenu.Content>
    </NavigationMenu.Item>

    <!-- Resources (Trigger) -->
    <NavigationMenu.Item >
      <NavigationMenu.Trigger class={navItemStyle}>
        Resources
      </NavigationMenu.Trigger>
      <NavigationMenu.Content class={menuStyle}>
        <NavigationMenu.Link href={resolve("/resources/how-to")} class={menuItemStyle}>How to Guides</NavigationMenu.Link>
        <NavigationMenu.Link href={resolve("/resources/state-coip")} class={menuItemStyle}>State Resources for Children</NavigationMenu.Link>
        <NavigationMenu.Link href={resolve("/resources/national-coip")} class={menuItemStyle}>National Resources for Children</NavigationMenu.Link>
      </NavigationMenu.Content>
    </NavigationMenu.Item>

    <!-- Contact Us (Direct Link) -->
    <NavigationMenu.Item>
      <NavigationMenu.Link href={resolve("/contact")} class={navItemStyle}>
        Contact Us
      </NavigationMenu.Link>
    </NavigationMenu.Item>

    
<!-- Donate (Trigger) -->
    <NavigationMenu.Item>
      <NavigationMenu.Trigger class={navItemStyle}>
        Donate
      </NavigationMenu.Trigger>
      <NavigationMenu.Content class={menuStyle}>
        <NavigationMenu.Link href="https://secure.givelively.org/donate/building-bonds-through-books" target="_blank" class={menuItemStyle}>Donate Online</NavigationMenu.Link>
        <NavigationMenu.Link href={resolve("/amazon-wishlist")} class={menuItemStyle}>Amazon Wishlist</NavigationMenu.Link>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>

  <!-- Mobile Drawer View -->
  <Drawer.Root>
    <Drawer.Trigger class="lg:hidden w-full h-10 bg-(--bbtb-foreground) text-(--bbtb-background)">Menu</Drawer.Trigger>
    <Drawer.Content class='bg-(--bbtb-foreground) text-(--bbtb-background)'>
      <Drawer.Header>
        <Drawer.Title class='text-center text-lg underline text-(--bbtb-background)'>Navigation</Drawer.Title>
      </Drawer.Header>
      <NavigationMenu.List class=" w-full flex-col items-start bg-(--bbtb-foreground) text-(--bbtb-background)">
    
    <!-- Home (Direct Link) -->
        <NavigationMenu.Item>
          <NavigationMenu.Link href={resolve("/")} class={navItemStyle}>
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <!-- About (Trigger) -->
        <NavigationMenu.Item class="flex">
          <NavigationMenu.Trigger class={navItemStyle}>
            About
          </NavigationMenu.Trigger>
          <NavigationMenu.Content class={mobileMenuStyle}>
            <NavigationMenu.Link href={resolve("/about/mission")} class={menuItemStyle}>Mission</NavigationMenu.Link>
            <NavigationMenu.Link href={resolve("/about/team")} class={menuItemStyle}>Team</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <!-- Books (Trigger) -->
        <NavigationMenu.Item class="flex">
          <NavigationMenu.Trigger class={navItemStyle + " min-w-fit"}>
            Request Books
          </NavigationMenu.Trigger>
          <NavigationMenu.Content class={mobileMenuStyle}>
            <NavigationMenu.Link href="https://docs.google.com/forms/d/e/1FAIpQLSex7ofV5lnFsOv8iaiE3gnFHlf3VlCpBAWfHtzSpVJ35lUb3g/viewform?usp=header" target="_blank" class={menuItemStyle}>Request Books</NavigationMenu.Link>
            <NavigationMenu.Link href={resolve("/about/books")} class={menuItemStyle}>Our Books</NavigationMenu.Link>
            <!-- <NavigationMenu.Link href={resolve("/about/books")} class={menuItemStyle}>FAQ</NavigationMenu.Link> -->
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <!-- Resources (Trigger) -->
        <NavigationMenu.Item class="flex">
          <NavigationMenu.Trigger class={navItemStyle}>
            Resources
          </NavigationMenu.Trigger>
          <NavigationMenu.Content class={mobileMenuStyle}>
            <NavigationMenu.Link href={resolve("/resources/how-to")} class={menuItemStyle}>How to Guides</NavigationMenu.Link>
            <NavigationMenu.Link href={resolve("/resources/state-coip")} class={menuItemStyle}>State Resources for Children</NavigationMenu.Link>
            <NavigationMenu.Link href={resolve("/resources/national-coip")} class={menuItemStyle}>National Resources for Children</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <!-- Contact Us (Direct Link) -->
        <NavigationMenu.Item>
          <NavigationMenu.Link href={resolve("/contact")} class={navItemStyle}>
            Contact Us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        
    <!-- Donate (Trigger) -->
        <NavigationMenu.Item class="flex">
          <NavigationMenu.Trigger class={navItemStyle + ''}>
            Donate
          </NavigationMenu.Trigger>
          <NavigationMenu.Content class={mobileMenuStyle}>
            <NavigationMenu.Link href="https://secure.givelively.org/donate/building-bonds-through-books" target="_blank" class={menuItemStyle}>Donate Online</NavigationMenu.Link>
            <NavigationMenu.Link href={resolve("/amazon-wishlist")} class={menuItemStyle}>Amazon Wishlist</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <Drawer.Footer>
        <Drawer.Close>Cancel</Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>
</NavigationMenu.Root>
<style lang="postcss">
  /* Add any additional styling for the NavMenu here */
</style>


