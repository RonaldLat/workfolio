<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient.js';
	import { currentUser } from '$lib/store/authState.js';

	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			//console.log('sign out error: ', error);
		}
	};
	const navigateTo = () => {
		goto('/signup');
	};
	supabase.auth.onAuthStateChange((event, session) => {
		console.log('event: ', event, 'session: ', session);
		try {
			$currentUser = session.user.user_metadata.username;
		} catch {
			console.log('No session available');
			$currentUser = '';
		}
		///getCurrentUser();
	});
	const getCurrentUser = async () => {
		const {
			data: { user }
		} = await supabase.auth.getUser();
		if (user) {
			$currentUser = user.email;
		}
	};

	console.log('store value user:', $currentUser);
</script>

{#if $currentUser}
	<button on:click={logOut}>
		<span>logout</span>
	</button>
{:else}
	<button on:click={navigateTo}>Login</button>
{/if}
