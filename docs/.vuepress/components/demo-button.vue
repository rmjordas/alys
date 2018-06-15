<template>
  <div class="demo-wrapper">
    <a-button v-bind="$attrs"><slot/></a-button>
  </div>
</template>


<script>
export default {
  name: 'DemoButton',
};
</script>
