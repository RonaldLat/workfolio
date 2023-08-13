<script>
	import { supabase } from '$lib/supabaseClient.js';

	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			//console.log('sign out error: ', error);
		}
	};
	supabase.auth.onAuthStateChange((event, session) => {
		console.table('event: ',event, 'session: ',session.user.email);
	});
	let logout = true;
</script>

<button on:click={logOut}>
	{#if logout}
		<span>logout</span>
	{/if}
</button>
