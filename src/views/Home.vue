<template>
    <div class="flex flex-col p-8">

        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" :key="letter" v-for="letter of letters">
                {{  letter }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([])

onMounted(async() => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
    ingredients.value = response.data;
})
</script>
