<template>
      <div class="pad">
            <div class="pad__text">
                  <main-content></main-content>
            </div>
      <footer class="pad_footer">
            <ul class="pad__footer__items">
                  <li class="pad__footer__item">Words: </li>
                  <li class="pad__footer__item pad__footer__item--right">last saved: </li>
            </ul>
      </footer>
      </div>
</template>

<script>
    import MainContent from "../components/MainContent/MainContent";
    import auth from "../router/middleware/auth";
    export default {
            middleware: [
                auth
            ],
        name: 'MainView',
        components: {
              MainContent
        },
        props: {
        },
    };
</script>

<style lang="scss" scoped>
@import "../assets/scss/placeholders";
.pad {
      flex: 4;
      display: flex;
      flex-direction: column;

      &__title {
            max-width: 100%;
            border: 0;
            font: inherit;
            font-size: 1.6em;
            outline: none;
            padding: 20px;
            padding-left: 30px;
            padding-top: 25px;
      }

      &__text {
            flex: 1;
            max-width: 100%;
            margin: 0;
            padding: 20px 30px;
            border: 0;
            font: inherit;
            outline: none;
            resize: none;
            line-height: 2;

      }
      &__footer {
            padding: 20px 30px;

      }
      .pad__footer__items {
            @extend %inline-list;
      }

      .pad__footer__item {
            flex: 1;
            font-size: .9em;

            &--right {
                  margin-left: auto;
                  text-align: right;
            }
      }
}
</style>

