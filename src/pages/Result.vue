<template>
    <div class="container">
        <header>
            <a href="/">
                <img class="logo" src="../assets/logo.svg">
            </a>
            <c-input
                :command="command"
                :auto-complete="showDetail"
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
            this.$router.push({ name: 'detail', params: { command } })
        },
        loadContent() {
            const findOne = command.find(c => c.title === this.$route.params.command)
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
.container {
    header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;

        .logo {
            width: 130px;
            padding: 5px 10px;
        }

        .search {
            flex-grow: 2;
        }

        .placeholder {
            flex-grow: 1;
        }
    }

    .content {
        padding: 30px;
    }


    @media (max-width: 480px) {
        .placeholder {
            display: none;
        }

        .content {
            padding: 15px;
        }
    }
}
</style>
