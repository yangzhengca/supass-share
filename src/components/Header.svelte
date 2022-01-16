<script>
    export let imageSrc
</script>

<header>
    <img src={imageSrc} alt="Logo" />
</header>

<style>
    header {
        height: 5%;
        width: 100%;
        background-color: #30353e;
    }
    header img {
        height: 100%;
        margin-left: 20px;
    }
</style>