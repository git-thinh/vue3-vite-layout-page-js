<template>
    <div>
        <h3>List Todo</h3>
        <div v-for="todo of storeTodo.todos" :key="todo.id" class="wrapper">
            <div class="header">
                <div class="title">[{{ todo.id }}] {{ todo.title }}</div>
                <div>
                    <button type="button" @click="storeTodo.removeTodo(todo.id)">Delete</button>
                </div>
            </div>
            <div v-if="todo?.description">{{ todo?.description }}</div>
        </div>
    </div>
</template>
<script>
    export default defineComponent({
        name: "TodoList",
        setup() {
            const storeTodo = useTodoStore();
            return { storeTodo };
        },
    });
</script>