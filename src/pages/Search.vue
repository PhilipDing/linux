<template>
    <div class="container">
        <a class="github" href="https://github.com/PhilipDing/linux">
            <img src="../assets/github.svg">
        </a>
        <div class="logo">
            <router-link :to="{ name: 'home' }">
                <img src="../assets/logo.svg">
            </router-link>
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
                    <router-link
                        v-for="(sub, index) in cat.category"
                        class="subcategory-link"
                        :to="{name: 'category', params: { category: cat.title, subcategory: sub.title }}"
                        :key="index">
                        {{sub.title}}
                    </router-link>
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
        onItemSelected({ command }) {
            if (!command) {
                return;
            }

            this.$router.push({ name: 'detail', params: { command: command.toLowerCase() } })
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

    .github {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        background: #e5e5e5;
        color: #e5e5e5;
        &:before {
            content: '';
            position: absolute;
            border-top: 20px solid;
            border-right: 20px solid;
            border-left: 20px solid transparent;
            border-bottom: 20px solid transparent;
            right: 40px;
            top: 0;
        }
        &:after {
            content: '';
            position: absolute;
            border-top: 20px solid;
            border-right: 20px solid;
            border-left: 20px solid transparent;
            border-bottom: 20px solid transparent;
            top: 40px;
            right: 0;
        }
        img {
            height: 30px;
            top: 15px;
            right: 13px;
            position: absolute;
            transform: rotate(45deg);
            z-index: 10;
        }
    }

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
