<template>
    <div class="container">
        <header>
            <router-link :to="{ name: 'home' }">
                <img class="logo" src="../assets/logo.svg">
            </router-link>
            <c-input class="search" ::autofocus="false" :command="command" @selected="onItemSelected"></c-input>
            <div class="placeholder"></div>
        </header>

        <div class="content">
            <h1>{{$route.params.category}}</h1>
            <h3>{{$route.params.subcategory}}</h3>
            <ul>
                <li v-for="(item, index) in list"
                    :key="index">
                    <router-link class="item" :to="{ name: 'detail', params: { command: item.title }}">
                        <div class="title">{{item.title}}</div>
                        <div class="desc">{{item.desc}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import category from '../../command/category'
import CInput from '../components/CInput'
import command from '../../command/command'

export default {
    data() {
        return {
            category,
            command,
            list: []
        }
    },
    mounted() {
        const cat = this.category.find(cat => cat.title === this.$route.params.category);
        if (cat) {
            const subcat = cat.category.find(sub => sub.title === this.$route.params.subcategory);

            if (subcat) {
                this.list = subcat.category;
            }
        }
    },
    methods: {
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
@import '../assets/header.less';

.container {
    .content {
        padding: 0 20px;

        h1, h3 {
            text-align: center;
            color: #34495E;
        }

        h1 {
            margin: 30px auto 0;
        }
        h3 {
            margin: 10px auto 30px;
        }

        ul {
            list-style-type: none;
            padding: 0;

            li {
                vertical-align: top;
                display: inline-block;
                line-height: 1.5;
                width: ~"calc(25% - 20px)";
                min-width: 220px;
                height: 110px;
                border: 1px solid #e5e5e5;
                padding: 10px;
                margin: 10px;

                &:hover {
                    border: 1px solid #E6E9ED;
                    box-shadow: 0 0 10px 5px #E6E9ED inset;
                }
            }

            @media (max-width: 480px) {
                li {
                    width: ~"calc(100% - 20px)";
                }
            }

            .item {
                display: inline-block;
                height: 100%;
                width: 100%;
            }

            .title {
                font-size: 16px;
            }

            .desc {
                color: #333;
                margin-top: 5px;
                font-size: 12px;
            }
        }
    }

}
</style>


