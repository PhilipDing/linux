<template>
    <ul class="search-result">
        <li v-for="(item, index) in filtered" :key="index">
            <router-link :to="item.title">
                <strong v-html="kPoint(item.title)"></strong> - {{item.desc}}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['command', 'searchKey'],
    data() {
        return {
            filtered: []
        }
    },
    methods: {
        kPoint(val) {
            return val.replace(this.searchKey, '<span style="color:#f00;">' + this.searchKey + '</span>');
        }
    },
    watch: {
        searchKey(val) {
            this.filtered = this.command.filter(c => c.title.indexOf(val) > -1);
        }
    }
}
</script>

<style lang="less">
.search-result {
    list-style-type: none;
    font-size: 16px;
    padding: 0;

    a {
        text-decoration: none;
    }

    li {
        padding: 10px 0;
    }
}
</style>


