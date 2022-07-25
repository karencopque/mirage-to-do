<template>
  <div class="bg-slate-100 rounded max-w-[400px] h-[450px] flex mx-auto flex-col mt-[200px] font-sans">
    <h1 class="text-3xl text-center font-bold mt-[50px] mb-[30px]">To Do</h1>
    <form @submit.prevent="handleSubmit">
      <input required minlength="1" v-model="text" type="text"
        class="mb-[10px] rounded border-2 border-solid border-blue-500 ml-[60px]">
      <input type="submit" value="Enviar"
        class="ml-[10px] border-solid w-[70px] h-[30px] rounded bg-sky-600 text-white">
    </form>

    <ul id="todos">
      <li v-for="todo in todos" v-bind:key="todo.id" class=" ml-[60px] mt-[7px] mb-5">
        - {{ todo.message }}
        <button @click="handleDeleteTodo(todo.id)"
          class="text-white bg-slate-500 rounded w-6 h-6 text-center">X</button>
      </li>
    </ul>
  </div>

</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { listTodos, createTodo, deleteTodo } from "./todo"

const todos = ref([])
const text = ref('')

const reloadTodos = async () => todos.value = await listTodos();
watchEffect(() => reloadTodos())

async function handleSubmit() {
  await createTodo(text.value)
  await reloadTodos()
  text.value = ''
}

async function handleDeleteTodo(id) {
  await deleteTodo(id)
  await reloadTodos()
}
</script>
