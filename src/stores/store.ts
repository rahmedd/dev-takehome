import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Todo } from '@/types/Todo'

export const useTodoStore = defineStore('todo', () => {
	const todos = ref<Todo[]>([])

	const incompleteTodos = computed(() => todos.value.filter((todo) => !todo.completed))
	const doneTodos = computed(() => todos.value.filter((todo) => todo.completed))

	async function fetchTodos() {
		try {
			const res = await axios.get('https://dummyjson.com/todos/', {
				params: {
					limit: 10,
				},
			})

			todos.value = res.data.todos.sort((a: Todo, b: Todo) => a.todo.toLowerCase() > b.todo.toLowerCase() ? 1 : -1)
		}
		catch (ex) {
			console.log('Error fetching todos')
		}
	}

	function toggleTodo(id: number) {
		const todo = todos.value.find(o => o.id === id)!
		todo.completed = !todo.completed
	}

	return { 
		todos,
		incompleteTodos,
		doneTodos,
		fetchTodos,
		toggleTodo,
	}
})
