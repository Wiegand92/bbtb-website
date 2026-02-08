<script lang="ts">
    import {asset} from "$app/paths";

    import ResourceDisplay from "$lib/components/website-components/ResourceDisplay.svelte";

    const resources = [
        { title: "How to Communicate with an Incarcerated Loved One Virtually", file: asset("/how-to-guides/How to Communicate with an Incarcerated Loved One Virtually.pdf") },
        { title: "How to JPay", file: asset("/how-to-guides/How to JPay.pdf") },
        { title: "How to Visit an Incarcerated Loved One", file: asset("/how-to-guides/How to Visit an Incarcerated Loved One.pdf") },
        { title: "How to Write a Letter", file: asset("/how-to-guides/How to Write a Letter.pdf") },
        { title: "Reading Guide", file: asset("/how-to-guides/Reading Guide.pdf") }
    ];
</script>
<h1 class="text-4xl font-bold text-(--bbtb-foreground) my-8 text-center">How-To Guides for Supporting Incarcerated Loved Ones</h1>
<ResourceDisplay {resources} pdf={true} />