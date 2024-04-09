<template>
    <div>
        <UContainer class="w-1/3 h-full align-middle content-center login-container">
            <h1>Přihlásit</h1>
            <UInput placeholder="Username" />
            <UInput placeholder="Password" type="password" />
            <UButton>Prihlásit</UButton>
            <ULink class="ml-2" to="/register">Registrovat</ULink>
        </UContainer>
    </div>

</template>

<script>

 
</script>

<style scoped>
    .login-container > * {
        margin-top: .5rem;
    }
</style>