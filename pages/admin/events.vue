<template>
  <div class="flex items-center align-middle justify-center">
    <div class="w-5/6 flex align-middle text-center">
      <UContainer class="w-1/2">
        <h1 class="text-4xl text-center mt-4">Akce časové osy</h1>
        <UContainer class="items-center flex align-middle text-center flex-col w-full">
          <UList>
            <h2>Akce:</h2>
            <UListItem v-for="event in state.events" :key="event.id">
              <ULink class="w-full" :to="`/admin/events/${event.id}`">
                <div class="flex justify-between text-left">
                  <div>
                    <h2 class="text-xl">{{ event.title }}</h2>
                    <p>{{ event.date }}</p>
                  </div>
                  <div>
                    <UButton variant="link" class="hover:translate-x-2 duration-500" icon="i-heroicons-chevron-right-20-solid" />
                  </div>
                </div>
              </ULink>
            </UListItem>
          </UList>
          <AddEventForm />
        </UContainer>
      </UContainer>
      <UContainer class="w-1/2">
        <h1 class="text-4xl text-center mt-4">Časová osa</h1>
        <Timeline :timelineEvents="state.events" />
      </UContainer>
    </div>
  </div>
    
  </template>
  
  <script setup>
    const state = reactive({
        events: []
    })

    async function fetchData() {
      try {
        const eventRaw = await $fetch('/api/events', {
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