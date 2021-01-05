<script>
    import Cat from './Cat.svelte';
	export let cats;
	export let flag;
</script>

<main>
    <center> <h1>Hello, see my cats!</h1> </center><br>
    <div class="container">
        {#each cats as cat_group}
            <div class="row">
                {#each cat_group as cat}
                    <div class="col-sm-6">
                        <Cat {...cat} />
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <center> <h1> Our activities: </h1> </center>
    <div class="container">
        <div class="row">
            {#each flag as f}
                <div class="col-sm-1">
                    {#if f < 0}
                        <p class="text-danger">negative</p>
                        {:else}
                        <p class="text-success">positive</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
    <footer class="cats-footer">
        <center>
            <p>Cats page. &copy; 2020 - Nrtj Ctf </p>
        </center>
    </footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
    .cats-footer {
        padding: 2.5rem 0;
        color: #727272;
        text-align: center;
        background-color: #696969;
        border-top: .05rem solid #e5e5e5;
    }
</style>