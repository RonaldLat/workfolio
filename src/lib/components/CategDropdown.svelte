<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";


</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline">Menu
    <Icon icon="mdi:chevron-down" class="ml-1 text-black"/>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-56">
    <DropdownMenu.Label>Menu</DropdownMenu.Label>
    <DropdownMenu.Separator />
      <DropdownMenu.Item>
      </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Group>
      <DropdownMenu.Item>
        <Icon icon="mdi:home" class="mr-2 h-4 w-4" />
        <span>Home</span>
      </DropdownMenu.Item>
      <DropdownMenu.Sub>
      <DropdownMenu.Item>
        <Icon icon="mdi:about-variant" class="mr-2 h-4 w-4" />
        <span><a href="/about">About</a></span>
      </DropdownMenu.Item>
        <DropdownMenu.SubTrigger>
          <Icon icon="carbon:expand-categories" class="mr-2 h-4 w-4" />
          <span>Categories</span>
        </DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>
            <Icon icon="ph:engine-thin" class="mr-2 h-4 w-4" />
            <span><a href="/engine-parts">Engine Parts</a></span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon icon="mdi:oil" class="mr-2 h-4 w-4" />
            <span><a href="/#">Lubricants</a></span>
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Separator />
    <DropdownMenu.Item>
      <Icon icon="mynaui:logout" class="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
