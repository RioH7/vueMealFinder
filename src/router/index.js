import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByIngredients from '../views/MealsByIngredients.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: Home,
                name: 'home'
            },
            {
                path: '/by-letter/:letter?',
                component: MealsByLetter,
                name: 'byLetter'
            },
            {
                path: '/by-name/:name?',
                component: MealsByName,
                name: 'byName'
            },
            {
                path: '/by-ingredient/:ingredient?',
                component: MealsByIngredients,
                name: 'byIngredient'
            },
            {
                path: '/meal/:id',
                component: MealDetails,
                name: 'mealDetails'
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }
]

const router= createRouter({
    history: createWebHistory(),
    routes
});

export default router;