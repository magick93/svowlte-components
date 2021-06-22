<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import HelloWorld from '../HelloWorld.svelte';
  </script>
  
  <Meta title="HelloWorld" component={HelloWorld}/>
  
  <Template >
    <HelloWorld/>
  </Template>
  <style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>
  <Story name="Primary" args={{primary: true}}/>
  
  <Story name="Secondary" args={{primary: false}}/>