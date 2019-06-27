<template>
    <div>
        <h2> Looping </h2>
        <p v-for="(task, i) in tasks" :key="i">{{task}}</p>
    </div>
</template>

<script>
import { mdbBtn } from 'mdbvue';

export default {
    name: 'Looping',
    components: { mdbBtn },
    data() {
        return {
            tasks: ['eat', 'sleep', 'code']
        };
    }
}
</script>

<style scoped>

</style>


