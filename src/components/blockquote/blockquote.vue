<template>
  <blockquote>
    <p><slot /></p>
  </blockquote>
</template>


<script>
export default {
  name: 'ABlockquote',
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

blockquote {
  background-color: $color--background--lightest;
  border-left: $blockquote--border-left;
  border-radius: $blockquote--border-radius;
  margin: $blockquote--margin;
  padding: $blockquote--padding;

  & p {
    font-style: italic;
    margin-top: 0;

    &:only-child {
      margin-bottom: 0;
    }
  }
}
</style>
