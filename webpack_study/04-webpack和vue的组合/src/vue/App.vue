<template>
  <div class="">
    <h2>
      {{message}}
    </h2>
    <Cpn></Cpn>
  </div>
</template>

<script type="text/javascript">
import Cpn from './mathutil.vue'
export default {
  data() {
    return {
      message:"Hello Vue"
    }
  },
  components: {
    Cpn
  }
}
</script>

<style lang="stylus" scoped>
</style>
