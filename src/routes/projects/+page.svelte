<script>
  import ShrinkImg from '$lib/components/ui/ShrinkImg.svelte';
import { Avatar, TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  let tabSet = 0;
</script>

<h1>Projects</h1>
<Avatar src="lat2-smaller.webp" />

<TabGroup>
  <Tab bind:group={tabSet} name="tab1" value={0}>
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <span>(label 1)</span>
  </Tab>
  <Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
  <Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
  <!-- Tab Panels --->
  <svelte:fragment slot="panel">
    {#if tabSet === 0}
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {:else if tabSet === 1}
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {:else if tabSet === 2}
      (tab panel 3 contents)
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {/if}
  </svelte:fragment>
</TabGroup>
<ShrinkImg/>


<p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam aut fugit totam eius. Ratione veniam provident sit. Minus possimus dicta ad voluptas repellat aperiam iusto laudantium, molestiae, assumenda dolore pariatur laborum voluptatum sint vitae architecto aspernatur est voluptatem quod sapiente ullam, nobis iste. Quas illo quam ratione exercitationem tempore? Numquam ut minima eaque architecto veniam esse magnam. Ut mollitia possimus iste reprehenderit incidunt distinctio deserunt nulla nihil magnam aut veniam error voluptates eum quam aperiam voluptatem repudiandae pariatur nisi facilis harum esse, quod enim illo nesciunt. Sapiente minima deserunt voluptatem, velit illum doloribus quis repudiandae, amet atque expedita blanditiis! Temporibus est, deserunt sunt corporis quam blanditiis molestiae itaque praesentium veritatis placeat, a nostrum pariatur doloremque. Iusto vel voluptate rem magnam illo dicta corporis. Minus cupiditate aliquam amet deleniti laudantium neque, corrupti cumque ut facilis est similique, commodi labore maiores ipsa nisi quisquam dicta facere ullam quod. Non animi quo ullam ad, iste rerum temporibus illum id cumque modi quos, reiciendis laudantium facilis! Sunt non vel nam sequi suscipit. Sed ratione quis laudantium odio tempora. Impedit a officia velit. Distinctio quam, laudantium amet deserunt velit consequatur autem dolor officia cupiditate cum praesentium quisquam itaque accusantium nisi vitae hic, facere aspernatur dignissimos maiores consectetur laboriosam tempore totam. Rem incidunt repellendus nulla odio, cumque nemo quam esse dolor tenetur neque aliquid ab perspiciatis cupiditate recusandae officiis voluptatem, exercitationem quos dignissimos inventore at ipsam consectetur deleniti. Ab aliquam ratione fugit molestias eaque, eum, facere laborum nihil natus placeat maiores illo enim suscipit quod beatae nobis labore, atque quos reprehenderit ipsa rerum possimus? Ullam corporis ut minima neque et, natus aliquid, pariatur quis eligendi in aperiam ipsa. Voluptatem, laboriosam ea quam soluta quasi voluptatibus alias nihil nesciunt velit minus quisquam est quos suscipit quas provident vel cumque sunt porro ullam officiis. Quae accusamus animi aliquid, odio architecto perferendis vel iusto voluptate in officia provident corporis ad cumque eaque sit numquam ut qui dolores iste non aperiam facilis iure. Animi asperiores totam soluta consequuntur? Ducimus iste dolore eum tempore itaque. Magnam similique ratione maiores doloribus fugiat esse voluptate reprehenderit, earum nostrum labore suscipit numquam repellat soluta, excepturi atque voluptates vitae? Fugit commodi rem distinctio dicta mollitia, nam veniam vel molestias dolores obcaecati doloremque sit, cupiditate sed. Animi sunt itaque repellendus ullam suscipit incidunt laboriosam quia vitae odio. Veniam quisquam velit tempore sit quo rerum explicabo unde alias voluptate in beatae ipsa repellat exercitationem iure modi, excepturi fugiat accusamus doloribus nisi facere neque debitis? Odit a perferendis vero. Quasi omnis eos laboriosam repellendus a illo, sunt maxime aut autem eum sequi maiores odit, voluptatem nemo magni vero quos exercitationem consectetur ipsam enim eius perspiciatis. Explicabo eveniet iure error saepe laborum sint, consequuntur illum minus ad qui commodi, veniam ipsum quo delectus quasi corporis sed perferendis sunt? Consequatur minus repudiandae recusandae nam optio unde expedita labore exercitationem, ipsam commodi dolorem possimus iure, deleniti ex inventore a aliquam impedit laboriosam minima voluptatum quasi soluta architecto assumenda eum! Distinctio minima facere impedit. Optio quasi, animi sit dolorum dolores eaque necessitatibus repellat totam at dolorem illo, numquam officiis id. Architecto eius autem perspiciatis minus quo laboriosam quae nulla aliquid harum officia animi necessitatibus, et repellat atque. Obcaecati et ut, magni at, eligendi ex a repellendus earum consequuntur nobis, magnam error libero eum nostrum assumenda. Aliquam quisquam voluptatum nulla aliquid labore at enim quam. Hic tempora optio provident, corporis accusamus doloribus tempore molestiae dolorem, quam a porro ratione magni distinctio qui placeat excepturi non nobis, praesentium soluta corrupti minus aliquam est! Perspiciatis nobis officia ipsam. Nihil dignissimos deserunt numquam minima dolorum quibusdam modi doloremque quos illum, quae quaerat? Totam ipsa rerum eos! Quisquam ad sunt cumque iste neque commodi veritatis blanditiis natus maxime aspernatur corporis repellat perspiciatis dolore, impedit nam, temporibus aut suscipit magnam praesentium tempora odit qui, ea voluptatibus! Sed impedit, consequuntur ullam repellat officia quam mollitia aliquam sapiente adipisci ex hic alias quia, suscipit culpa perferendis odio quaerat nesciunt reiciendis, est debitis praesentium? Aliquid velit mollitia amet, labore voluptatibus tempora, nihil laborum ducimus esse recusandae delectus fugiat possimus non veniam? Eligendi laborum autem itaque reiciendis rerum repudiandae consequuntur quisquam totam excepturi dolorem veritatis omnis vel cumque impedit unde eius libero, perspiciatis, facere sit exercitationem dolorum quaerat aperiam accusantium. Adipisci, voluptatibus quidem nesciunt commodi accusamus, nam consequuntur unde provident numquam laboriosam culpa pariatur voluptates voluptate corporis. Similique voluptates accusantium, dicta at veniam iure iusto numquam expedita! Fugiat sapiente nulla rerum pariatur unde saepe accusamus voluptate autem? Repellendus voluptate adipisci necessitatibus, iusto eaque quisquam laudantium ratione voluptas ea quae at architecto. Aspernatur doloribus, nihil consequatur temporibus, unde est accusantium magni ullam esse quo repudiandae magnam sit reprehenderit similique nisi, molestias assumenda vitae. Impedit, quae. Excepturi fuga itaque totam, ipsam eos aperiam beatae consequatur eveniet quae expedita eaque pariatur quibusdam delectus ducimus, officiis voluptatem tenetur sunt! Doloribus pariatur optio impedit, atque consequuntur beatae voluptatibus eaque consequatur deserunt architecto autem, dicta, nobis eius iusto asperiores cum aspernatur maxime eveniet non fugiat necessitatibus quos magni? Soluta aperiam minima neque, voluptatum sed molestias! Voluptates porro accusamus quis molestias deserunt expedita magni hic doloribus sed ad tempora repellat necessitatibus officia mollitia, culpa asperiores temporibus, ipsa unde voluptatem obcaecati quia aut? Autem delectus ipsa, officiis id suscipit earum dolorum quo incidunt quidem voluptatum velit unde eos, fugiat, ex obcaecati doloribus. Obcaecati ad rem ex minus! Vero quos modi quod dolor sit voluptate nihil laborum architecto molestiae sequi quae inventore consequuntur est adipisci deserunt delectus aspernatur, eius, natus rem cupiditate vel. Nesciunt quam neque quisquam blanditiis saepe. Voluptatem sint odit harum magni recusandae sequi fugiat eum laudantium cupiditate, delectus minus, alias rem porro? Aliquid, omnis perspiciatis quo rem nemo facere dolor assumenda? Praesentium recusandae vel tempore odio vero, nihil ea inventore sed rerum impedit eum! Possimus suscipit, tenetur soluta atque tempore sed harum dignissimos magnam omnis inventore odit ad debitis porro perferendis. Voluptatum iure, commodi quibusdam dolorem vitae recusandae obcaecati blanditiis! Alias, aliquam consectetur! Quasi, molestiae, ipsum eum tempora sapiente maiores mollitia asperiores aliquam odio iste esse deserunt. Perspiciatis enim expedita eaque fugiat nemo exercitationem suscipit rerum odit!</p>

<ShrinkImg/>
