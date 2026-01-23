<script lang="ts">
    import ResourceDisplay from "$lib/components/website-components/ResourceDisplay.svelte";
    import { asset } from '$app/paths';


    const resources = [
        { title: "Georgia State Resources", file: asset('/state-coip/Georgia State Resources.docx') },
        { title: "Illinois State Resources", file: asset('/state-coip/Illinois State Resources.docx') },
        { title: "Kansas State Resources", file: asset('/state-coip/Kansas Resources.docx') },
        { title: "Louisiana State Resources", file: asset('/state-coip/Louisiana State Resources.docx') },
        { title: "Maryland State Resources", file: asset('/state-coip/Maryland State Resources.docx') },
        { title: "Michigan State Resources", file: asset('/state-coip/Michigan State Resources.docx') },
        { title: "Missouri State Resources", file: asset('/state-coip/Missouri State Resources.docx') },
        { title: "North Carolina State Resources", file: asset('/state-coip/North Carolina State Resources.docx') },
        { title: "Ohio State Resources", file: asset('/state-coip/Ohio State Resources.docx') },
        { title: "Rhode Island State Resources", file: asset('/state-coip/Rhode Island State Resources.docx') },
        { title: "Southcentral Alaska State Resources", file: asset('/state-coip/Southcentral Alaska State Resources.docx') },
        { title: "Virginia State Resources", file: asset('/state-coip/Virginia State Resources.docx') }
    ];
    
</script>
<h1 class="text-4xl font-bold text-(--bbtb-foreground) my-8 text-center">State Resources for Children of Incarcerated Parents</h1>
<ResourceDisplay {resources} pdf={false}/>