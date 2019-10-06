<template>
    <div class="grid-container">
        <Header />
        <template v-if="!showIEMessage">
            <Menu>
                Here goes the menu
            </Menu>
            <Main />
        </template>
        <template v-else>
            <IEMessage />
        </template>
    </div>
</template>

<script>
import Menu from "./layout/Menu.vue";
import Header from "./layout/Header.vue";
import Main from "./layout/Main.vue";
import IEMessage from "./layout/IEMessage.vue";

export default {
    name: "app",
    components: {
        Menu,
        Header,
        Main,
        IEMessage
    },
    data: (e) => {
        return {
            showIEMessage: false
        };
    },
    mounted() {
        var ua = window.navigator.userAgent;
        var isIE = (/MSIE|Trident/).test(ua);
        if (isIE) {
            this.showIEMessage = true;
        }
    }
};
</script>
