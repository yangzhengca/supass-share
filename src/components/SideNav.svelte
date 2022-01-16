<script>
    import {downloadCodeFromEditor} from "../services/codeeditor.service"
    const downloadCode = () => {
        downloadCodeFromEditor("code.text")
    }
</script>


<div class="side-bar">
    <i on:click={downloadCode} class="fas fa-download icons" title="Download Code"></i>
    <i on:click={()=>window.location.href="/"} class="fas fa-plus icons" title="New Room"></i>
</div>

<style>
    .side-bar {
        display: flex;
        flex-direction: column;
        background-color: #30353e;
    }

    .icons {
        font-size: 20px;
        padding: 10px;
        color: #b3b5b8;
        border-bottom: 1px solid #000;
    }
    .icons:hover {
        cursor: pointer;
    }
</style>