<template>
    <NuxtPage/>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    await useRouter().push('/admin/events')
</script>

<style>
    /* Your styles here */
</style>