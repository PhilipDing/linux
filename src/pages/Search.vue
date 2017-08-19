<template>
    <div class="container">
        <div class="logo">
            <a href="/">
                <img src="../assets/logo.svg">
            </a>
        </div>

        <form class="search">
            <c-input
                :command="command"
                @selected="onItemSelected">
            </c-input>
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
import CInput from '../components/CInput'
import category from '../../command/category'
import command from '../../command/command'

export default {
    data() {
        return {
            category,
            command
        }
    },
    methods: {
        categoryUrl(catTitle, subTitle) {
            return catTitle + '/' + subTitle;
        },
        onItemSelected({ command }) {
            this.$router.push({ name: 'detail', params: { command } })
        }
    },
    components: {
        CInput
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
        margin: 50px;
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
            margin-left: 0 !important;
            margin-right: 0 !important;
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
