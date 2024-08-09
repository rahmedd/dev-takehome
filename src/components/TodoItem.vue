<template>
	<div
		class="box todo-item"
		@click="toggle"
	>
		<input
			type="checkbox"	
			:checked="props.todo.completed"
		>
		<span
			:class="{ strike: props.todo.completed }"
		>
			{{ todo.todo }}
		</span>
	</div>
</template>

<script setup lang="ts">
import type { Todo } from '@/types/Todo'

const props = defineProps<{
	todo: Todo
}>()

const emits = defineEmits<{
	toggle: [val: boolean]
}>()

function toggle() {
	emits('toggle', !props.todo.completed)
}

</script>

<style lang="scss" scoped>
.todo-item {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}

input[type="checkbox"] {
	margin-right: 10px;
}

span {
	color: black;
}

.strike {
	text-decoration: line-through;
	color: #949494;
}

</style>