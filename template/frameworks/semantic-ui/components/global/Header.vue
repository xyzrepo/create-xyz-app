<template>
    <div>
        <div class="ui tablet computer only padded grid">
            <div class="ui borderless fluid huge inverted menu">
                <Logo height="50"/>
                <div class="ui container">
                    <nuxt-link class="header item" to="/"><%= name %></nuxt-link>
                    <nuxt-link class="item" to="/">Home</nuxt-link>
                    <nuxt-link class="item" to="/theming">Theming</nuxt-link>
                </div>
            </div>
        </div>
        <div class="ui mobile only padded grid">
            <div class="ui borderless fluid huge inverted menu">
                <nuxt-link class="header item" to="/"><%= name %></nuxt-link>
                <div class="right menu">
                    <div class="item">
                        <button @click="clickToggle" class="ui icon toggle basic inverted button">
                          <i class="content icon"></i>
                        </button>
                    </div>
                </div>
                <div class="ui vertical borderless fluid inverted menu">
                    <nuxt-link class="item" to="/">Home</nuxt-link>
                    <nuxt-link class="item" to="/theming">Theming</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickToggle: function() {
            $(".mobile.only.grid .ui.vertical.menu").toggle(100);
        }
    }
}
</script>

<style>
.ui.inverted.menu {
    border-radius: 0;
    flex-wrap: wrap;
    border: none;
    padding-left: 0;
    padding-right: 0;
}

.ui.mobile.only.grid .ui.menu .ui.vertical.menu {
    display: none;
}

.ui.inverted.menu .item {
    color: rgb(157, 157, 157);
    font-size: 18px;
}

.ui.inverted.menu .active.item {
    background-color: #080808;
}
</style>
