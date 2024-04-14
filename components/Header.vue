<script setup>
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const logout = async () => {
        console.log("called");
        await supabase.auth.signOut();
        navigateTo('/');
    }
</script>
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
                    <NuxtLink to ="/starfox" active-class="text-primary">Starfox</NuxtLink>
                    <!-- Add more links as needed -->
                </nav>
            </div>
            <div class="nav-right">
                <NuxtLink v-if="user" to="/admin/events">
                    <UButton variant="primary">Admin</UButton>
                </NuxtLink>
                <NuxtLink v-else to="/login">Login</NuxtLink>
                <UButton v-if="user" @click="logout" variant="outline">Logout</UButton>
            </div>
        </nav>
    </div>
</template>



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