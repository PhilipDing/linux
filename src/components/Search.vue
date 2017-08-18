<template>
    <div class="container">

        <h1 class="logo">
            <img src="../assets/logo.svg">
        </h1>

        <form class="search">
            <input
                v-model.trim="searchKey"
                placeholder="Linux 命令搜索"
                @blur="onBlur"
                @keyup.up="onKeyup"
                @keyup.down="onKeydown"
                @keyup.enter="onEnter"
                @focus="onFocus">
            <button @click="onEnter">搜索</button>

            <ul class="search-list" v-if="displaySearchList">
                <li
                    v-for="(item, index) in filtered"
                    :key="index"
                    :class="{selected: selectedIndex === index}">
                    <span v-html="kPoint(item.title)"></span>
                    <span v-show="item.desc">- {{item.desc}}</span>
                </li>
            </ul>
        </form>

        <div class="box">
            <div class="category" v-for="(cat, index) in category" :key="index">
                <div class="title">{{cat.title}}</div>
                <a v-for="(sub, index) in cat.category"
                   class="subcategory"
                   :href="categoryUrl(cat.title, sub.title)"
                   :key="index">
                    {{sub.title}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import category from '../../command/category'
import command from '../../command/command'

const errorMsg = '请尝试输入一些字符，进行搜索！';

export default {
    data() {
        return {
            searchKey: '',
            category,
            command,
            filtered: [],
            displaySearchList: false,
            selectedIndex: -1
        }
    },
    methods: {
        onBlur() {
            this.displaySearchList = false;
        },
        onFocus() {
            if (this.searchKey) {
                this.displaySearchList = true;
            }
        },
        onKeydown(e) {
            if (this.selectedIndex < this.filtered.length - 1) {
                this.selectedIndex++
            } else {
                this.selectedIndex = -1;
            }
        },
        onKeyup(e) {
            if (this.selectedIndex === -1) {
                this.selectedIndex = this.filtered.length - 1
            } else {
                this.selectedIndex--;
            }
        },
        onEnter(e) {
            e.preventDefault();
            console.log(e)
        },
        kPoint(val) {
            val = val || '';

            if (val === errorMsg) {
                return val;
            }

            const rest = val.substr(this.searchKey.length);
            return `<span style="color:#f00;">${this.searchKey}</span>${rest}`;
        },
        categoryUrl(catTitle, subTitle) {
            return catTitle + '/' + subTitle;
        }
    },
    watch: {
        searchKey: function(val) {
            this.selectedIndex = -1;

            if (!val) {
                this.displaySearchList = false;
                this.filtered = []
                return;
            }

            this.displaySearchList = true;
            this.filtered = this.command.filter(c => c.title.indexOf(val) === 0);
            if (!this.filtered || this.filtered.length === 0) {
                this.filtered = [{ title: errorMsg }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 14px;
    padding: 0 10px;

    .logo {
        text-align: center;
        padding: 50px;
        margin: 0;
    }

    .search {
        width: 100%;
        text-align: center;
        max-width: 550px;
        position: relative;
        margin: 0 auto;
        display: flex;
        color: #333;

        input {
            -webkit-appearance: none;
            outline: none;
            border: 1px solid #e5e5e5;
            height: 40px;
            flex: 1;
            padding: 10px;
            border-radius: 5px 0 0 5px;

            &:focus, &:active {
                border-color: #488fcd;
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
            margin-top: 40px;
            max-height: 500px;
            overflow: auto;
            border: 1px solid #e5e5e5;
            border-radius: 5px;

            li {
                padding: 10px;
                margin: 4px;
                &:hover {
                    background: #eee;
                }
            }
        }

        button {
            -webkit-appearance: none;
            outline: none;
            border: 1px solid #d5d5d5;
            height: 40px;
            background: #fff;
            padding: 0 20px;
            border-radius: 0 10px 10px 0;
            border-left: none;

            &:hover {
                background: #eee;
            }
        }

        .selected {
            background: #eee;
        }
    }

    .box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 100px;
        line-height: 35px;

        .category {
            margin: 10px;
        }

        .title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #000;
        }
        .subcategory {
            display: block;
        }
        a {
            text-decoration: none;
        }
    }

    @media (max-width: 767px) {
        .box {
            display: none;
        }
    }
}
</style>
