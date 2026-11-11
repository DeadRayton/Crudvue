<script setup>
import { ref, onMounted } from "vue"


const posts = ref([])
const error = ref("")


async function obtenerUsuarios() {
    error.value = ""

    try {

        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )

        if(!respuesta.ok){
            throw new Error("Error al consultar usuarios")
        }

        console.log(posts)
        const datos = await respuesta.json()
        posts.value = datos
        console.log(posts)

    } catch (e) {
    error.value = e.message
    console.error(e)
    }
}

onMounted(obtenerUsuarios)
</script>

<template>
    <div class="container py-5"></div>
    <h1>Lista de publicaciones</h1>

    

        <div class="card mb-5" v-for="post in posts" :key="post.id">
    <div class="card-header">
        <h4>{{ post.title }}</h4>
    </div>
    <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">{{ post.body }}</p>
        <RouterLink :to="`/post/${post.id}/comentarios`" class="btn btn-primary">Ver comentarios</RouterLink>
    </div>
    </div>
</template>
     