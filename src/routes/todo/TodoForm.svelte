<script>
  import {addTodo} from '../../store/todoStore'

  let todo = ''

  const handleSubmit =()=>{
      addTodo(todo)
      todo =''

    }
</script>

<form class="my-6 " on:submit|preventDefault="{handleSubmit}">
  <div class="flex flex-col text-sm mb-2">

  <label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
  <input bind:value="{todo}" class="appearance-none mb-2 shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" type="" name="todo" placeholder="Watcha gotta do?">

  <button class="rounded bg-blue-500 hover:bg-blue-500 w-full shadow-sm text-white py-2 px-4" type="submit">Submit</button>
  </div>
</form>

<p>{ todo }</p>
