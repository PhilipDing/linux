<template>
    <div class="container">
        <header>
            <router-link :to="{ name: 'home' }">
                <img class="logo" src="../assets/logo.svg">
            </router-link>
            <c-input
                class="search"
                :command="command"
                :auto-complete="showDetail"
                :autofocus="false"
                :default-value="$route.params.command"
                @selected="onItemSelected"
                @changed="onChanged">
            </c-input>
            <div class="placeholder"></div>
        </header>

        <div class="content">
            <c-detail v-if="showDetail" :command="$route.params.command"></c-detail>

            <c-list v-show="!showDetail" :command="command" :search-key="searchKey"></c-list>
        </div>
    </div>
</template>

<script>
import CInput from '../components/CInput'
import CDetail from '../components/CDetail'
import CList from '../components/CList'
import category from '../../command/category'
import command from '../../command/command'

export default {
    data() {
        return {
            command,
            showDetail: false,
            enableAutoComplete: false,
            searchKey: ''
        }
    },
    methods: {
        onChanged({ value }) {
            this.searchKey = value;
        },
        onItemSelected({ command }) {
            if (!command) {
                return
            }

            this.$router.push({ name: 'detail', params: { command: command.toLowerCase() } })
        },
        loadContent() {
            const findOne = this.command.find(c => c.title.toLowerCase() === this.$route.params.command.toLowerCase())
            this.showDetail = !!findOne;
        }
    },
    mounted() {
        this.loadContent();
    },
    watch: {
        '$route'() {
            this.loadContent();
        }
    },
    components: {
        CInput,
        CDetail,
        CList
    }
}
</script>

<style lang="less" scoped>
@import '../assets/header.less';

.container {
    .content {
        padding: 20px 30px;
    }


    @media (max-width: 480px) {
        .content {
            padding: 15px;
        }
    }
}
</style>
