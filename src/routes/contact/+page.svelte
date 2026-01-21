<script>
    import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import facebookIcon from "$lib/assets/images/icons/facebook-1.webp";
    import instagramIcon from "$lib/assets/images/icons/instagram-1.webp";
    import BookRequestButton from "$lib/components/website-components/BookRequestButton.svelte";

    const subHeaderStyle = "text-2xl font-semibold text-(--bbtb-foreground) text-center mb-4";
    const buttonStyle = "bg-(--bbtb-foreground) mt-4 text-(--bbtb-background) w-1/3 place-self-center text-lg p-4 rounded-lg hover:bg-(--bbtb-pink) hover:text-(--bbtb-foreground) transition-colors duration-300 ease-in-out";
    const paraStyle = "text-xl mb-4 font-bold text-(--bbtb-foreground)";
</script>
<h1 class="text-3xl text-(--bbtb-foreground) font-bold my-4 text-center">Contact Us</h1>
<div class='w-full flex justify-center items-center'><BookRequestButton /></div>
<div class="flex flex-col lg:flex-row">
    <div class="contactInfo basis-1/2 p-4">
        <h3 class={subHeaderStyle} >Get in Touch</h3>
        <div class="flex gap-8 mb-8 place-self-center">
            <a href="https://www.instagram.com/buildingbondsthroughbooks/"><img src={instagramIcon} alt="Instagram"></a>
            <a href="https://www.facebook.com/buildingbondsthroughbooks"><img src={facebookIcon} alt="Facebook"></a>
        </div>
        <p class={paraStyle}>Building Bonds Through Books</p>
        <p class={paraStyle}>PO Box 2782</p>
        <p class={paraStyle}>Arlington, Virginia 22202</p>
        <p class={paraStyle}>buildingbondsthroughbooks@gmail.com</p>
    </div>
    <form action="mailto:buildingbondsthroughbooks@gmail.com" method="post" enctype="text/plain" class="contactForm basis-1/2 p-4 flex flex-col">
        <h3 class={subHeaderStyle}>Send us a message</h3>
        Your Name:<br>
        <Input type="text" name="name" required /><br>
        E-mail:<br>
        <Input type="email" name="email" required/><br>
        Comment:<br>
        <Textarea name="comment" class='min-h-40' placeholder="Your message here..." required />
        <Button type="submit" class={buttonStyle}>Submit</Button>
        <Button type="reset" class={buttonStyle}>Reset</Button>
    </form>
</div>
<style>
    .social{
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
</style>