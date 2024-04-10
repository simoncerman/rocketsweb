<template>
    <div>
        <UContainer class="w-1/3 h-full align-middle content-center login-container">
            <h1 class="text-2xl align-middle text-center">Registrovat</h1>
            <UForm :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Email" name="email">
                  <UInput v-model="state.email" />
                </UFormGroup>
            
                <UFormGroup label="Password" name="password">
                  <UInput v-model="state.password" type="password" />                 
                </UFormGroup>
            
                <UButton type="submit">
                  Registrovat
                </UButton>
            </UForm>
            <UAlert id="alert" style="display: none"
            :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
            title="Heads up!"/>
        </UContainer>
    </div>
</template>
<script setup lang="ts">
    import type { FormError, FormSubmitEvent } from '#ui/types'

    const state = reactive({
        email: undefined,
        password: undefined
    })

    const validate = (state: any): FormError[] => {
        const errors = []
        if (!state.email) errors.push({ path: 'email', message: 'Required' })
        if (!state.password) errors.push({ path: 'password', message: 'Required' })
        return errors
    }

    async function onSubmit (event: FormSubmitEvent<any>) {
        if(state.email === undefined || state.password === undefined) return
        try {
            const {data, error} = await useSupabaseClient().auth.signInWithPassword({
                email: state.email,
                password: state.password
            })

            if(error) {
                console.error(error)
                const alertElement = document.getElementById('alert');
                if (alertElement) {
                    alertElement.innerText = error.message;
                    alertElement.style.display = 'flex';
                }
                return;
            }
            
            navigateTo('/admin');


        } catch (error) {
            console.error(error)
        }
    }
</script>
<style scoped>
.login-container > * {
    margin-top: .5rem;
}
</style>
