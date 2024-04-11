<template>
    <h1 class="text-center text-5xl">Starfox</h1>
    <Timeline :timeline-events="state.events"/>
  </template>

<script setup>
  // get the timeline events from the API
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