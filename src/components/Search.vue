<template>
    <div class="container">

        <a class="logo" href="/">
            <img src="../assets/logo.svg">
        </a>

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

            <ul class="search-list" v-show="displaySearchList">
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
                <input name="category" type="radio" :checked="index === 0" class="title" :id="index" :value="cat.title">
                <label class="title" :for="index">{{cat.title}}</label>
                <div class="subcategory">
                    <a v-for="(sub, index) in cat.category"
                    class="subcategory-link"
                    :href="categoryUrl(cat.title, sub.title)"
                    :key="index">
                        {{sub.title}}
                    </a>
                </div>
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
            selectedIndex: -1,
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
        display: block;
        text-align: center;
        padding: 50px;
    }

    .search {
        text-align: center;
        max-width: 550px;
        position: relative;
        margin: 0 auto;
        display: flex;
        color: #333;
        height: 38px;

        input, button {
            -webkit-appearance: none;
            outline: none;
            border: 1px solid #e5e5e5;
            background: #fff;
        }
        input {
            flex: 1;
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
            max-height: 500px;
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

        input.title {
            display: none;
        }
        label.title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #000;
        }
        .subcategory-link {
            display: block;
            text-decoration: none;
        }
    }

    @media (max-width: 480px) {
        .box {
            margin-top: 66px !important;
        }
        .category {
            width: 100%;
        }
        label.title {
            display: block;
            border: 1px solid #e5e5e5;
            padding-left: 10px;
            cursor: pointer;
            &:before {
                content: '☞';
                margin-right: 5px;
            }
        }
        input.title:checked~.subcategory{
            display: block;
        }
        .subcategory {
            padding-left: 10px;
            display: none;
        }
    }
}
</style>
