<template>
    <div class="c-detail">
        <h1>{{command}}</h1>
        <div v-html="content"></div>
    </div>
</template>

<script>

export default {
    props: ['command'],
    data() {
        return {
            content: ''
        }
    },
    methods: {
        loadContent() {
            const temp = this.command.replace('/', '_');
            this.content = require('../../command/' + temp + '.md')
        }
    },
    mounted() {
        this.loadContent();
    },
    watch: {
        command() {
            this.loadContent()
        }
    }
}
</script>

<style lang="less">
.c-detail {
    font-size: 14px;
    line-height: 1.4;

    h1 {
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;
    }

    pre {
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f7f7f9;
        border-radius: 3px;

        code {
            padding: 0.7em;
            overflow: auto;
            max-height: 35em;
            display: block;
            font: 12px "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
        }
    }
}
</style>


