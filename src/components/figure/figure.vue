<template>
  <figure>
    <img :src="src" :alt="alt">

    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>


<script>
export default {
  name: 'AFigure',

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/globals.scss';

figure {
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  max-width: fit-content;

  & > * {
    margin: 0.8rem;
  }

  & img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  & figcaption {
    font-weight: 300;
    margin: 0;
    padding: 0.8rem;
    text-align: center;
  }
}

/* lt Edge 16 */
@supports (display: -ms-grid) {
  figure {
    border-radius: 0;
    display: table;

    & > * ~ figcaption {
      caption-side: top;
    }

    & figcaption {
      border: 0.3rem solid $color--primary;
      display: table-caption;
    }

    & img ~ figcaption {
      caption-side: bottom;
    }
  }
}

/* lte IE 11 */
@media screen and (-ms-high-contrast: active),
  screen and (-ms-high-contrast: none) {
  figure {
    border-radius: 0;
    display: table;
    max-width: 100%;

    & img {
      display: block;
      width: 100%;
      max-width: 96rem;
    }

    & > * ~ figcaption {
      caption-side: top;
    }

    & figcaption {
      border: 0.3rem solid $color--primary;
      display: table-caption;
    }

    & img ~ figcaption {
      caption-side: bottom;
    }
  }
}
</style>
