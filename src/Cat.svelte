<script>
    export let src;
    export let name;
    export let desc;
</script>

<div class="card text-center" style="width: 22rem;">
    <div class="card-header">
        Cat
    </div>
    <img src={src} class="card-img-top" alt="Cat {name}">
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{desc}</p>
    </div>
</div>