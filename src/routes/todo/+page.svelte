<script>
export function load({ route }) {
    console.log(route.id); // '/a/[b]/[...c]'
}
</script>
<script>
	import TodoForm from './TodoForm.svelte';
	import Todo from './Todo.svelte';
	import { todos, ron } from '../../store/todoStore';
</script>

<section>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
  <p>{ ron }</p>
	<TodoForm />

  {#each $todos as todo }
    <Todo todo="{todo}" />
  {/each}
</section>

