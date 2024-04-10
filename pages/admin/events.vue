<template>
    <div>
      <h1 class="text-4xl text-center mt-4">Administrace</h1>
      <UContainer>

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
    },
    async created() {
      try {
        const events = await $fetch('/api/event', {
          method: 'GET'
        });
        console.log(events);
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>