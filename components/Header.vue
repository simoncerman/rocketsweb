<template>
    <div>
        <nav class="navigation">
            <div class="nav-left">
                    <a href="/">
                        <img src="/logo.png" style="width: 20rem;" alt="">
                    </a>
            </div>
            <div class="nav-center">
                <ui-nav class="nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <!-- Add more links as needed -->
                </ui-nav>
            </div>
            <div class="nav-right">
                <ULink></ULink>
                <route-link v-if="isLoggedIn" @click="toggleLogin">Logout</route-link>
                <UButton>Login</UButton>
                <a href=""></a>
            </div>
        </nav>
        <NuxtWelcome />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false, // replace this with your actual authentication status
        };
    },
    methods: {
        toggleLogin() {
            this.isLoggedIn = !this.isLoggedIn;
            // replace this with your actual login/logout logic
        },
    },
};
</script>

<style scoped>
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigation>div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-left, .nav-center, .nav-right {
    flex: 1;
}
.nav > * {
    margin: 0 1rem;
}
</style>