Vue.component('accordion', {
  data() {
    return {
      accordion: {
        isOpen: false,
      },
    };
  },
  methods: {
    toggleMenu() {
      this.accordion.isOpen = !this.accordion.isOpen;
    },
  },
  template: `
  <div class="menu">
        <a class="menu__head" @click="toggleMenu()">
          <slot name="title"></slot>
          <i
            v-show="!accordion.isOpen"
            class="fas fa-chevron-down fa-2x menu__icon"
          ></i>
          <i
            v-show="accordion.isOpen"
            class="fas fa-chevron-up fa-2x menu__icon"
          ></i>
        </a>
        <div v-show="accordion.isOpen" class="menu__body">
          <slot name="content"></slot>
        </div>
      </div>
  `,
});

new Vue({
  el: '#app',
});
