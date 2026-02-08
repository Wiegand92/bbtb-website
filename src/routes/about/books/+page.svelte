<script lang='ts'>
    import kofi from "$lib/assets/images/books/kofis mom.jpg"
    import rocko from "$lib/assets/images/books/rockos guitar.jpg"
    import visiting from "$lib/assets/images/books/visiting day.jpg"
    import ruby from "$lib/assets/images/books/ruby on the outside.jpg"
    import cuando from "$lib/assets/images/books/you werent with me.jpg"
    const bbtbBooks = [
        {
            title: "Kofi’s Mom", 
            author:"Richard Dyches", 
            gradeLevel:"Pre-K-Kindergarten", 
            description: "Kofi's Mom is a story about Kofi whose mother is sent to prison. It explores his feelings of loss and confusion. Through friends at school Kofi begins to talk about his mom and to look forward to her return.", 
            photo: kofi},
        {
            title: "Rocko's Guitar", 
            author:"Dr. Geoffrey Johnson", 
            gradeLevel:"Pre-K-2", 
            description: "Rocko's Guitar is a story about a young male who adores his dad, a budding musician. Rocko's bond with his father is strengthened when his dad gives him a cherished guitar for his birthday. Their relationship must withstand an unexpected separation due to Dad's incarceration.", 
            photo: rocko
        },
        {
            title: "Visiting Day", 
            author:"Jacqueline Woodson", 
            gradeLevel:"K-3", 
            description: "A young girl and her grandmother prepare for a very special day--the one day a month they get to visit the girl's father in prison. As the little girl and her grandmother get ready, her father, who adores her, is getting ready, too, and readers get to join the community of families who make the trip together.", 
            photo: visiting
        },
        {
            title: "Ruby on the Outside", 
            author:"Nora Raleigh Baskin", 
            gradeLevel:"4+", 
            description: "Eleven-year-old Ruby Danes is about to start middle school, and only her aunt knows her deepest, darkest, secret: her mother is in prison. Then Margalit Tipps moves into Ruby’s condo complex, and the two immediately hit it off. Ruby thinks she’s found her first true-blue friend—but can she tell Margalit the truth about her mom? Maybe not. Because it turns out that Margalit’s family history seems closely connected to the very event that put her mother in prison, and if Ruby comes clean, she could lose everything she cares about most.", 
            photo: ruby
        },
        {
            title: "Cuando No Estabas Conmigo/You Weren't with Me", 
            author:"Chandra Ghosh Ippen", 
            gradeLevel:"Pre-K-6", 
            description: "Little Rabbit and Big Rabbit are together again after a difficult separation, but Little Rabbit is not ready to cuddle up and receive Big Rabbit’s love. Little Rabbit needs Big Rabbit to understand what it felt like when they were apart. \“Sometimes I am very mad. I don’t understand why you weren’t with me,\” says Little Rabbit, \“I worry you will go away again.\” Big Rabbit listens carefully and helps Little Rabbit to feel understood and loved. This book does not mention incarceration.", 
            spanishDescription: "Esta historia fue diseñada para ayudar a padres e hijos a hablar sobre separaciones difíciles y ayudarlos a reconectarse y encontrarse uno al otro en el proceso. Este libro no menciona el encarcelamiento.",
            photo: cuando
        }
    ]
</script>
{#each bbtbBooks as book, i}
    <div class='w-3/4 mx-auto my-8 p-4 bg-(--bbtb-accent) rounded-lg shadow-md shadow-black'>
        <div class={(i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse') + ' flex flex-col items-center lg:justify-around'}>
            <img src={book.photo} alt={book.title} class=" h-64 lg:h-80 shadow-sm shadow-black rounded-lg mb-2 lg:mb-0" />
            <div class="lg:w-lg">
                <h2 class='text-2xl font-bold mb-2'>{book.title}</h2>
                <p class='italic mb-1'>by {book.author}</p>
                <p class='mb-1 text-sm underline'>Grade Level: {book.gradeLevel}</p>
                <p>{book.description}</p>
                {#if book.spanishDescription}
                    <p class='mt-2 italic'>{book.spanishDescription}</p>
                {/if}
            </div>    
        </div>
    </div>
{/each}
        <!-- <img class='my-8' src={books} alt="The books available through Building Bonds Through Books"/> -->