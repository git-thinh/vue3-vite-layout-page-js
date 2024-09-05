<template>
    <form @submit="onSubmit">
        <h2>Todo Test</h2>

        <!-- title -->
        <div class="field">
            <label class="label">Tiêu đề</label>
            <input type="text" class="input" name="title" v-model="title" />
        </div>

        <!-- description -->
        <div class="field">
            <label class="label">Miêu tả</label>
            <textarea class="input" name="description" v-model="description"></textarea>
        </div>

        <!-- submit -->
        <div class="field">
            <button type="submit">Create Todo</button>
        </div>
    </form>
</template>

<script>
    export default defineComponent({
        name: "TodoForm",
        data() {
            return {
                title: "",
                description: "",
            };
        },
        setup() {
            const storeTodo = useTodoStore();
            return { storeTodo };
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();

                if (!this.title) {
                    return;
                }

                // save data into store
                this.storeTodo.addTodo(this.title, this.description);

                // clear data
                this.title = "";
                this.description = "";
            },
        },
    });
</script>