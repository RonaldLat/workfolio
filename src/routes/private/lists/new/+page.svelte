<script>
/** @type {import('./$types').PageData} */
/** @type {import('./$types').ActionData} */

	import { Button } from "$lib/components/ui/button";
  import { toast } from "svelte-sonner";
  import {enhance} from '$app/forms'

  export let form

  $:if (form){
      toast.success(form.supabase_success)
      toast.success(form.file_success)
  }


  $:console.log('form ',form)

</script>
<section class="px-2 bg-blue-100 h-32">

<form method="POST" action="?/addfile"  enctype="multipart/form-data" use:enhance>
    <label for="file">Enter content</label>
    <input type="file" name="file" class="bg-white">
    <Button type="submit">Upload</Button>
</form>

</section>
