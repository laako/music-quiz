<template>
    <div>
        <Toolbar />
        <router-view />
    </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
export default {
    components: { Toolbar },
};
</script>

<style>
.md-toolbar {
    display: flex;
}

.md .links a {
    color: white;
}
</style>
