<template>
    <div class="mt-8 mb-8">
        <h2>Add Event</h2>
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
            <UInput v-model="state.title" name="title" class="mt-1" color="white" variant="outline" placeholder="Title..." />
            <UTextarea v-model="state.description" name="description" class="mt-1" color="white" variant="outline" placeholder="Description..." />
            <UInput v-model="state.date" name="date" class="mt-1" color="white" variant="outline" type="date" />
            <UContainer class="flex justify-center">
                <UButton class="mt-2" type="submit" variant="outline">Add Event</UButton>
                <UButton @click="fillDatabaseWithData" class="mt-2 ml-2" variant="outline">Fill with data</UButton>
            </UContainer>
        </UForm>
    </div>
</template>

<script setup>
    const state = reactive({
        title: undefined,
        description: undefined,
        date: undefined
    })
    async function fillDatabaseWithData() {
        await $fetch('/api/fill', {
            method: 'POST'
        });
    }
    async function onSubmit() {
        // use /api/event with method post to add new event
        await $fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify(state)
        });


        console.log('Form submitted!');
        console.log('Title:', state.title);
        console.log('Description:', state.description);
        console.log('Date:', state.date);
    
    }
</script>

<style scoped>
/* Add your custom styles here */
</style>