<script>
	import { currentUser } from '$lib/store/authState.js';
	import { supabase } from '$lib/supabaseClient.js';
	import { goto } from '$app/navigation';

	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			//console.log('sign out error: ', error);
		}
	};
</script>
<p>auth component</p>
