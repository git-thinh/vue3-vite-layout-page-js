export const useTodoStore = defineStore({
    id: "todo",
    state: () => ({
        todos: [],
    }),
    getters: {
        totalTodos: (state) => state.todos.length,
    },
    actions: {
        addTodo(title, description) {
            const todo = {
                id: Math.floor(Math.random() * 10000), // random ID
                title,
                description,
            };
            this.todos = [todo, ...this.todos];
        },

        async removeTodo(id) {
            // remove todos
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
    },
});