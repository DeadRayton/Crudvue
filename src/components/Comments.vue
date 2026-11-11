<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const postId = route.params.id 
const comentarios = ref([])

async function getComments() {
    const respuesta = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
    const datos = await respuesta.json()
    comentarios.value = datos
}

onMounted(getComments)
</script>
<template>
<div class="container">
    <h1>Comentarios</h1>
    <div class="card mt-2" v-for="comentario in comentarios">
        <div class="card-header">
            {{ comentario.name}}
        </div>
        <div class="card-body">
            <figure>
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
            </figure>
        </div>
    </div>
</div>
</template>