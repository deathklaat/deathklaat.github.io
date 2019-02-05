<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/terms">Terms</router-link>
            |
            <router-link to="/privacy">Privacy</router-link>
            |
            <router-link to="/cookies">Cookies</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss" src="./scss/_app.scss"></style>
