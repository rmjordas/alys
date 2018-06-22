<template>
  <div class="demo-wrapper">
    <a-blockquote v-bind="$attrs"><slot /></a-blockquote>
  </div>
</template>


<script>
export default {
  name: 'DemoBlockquote',
};
</script>


<style lang="scss" scoped>
blockquote {
  margin: 0;
}
</style>
