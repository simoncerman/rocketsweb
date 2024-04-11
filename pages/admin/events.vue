<template>
    <div class="w-full">
      <h1 class="text-4xl text-center mt-4">Administrace</h1>
      <UContainer class="items-center flex align-middle text-center flex-col w-full">
        <UList>
          <h2>Akce:</h2>
          <UListItem v-for="event in state.events" :key="event.id">
            <ULink class="mt-8 mb-8" :to="`/admin/events/${event.id}`">
              <div class="flex justify-between text-left">
                <div>
                  <h2 class="text-xl">{{ event.title }}</h2>
                  <p>{{ event.date }}</p>
                </div>
                <div>
                  <UButton variant="link" icon="i-heroicons-chevron-right-20-solid" />
                </div>
              </div>
            </ULink>
          </UListItem>
        </UList>
        <AddEventForm class="w-1/2" />
      </UContainer>
    </div>
  </template>
  
  <script setup>
    const state = reactive({
        events: []
    })

    async function fetchData() {
      try {
        const eventRaw = await $fetch('/api/event', {
          method: 'GET'
        });
        const event = JSON.parse(eventRaw.body);
        state.events = event;
      } catch (error) {
        console.error(error);
      }
    }

    state.events = fetchData();
  </script>