<template>
  <input :type="type" class="input">
</template>

<script>
export default {
  name: 'AInput',

  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

.input {
  @include form-input-style();

  &:focus {
    @include textfield-style--focused();
  }

  // COLOR
  &[type='color'] {
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
      border-radius: $border-radius;
      height: 1em;
      margin: auto;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  // FILE
  &[type='file'] {
    display: block;
    height: 100%;
    padding: 0.325rem;
    position: relative;
    right: 0;
    top: 0;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::-ms-value {
      border: 0;
      color: $color--foreground--light;
      padding: 0.5em;
    }

    &::-ms-browse {
      background-color: $color--primary;
      border: 0.125em solid transparent;
      border-radius: $border-radius;
      color: $color--foreground--lightest;
      font-weight: 700;
    }

    &::before {
      background-color: $color--primary;
      border-radius: $border-radius 0 0 $border-radius;
      color: $color--foreground--lightest;
      content: attr(title);
      display: inline-block;
      font-weight: 700;
      left: -0.125em;
      padding: 0.6em;
      position: absolute;
      top: -0.125em;
      transition: all 0.2s ease-in;
    }

    // &:focus {
    //   border: 0.2rem solid $color--foreground--lighter;
    // }

    &:disabled {
      color: $color--foreground--lighter;
      cursor: not-allowed;

      // &::before,
      // &:hover::before {
      &::before {
        background-color: $color--background--lighter;
        border: 0.0625em solid $color--foreground--lighter;
      }

      &::-ms-browse {
        background-color: $color--background--lighter;
      }
    }
  }

  // RADIO
  &[type='radio'] {
    border-radius: 50%;
    height: 2rem;
    position: relative;
    // top: 0.4rem;
    top: 0;
    width: 2rem;

    &:focus {
      outline: 0.1rem dotted $color--primary;
    }

    &:checked {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%230579c6'/%3E%3C/svg%3E");
      border: 0.2rem solid $color--primary;

      &:disabled,
      &[disabled] {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%234a4a4a'/%3E%3C/svg%3E");
        border: 0.2rem solid $color--foreground--lightest;
      }
    }
  }

  // RANGE
  &[type='range'] {
    appearance: none;
    border: none;
    outline: none;
    vertical-align: middle;

    // Chrome, Safari, Opera
    &::-webkit-slider-runnable-track {
      background: $color--background--lightest;
      border: none;
      border-radius: $border-radius;
      cursor: default;
      height: 1rem;
      width: 100%;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      background: $color--primary;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: 2rem;
      margin-top: -0.5rem;
      width: 2rem;
    }

    // Firefox
    &::-moz-range-thumb {
      background: $color--primary;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: 2rem;
      width: 2rem;
    }

    &::-moz-range-track {
      background: $color--background--lightest;
      border-radius: $border-radius;
      border: none;
      cursor: default;
      height: 1rem;
      width: 100%;
    }

    // Edge
    &::-ms-fill-lower {
      background: $color--background--lightest;
      border-radius: $border-radius;
    }

    &::-ms-fill-upper {
      background: $color--background--lightest;
      border: none;
      border-radius: $border-radius;
    }

    &::-ms-thumb {
      background: $color--primary;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: 2rem;
      margin-top: 0;
      width: 2rem;
    }

    &::-ms-track {
      background: transparent;
      border: 0;
      color: transparent;
      cursor: pointer;
      height: 1rem;
      width: 100%;
    }

    &[disabled] {
      border: 0;
      background-color: transparent;
      cursor: not-allowed;

      &::-webkit-slider-runnable-track {
        background: $color--foreground--lighter;
        cursor: not-allowed;
      }

      &::-webkit-slider-thumb {
        background: $color--foreground--light;
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        background: $color--foreground--light;
        cursor: not-allowed;
      }

      &::-moz-range-track {
        background: $color--background--lighter;
        cursor: not-allowed;
      }

      &::-ms-thumb {
        background: $color--foreground--light;
        cursor: not-allowed;
      }

      &::-ms-track {
        background: $color--background--lighter;
        cursor: not-allowed;
      }
    }

    &:active {
      &:not(:disabled) {
        outline: none;

        &::-webkit-slider-runnable-track {
          background: $color--background--lighter;
        }

        &::-moz-range-track {
          background: $color--background--lighter;
        }

        &::-ms-fill-lower {
          background: $color--background--lighter;
        }

        &::-ms-fill-upper {
          background: $color--background--lighter;
        }
      }
    }
  }

  // SEARCH
  &[type='search'],
  &[type='search']:not(:disabled) {
    appearance: textfield;
  }

  // PSEUDOSELECTORS
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[required]:valid {
    background-color: transparent;
    border: 0.125em solid $color--success;
    color: $color--foreground--darkest;
    outline: none;
  }
  &:invalid {
    background-color: transparent;
    border: 0.125em solid $color--error;
    color: $color--foreground--darkest;
    outline: none;

    &::placeholder {
      color: $color--error;
    }

    &:focus {
      background-color: none;
      border: 0.125em solid $color--error;
      color: $color--foreground--light;

      &::placeholder {
        color: $color--foreground--lighter;
      }
    }
  }

  &[disabled],
  &:disabled {
    @include form-input-disabled();
  }
}
</style>
