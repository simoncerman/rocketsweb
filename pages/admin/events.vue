<template>
    <div class="w-full">
      <h1 class="text-4xl text-center mt-4">Administrace</h1>
      <UContainer class="items-center flex align-middle text-center flex-col w-full">
        <!-- Foreach event which will get from /api/event with method get will be displayed here -->
        <UList>
          <UListItem v-for="event in events" :key="event.id">
            <ULink :to="`/admin/events/${event.id}`">
              <div class="flex justify-between">
                <div>
                  <h2 class="text-xl">{{ event.name }}</h2>
                  <p>{{ event.description }}</p>
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
  
  <script>
  
  export default {
    async beforeCreate() {
      const supabase = await useSupabaseClient();
      const user = supabase.auth.getUser();
  
      if (!user) {
        this.$router.push('/');
      }

      try {
        const eventRaw = await $fetch('/api/event', {
          method: 'GET'
        });
        const event = JSON.parse(eventRaw.body);

      } catch (error) {
        console.error(error);
      }
    },
    async created() {

    },
  };
  </script>