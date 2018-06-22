<template>
  <input type="checkbox" class="checkbox">
</template>


<script>
export default {
  name: 'ACheckbox',
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

.checkbox {
  @include form-input-style();
  height: 1.5em;
  width: 1.5em;

  &:focus {
    outline: 0.125em dotted $color--primary;
  }

  &:checked {
    background-color: $color--primary;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    border: 0.125em solid $color--primary;
  }

  &[disabled],
  &:disabled {
    @include form-input-disabled();
  }
}
</style>
