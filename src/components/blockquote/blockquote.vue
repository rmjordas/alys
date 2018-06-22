<template>
  <blockquote :type="type" class="blockquote">
    <p v-if="type == 'single'"><slot /></p>
    <slot v-else />
  </blockquote>
</template>


<script>
export default {
  name: 'ABlockquote',

  props: {
    type: {
      type: String,
      default: 'multiple',
      validator(type) {
        return ['single', 'multiple'].includes(type);
      },
    },
  },
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

.blockquote {
  background-color: $color--background--lightest;
  border-left: 0.5rem solid $color--foreground--lighter;
  border-radius: 0.2em;
  font-style: italic;
  line-height: 1.45;
  margin: 0 1em;
  padding: 0.6em;

  & p {
    margin: 0 0 0.6em;

    &:last-child {
      margin: 0;
    }
  }
}
</style>
