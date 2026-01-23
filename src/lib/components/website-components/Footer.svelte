<script lang='ts'>
    import instagramIcon from '$lib/assets/images/icons/instagram-1.webp';
    import facebookIcon from '$lib/assets/images/icons/facebook-1.webp';
</script>
<div class="container flex min-w-full p-8 lg:flex-row justify-around flex-col gap-8">
    <div class="content contact">
        <h4>Contact Us</h4>
        <a href="mailto:buildingbondsthroughbooks@gmail.com" class='hover:text-(--bbtb-pink) transition-colors duration-300 ease-in-out'>
            buildingbondsthroughbooks@gmail.com
        </a>
        <p>
            Building Bonds Through Books
            <br/>
            PO Box 2782
            <br/>
            Arlington, VA 22202
        </p>
        
        <div class="flex justify-center gap-4 mt-4">
            <a href="https://www.instagram.com/buildingbondsthroughbooks/"><img src={instagramIcon} alt="Instagram"></a>
            <a href="https://www.facebook.com/buildingbondsthroughbooks"><img src={facebookIcon} alt="Facebook"></a>
        </div>
    </div>

    <div class="content donate">
        <h4>Support Us</h4>
        <div>
        <div id="give-lively-widget" class="gl-simple-donation-widget"></div>
        </div>
    </div>
    
    <div class="content write">
        <h4>About Us</h4>
        <p>
            Building Bonds Through Books is a 501(c)(3) nonprofit organization that aims to reduce the invisibility of children of incarcerated parents and their families by expanding voluntary identification and support. We hope to enhance children’s coping skills and promote understanding about parental incarceration through children’s books and bibliotherapy.
        </p>
    </div>
</div>
<p class="footer-note">2026</p>

<style lang='postcss'>
    h4{
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
    }
    .container{
        background-color: var(--bbtb-secondary-background);
        color: var(--bbtb-foreground);
        border-top: 2px solid var(--bbtb-background);
    }
    .content{
        flex: 1;
        text-align: center;
    }
    .footer-note{
        text-align: center;
        margin-bottom: 1rem;
        color: var(--bbtb-foreground);
        background-color: var(--bbtb-secondary-background);
        margin-bottom: 0;
    }
</style>