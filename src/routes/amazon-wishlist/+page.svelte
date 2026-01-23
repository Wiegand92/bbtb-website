<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    const buttonStyle = "bg-(--bbtb-foreground) text-(--bbtb-background) text-xl p-6 rounded-lg hover:bg-(--bbtb-pink) hover:text-(--bbtb-foreground) transition-colors duration-300 ease-in-out";
</script>

<div class="min-w-full flex flex-col items-center justify-center p-8">
    <h2 class="text-2xl font-bold mb-4">Amazon Wishlist</h2>
    <p class="mb-4 w-3/4 text-center">
        Building Bonds Through Books also offers an Amazon Wishlist, making it easy for supporters to directly help meet the needs of the children and their incarcerated loved ones we serve. Through this wishlist, individuals can purchase the exact books and supplies requested, ensuring each child receives meaningful, age-appropriate materials that foster connection, literacy, and emotional support. Every item purchased goes straight toward fulfilling a specific request, helping families stay bonded through the shared experience of reading, even when they are separated.
    </p>
    <Button href="https://www.amazon.com/hz/wishlist/ls/2QCF9H42TXDER/ref=hz_ls_biz_ex?" target="_blank" class={buttonStyle}>
        Visit Our Amazon Wishlist
    </Button>
</div>