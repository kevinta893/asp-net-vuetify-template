<template>
    <div>
        <v-container>
            <v-btn v-on:click="poke()">Hello World Poke</v-btn>
            <v-card-title>{{pokes}}</v-card-title>
            <router-link to="/Info">See Info Page</router-link>
        </v-container>
    </div>
</template>
<script>
    import axios from 'axios';
    const client = axios.create({
        baseURL: './api/',
        json: true
    })
    export default {
        data() {
            return {
                message: 'Message from App.vue',
                pokes: 0
            };
        },
        methods: {
            async poke() {
                try {
                    await client.post('./Poke')
                    this.pokes = (await client.get('./Poke')).data;
                } catch (err) {
                    console.error(err);
                }
            }
        }
    };
</script>