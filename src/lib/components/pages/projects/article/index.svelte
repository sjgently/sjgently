<script lang="ts">
  import Heading from '$lib/components/ui/heading.svelte';
  import contentJa from '$lib/contents/pages/projects/content-ja.json';

  import Project from './project.svelte';

  const content = contentJa;
  const sideContent = content.filter((item) => item.type === 'side');
  const clientContent = content.filter((item) => item.type === 'client');
</script>

<article>
  <Heading level={2}>Projects</Heading>
  <section class="mt-8 mb-8">
    <Heading level={3}>Side projects</Heading>
    {#each sideContent as { href, linkText, description, tags } (href)}
      <Project {href} {linkText} {description} {tags} />
    {/each}
  </section>
  <section class="mt-8 mb-8">
    <Heading level={3}>Client projects</Heading>
    {#each clientContent as { href, linkText, description, tags } (href)}
      <Project {href} {linkText} {description} {tags} />
    {/each}
  </section>
</article>
