<template>
    <div>
        <nav class="navigation">
            <div class="nav-left">
                    <a href="/">
                        <img src="/logo.png" style="width: 20rem;" alt="">
                    </a>
            </div>
            <div class="nav-center">
                <nav class="nav">
                    <NuxtLink to="/" active-class="text-primary">Home</NuxtLink>
                    <!-- Add more links as needed -->
                </nav>
            </div>
            <div class="nav-right">
                <NuxtLink to="/login">Login</NuxtLink>
                <NuxtLink to="/admin"></NuxtLink>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

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