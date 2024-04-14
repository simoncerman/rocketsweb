<template>
    <div class="mt-2 mb-2">
        <h1 class="text-center mb-4 text-2xl">Úprava akce</h1>
        <!-- placeholder when waiting for data -->
        <UForm :state="state" v-if="hasData" class="space-y-4" @submit="onSubmit">
            <UInput v-model="state.title" name="title" class="mt-1" color="white" variant="outline" placeholder="Title..." />
            <UTextarea v-model="state.description" name="description" class="mt-1" color="white" variant="outline" placeholder="Description..." />
            <UInput v-model="state.date" name="date" class="mt-1" color="white" variant="outline" type="date" />
            <UContainer class="flex justify-center">
                <UButton @click="editEvent" class="mt-2 ml-1 mr-1" variant="solid" color="green">Upravit akci</UButton>
                <UButton @click="removeEvent" class="mt-2 ml-1 mr-1" type="submit" variant="outline" color="orange">Odstranit</UButton>
            </UContainer>
        </UForm>
        <div v-else class="space-y-4">
            <USkeleton class="h-4 w-[100%]" />
            <USkeleton class="h-4 w-[100%]" />
            <USkeleton class="h-4 w-[100%]" />
            <USkeleton class="h-4 w-[100%]" />

            <UContainer class="flex justify-center">
                <UButton disabled class="mt-2 ml-1 mr-1" variant="solid" color="green">Upravit akci</UButton>
                <UButton disabled class="mt-2 ml-1 mr-1" type="submit" variant="outline" color="orange">Odstranit</UButton>
            </UContainer>
        </div>
    </div>
</template>

<script setup>
    const hasData = ref(false)
    const props = defineProps({
        id: Number
    })

    const state = reactive({
        title: undefined,
        description: undefined, 
        date: undefined
    })
    await $fetch (`/api/event/${props.id}`, {      
        method: 'GET',
    }).then((response) => {
        response = JSON.parse(response.body)[0];
        state.title = response.title;
        state.description = response.description;
        state.date = response.date;
        if(response.title !== undefined && response.description !== undefined && response.date !== undefined){
            hasData.value = true;
        }
    }).catch((error) => {
        console.error(error);
    });

    async function editEvent() {
        const response =  await $fetch(`/api/event/${props.id}`, {
            method: 'PUT',
            body: JSON.stringify(state)
        });
        console.log(response);
        // route to /admin/events
        await navigateTo('/admin/events', {
            external: true
        })    
    }

    async function removeEvent() {
        await $fetch(`/api/event/${props.id}`, {
            method: 'DELETE'
        });
        await navigateTo('/admin/events', {
            external: true
        })    
    }
</script>

<style scoped>
/* Add your custom styles here */
</style>