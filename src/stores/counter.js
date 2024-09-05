export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0
    }),

    getters: {
        value: state => state.counter,
        doubleCount: state => state.counter * 2,
    },

    actions: {
        increment() {
            this.counter++
        },
    }
})