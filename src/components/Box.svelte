<div class="box">
    <div class="red">
        <slot name="div1" />
    </div>
    <div class="blue">
        <slot name="div2" />
    </div>
</div>

<style>
    .box {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        padding: 1em;
        margin: 0 0 1em 0;
    }
    .red {
        background-color: #f00;
    }
    .blue {
        background-color: #00f;
    }
</style>