<template>
	<div class="block todo-page">
		<div class="title-container">
			<h1 class="title">
				Todos
			</h1>
		</div>
		<ul class="todo-container">
			<li
				v-for="todo in store.doneTodos"
				:key="todo.id"
			>
				<div class="box todo-item">
					{{ todo.todo }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/store'

const store = useTodoStore()

onMounted(async () => {
	await store.fetchTodos()
})
</script>

<style lang="scss" scoped>
.todo-page {
	height: 100dvh;
	width: 100%;
	background: rgb(242,255,254);
	background: linear-gradient(90deg, rgba(242,255,254,1) 0%, rgba(237,255,247,1) 70%, rgba(239,255,246,1) 100%); 
}

.title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
}

.todo-container {
	margin-left: 20px;
	margin-right: 20px;
}

.todo-item {
	margin-bottom: 10px;
}

</style>