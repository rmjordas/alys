<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="classObject"
    @click="click">
    <slot>{{ label }}</slot>
  </button>
</template>


<script>
export default {
  name: 'AButton',

  props: {
    label: {
      type: String,
      default: 'Submit',
    },
    type: {
      type: String,
      default: 'button',
    },
    flat: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      classObject: {
        'a-flat': this.flat,
      },
    };
  },
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

button,
button[type='button'],
button[type='reset'],
button[type='submit'] {
  @include button-style();

  &:not(:active) {
    @include button-style--not-active();
  }

  &:disabled {
    @include button-style--disabled();
  }

  &:not(:disabled) {
    /* @include hover-style(); */

    &:focus {
      @include button-style--not-disabled--focused();
    }

    &:active {
      @include button-style--not-disabled--active();
    }
  }

  &.a-flat {
    @include button-style--flat();

    &:active {
      @include button-style--flat--active();
    }

    &:focus {
      @include button-style--flat--focused();
    }

    &.disabled {
      @include button-style--flat--disabled();
    }

    &.disabled:hover {
      @include button-style--flat--hovered();
    }
  }
}
</style>
