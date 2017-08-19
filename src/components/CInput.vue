<template>
    <div class="search">
        <input
            v-model.trim="searchKey"
            autofocus
            :placeholder="placeholder"
            @blur="onBlur"
            @keyup.up="onUp"
            @keyup.down="onDown"
            @keyup.enter.prevent="onSelectItem()"
            @focus="onFocus">
        <button @click.prevent="onSelectItem()">搜索</button>

        <ul class="search-list" v-show="displaySearchList" v-if="autoComplete">
            <li
                v-for="(item, index) in filtered"
                :key="index"
                @click="onSelectItem(index)"
                :class="{selected: selectedIndex === index}">
                <span v-html="kPoint(item.title)"></span>
                <span v-show="item.desc">- {{item.desc}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    props: {
        command: {
            type: Array,
            default: []
        },
        defaultValue: {
            type: String,
            default: '',
        },
        autoComplete : {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: 'Linux 命令搜索'
        },
        noResultHint: {
            type: String,
            default: '请尝试输入一些字符，进行搜索！'
        }
    },
    data() {
        return {
            searchKey: '',
            filtered: [],
            displaySearchList: false,
            selectedIndex: -1
        }
    },
    mounted() {
        this.searchKey = this.defaultValue;

        Vue.nextTick(() => {
            this.displaySearchList = false;
        })
    },
    methods: {
        onBlur() {
            setTimeout(() => {
                this.displaySearchList = false;
            }, 300)
        },
        onFocus() {
            if (this.searchKey) {
                this.displaySearchList = true;
            }
        },
        onDown() {
            if (this.selectedIndex < this.filtered.length - 1) {
                this.selectedIndex++
            } else {
                this.selectedIndex = -1;
            }
        },
        onUp() {
            if (this.selectedIndex === -1) {
                this.selectedIndex = this.filtered.length - 1
            } else {
                this.selectedIndex--;
            }
        },
        onSelectItem(index) {
            index = typeof index === 'undefined' ? this.selectedIndex : index;
            const selected = this.filtered[index];
            const command = selected ? selected.title : this.searchKey;

            if (command === this.noResultHint) {
                return
            }

            this.searchKey = command;

            Vue.nextTick(() => {
                this.displaySearchList = false;
            })

            this.$emit('selected', { command })
        },
        kPoint(val) {
            val = val || '';

            if (val === this.noResultHint) {
                return val;
            }

            const rest = val.substr(this.searchKey.length);
            return `<span style="color:#f00;">${this.searchKey}</span>${rest}`;
        },
    },
    watch: {
        searchKey: function(value) {
            this.$emit('changed', { value });

            if (!this.autoComplete) {
                return
            }

            this.selectedIndex = -1;

            if (!value) {
                this.displaySearchList = false;
                this.filtered = []
                return;
            }

            this.displaySearchList = true;
            this.filtered = this.command.filter(c => c.title.indexOf(value) === 0);
            if (!this.filtered || this.filtered.length === 0) {
                this.filtered = [{ title: this.noResultHint }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.search {
    text-align: center;
    max-width: 550px;
    position: relative;
    margin: 0 auto;
    display: flex;
    color: #333;
    height: 38px;
    font-size: 14px;

    input, button {
        -webkit-appearance: none;
        outline: none;
        border: 1px solid #e5e5e5;
        background: #fff;
    }
    input {
        flex-grow: 1;
        padding: 10px;
        border-radius: 5px 0 0 5px;

        &:hover, &:focus, &:active {
            border-color: #488fcd;
        }
    }

    button {
        padding: 0 14px;
        border-radius: 0 5px 5px 0;
        border-left: none;
        font-weight: bold;

        &:hover {
            background: #eee;
        }
    }

    .search-list {
        font-size: 12px;
        text-align: left;
        position: absolute;
        list-style-type: none;
        background: #fff;
        padding: 0;
        width: 100%;
        left: 0;
        top: 40px;
        max-height: 200px;
        overflow: auto;
        border: 1px solid #e5e5e5;
        border-radius: 5px;

        li {
            padding: 10px;
            margin: 4px;
            &:hover, &.selected {
                background: #eee;
            }
        }
        &:empty {
            display: none;
        }
    }
}
</style>


