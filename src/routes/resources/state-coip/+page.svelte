<script lang="ts">
    import ResourceDisplay from "$lib/components/website-components/ResourceDisplay.svelte";

    const resources = [
        { title: "Georgia State Resources", file: '/state-coip/Georgia State Resources.docx' },
        { title: "Illinois State Resources", file: '/state-coip/Illinois State Resources.docx' },
        { title: "Kansas State Resources", file: '/state-coip/Kansas State Resources.docx' },
        { title: "Louisiana State Resources", file: '/state-coip/Louisiana State Resources.docx' },
        { title: "Maryland State Resources", file: '/state-coip/Maryland State Resources.docx' },
        { title: "Michigan State Resources", file: '/state-coip/Michigan State Resources.docx' },
        { title: "Missouri State Resources", file: '/state-coip/Missouri State Resources.docx' },
        { title: "North Carolina State Resources", file: '/state-coip/North Carolina State Resources.docx' },
        { title: "Ohio State Resources", file: '/state-coip/Ohio State Resources.docx' },
        { title: "Rhode Island State Resources", file: '/state-coip/Rhode Island State Resources.docx' },
        { title: "Southcentral Alaska State Resources", file: '/state-coip/Southcentral Alaska State Resources.docx' },
        { title: "Virginia State Resources", file: '/state-coip/Virginia State Resources.docx' }
    ];
</script>
<h1 class="text-4xl font-bold text-(--bbtb-foreground) my-8 text-center">How-To Guides for Supporting Incarcerated Loved Ones</h1>
<ResourceDisplay {resources} pdf={false}/>