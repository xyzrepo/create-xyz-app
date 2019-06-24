<template>
    <div>
        <h1 class="ui huge header">Theme Examples</h1>
        <p class="lead">
            Use this document as a way to explore theming.
        </p>
        <div class="ui container">
    
            <h2 class="ui dividing header">Site</h2>
            <SemanticSite/>
            <h2 class="ui dividing header">Menu</h2>
            <SemanticMenus/>
            <h2 class="ui dividing header">Button</h2>
            <SemanticButtons/>
            <h2 class="ui dividing header">Table</h2>
            <SemanticTables/>
            <h2 class="ui dividing header">Input</h2>
            <SemanticInputs/>
            <h2 class="ui dividing header">Card</h2>
            <SemanticCards/>
    
        </div>
    
    
    </div>
</template>

<script>
export default {
    mounted() {
        // add popup to show name
        $('.ui:not(.container, .grid)').each(function() {
            $(this)
                .popup({
                    on: 'hover',
                    variation: 'small inverted',
                    exclusive: true,
                    content: $(this).attr('class')
                });
        });
    },
};
</script>
<style>
html {
  position: relative;
  min-height: 100%;
  height: unset;
}
p.lead {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.3em;
    color: #333333;
    line-height: 1.4;
    font-weight: 300;
}

.ui.huge.header {
    font-size: 36px;
}

body>.ui.container {
    margin-top: 3em;
}

/* iframe {
      border: none;
      width: calc(100% + 2em);
      margin: 0em -1em;
      height: 300px;
    } */

/* iframe html {
      overflow: hidden;
    } */

/* iframe body {
      padding: 0em;
    } */

.ui.container>h1 {
    font-size: 3em;
    text-align: center;
    font-weight: normal;
}

.ui.container>h2.dividing.header {
    font-size: 2em;
    font-weight: normal;
    margin: 4em 0em 3em;
}

.ui.table {
    table-layout: fixed;
}
</style>