<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    const buttonStyle = "bg-(--bbtb-foreground) text-(--bbtb-background) text-xl p-6 rounded-lg hover:bg-(--bbtb-pink) hover:text-(--bbtb-foreground) transition-colors duration-300 ease-in-out";
</script>

<Button href="https://docs.google.com/forms/d/e/1FAIpQLSex7ofV5lnFsOv8iaiE3gnFHlf3VlCpBAWfHtzSpVJ35lUb3g/viewform?usp=header" target="_blank" class={buttonStyle}>Request a Book</Button>