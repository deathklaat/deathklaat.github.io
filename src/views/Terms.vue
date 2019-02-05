<template>
  <div class="terms">
    <h1>This is an terms page</h1>
    <button @click="goBack();">TEST</button>
  </div>
</template>

<script>
export default {
  name: "terms",
  methods: {
    goBack() {
        this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
@import '../scss/docs.scss';
</style>