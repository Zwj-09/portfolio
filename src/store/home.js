import { computed, ref } from "vue";
import { defineStore } from "pinia";

// export const useHomeStore = defineStore("home", {
//   state: () => ({
//     num: 100
//   }),

//   getters: {
//     getNum: (state) => {
//       return state.num;
//     }
//   },

//   actions: {
//     setNumber() {
//       this.num = 1000;
//     }
//   }
// });

export const useHomeStore = defineStore("home", () => {
  const num = ref(100);

  const doubleNum = computed(() => num.value * 2);

  const increment = () => {
    num.value++;
  };

  return {
    num,
    doubleNum,
    increment
  };
});
