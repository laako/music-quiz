<template>
    <md-toolbar class="md-primary">
        <div class="title">
            <h3>Musavisa</h3>
        </div>
        <div class="links">
            <md-button to="/login">Login</md-button>
        </div>
    </md-toolbar>
</template>

<script>
export default {
    name: 'Toolbar',
};
</script>

<style scoped>
.title {
    flex: 1;
}
.links a {
    color: white;
}
</style>
