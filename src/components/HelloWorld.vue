<template>
	<div class="block todo-page">
		<div class="title-container">
			<h1 class="title is-1">
				Todos
			</h1>
		</div>

		<div class="box">
			<h3 class="title is-5 title-offset">
				Incomplete
			</h3>
			<ul class="todo-container">
				<li
					v-for="todo in store.incompleteTodos"
					:key="todo.id"
				>
					<TodoItem
						:todo="todo"
						@toggle="store.toggleTodo(todo.id)"
					/>
				</li>
			</ul>
		</div>

		<div class="box">
			<h3 class="title is-5 title-offset">
				Completed
			</h3>
			<ul class="todo-container">
				<li
					v-for="todo in store.doneTodos"
					:key="todo.id"
				>
					<TodoItem
						:todo="todo"
						@toggle="store.toggleTodo(todo.id)"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/store'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()

onMounted(async () => {
	await store.fetchTodos()
})
</script>

<style lang="scss">
.todo-page {
	height: 100dvh;
	width: 100%;
	padding-left: 20px;
	padding-right: 20px;
}

.title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;

	h1 {
		background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}

.todo-container {
	margin-bottom: 20px;
}

.title-offset {
	margin-top: 10px;
	margin-left: 20px;
}

</style>