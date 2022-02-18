<script>
	import { supabase } from '../supabase.js';
	async function signUp() {
		const { user, session, error } = await supabase.auth.signUp({
			email: 'joylat@email.com',
			password: 'example-password'
		});
		console.log(user);
	}

	let users;
	async function fetchSupabase() {
		const { data, error } = await supabase.from('users').select();
		users = data;
		console.log(data);
		console.log(error);
	}
</script>

<div>
	<form>
		<input type="email" />
		<input type="password" />
		<button on:click|preventDefault={signUp} type="submit">sign up </button>
	</form>
</div>
<button on:click|preventDefault={fetchSupabase}>fetch</button>

  
{#if users }
  
<p>data: {users[0].user_name}</p>
{/if}
