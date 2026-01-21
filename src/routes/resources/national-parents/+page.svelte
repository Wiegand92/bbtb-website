<script lang="ts">
    import communicate from "$lib/assets/images/resources/how-to-guides/How to Communicate with an Incarcerated Loved One Virtually.pdf"
    import jpay from "$lib/assets/images/resources/how-to-guides/How to JPay.pdf"
    import visit from "$lib/assets/images/resources/how-to-guides/How to Visit an Incarcerated Loved One.pdf"
    import letter from "$lib/assets/images/resources/how-to-guides/How to Write a Letter.pdf"
    import reading from "$lib/assets/images/resources/how-to-guides/Reading Guide.pdf"

    import ResourceDisplay from "$lib/components/website-components/ResourceDisplay.svelte";

    const resources = [
        { title: "How to Communicate with an Incarcerated Loved One Virtually", file: communicate },
        { title: "How to JPay", file: jpay },
        { title: "How to Visit an Incarcerated Loved One", file: visit },
        { title: "How to Write a Letter", file: letter },
        { title: "Reading Guide", file: reading }
    ];
</script>
<h1 class="text-4xl font-bold text-(--bbtb-foreground) my-8 text-center">How-To Guides for Supporting Incarcerated Loved Ones</h1>
<ResourceDisplay {resources} />