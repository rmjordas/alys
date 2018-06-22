<template>
  <hr />
</template>


<script>
export default {
  name: 'AHr',
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border-top: 0.2rem solid $color--foreground--lighter;
  border-width: 0.125em;
}
</style>
