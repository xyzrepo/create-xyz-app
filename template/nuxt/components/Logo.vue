<template>
  <img :width='width' :height='height' src="~/assets/LogoOfficial.png" alt="XYZ Logo">
</template>
<script>
export default {
  props:['width','height','size']
}
</script>