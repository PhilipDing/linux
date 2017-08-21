<template>
    <ul class="c-list">
        <li v-for="(item, index) in filtered" :key="index">
            <router-link :to="{ name: 'detail', params: { command: item.title }}">
                <strong v-html="kPoint(item.title)"></strong> - {{item.desc}}
            </router-link>
        </li>

        <li class="hint" v-show="!filtered || !filtered.length">请尝试输入一些字符，进行搜索！</li>
    </ul>
</template>

<script>
export default {
    props: {
        command: {
            default: []
        },
        searchKey: {
            default: ''
        }
    },
    data() {
        return {
            filtered: []
        }
    },
    methods: {
        kPoint(val) {
            return val.replace((this.searchKey || '').toLowerCase(), '<span style="color:#f00;">' + (this.searchKey || '').toLowerCase() + '</span>');
        }
    },
    watch: {
        searchKey(val) {
            this.filtered = this.command.filter(c => c.title.indexOf((val || '').toLowerCase()) > -1);
        }
    }
}
</script>

<style lang="less" scoped>
.c-list {
    list-style-type: none;
    font-size: 16px;
    padding: 0;
    color: #333;

    .hint {
        font-size: 14px;
    }

    li {
        padding: 10px 0;
    }
}
</style>


