<template>
  <div class="grid-content bg-purple overview-shadow">
 
    <MarketBoard/>
  </div>
</template>

<script>
import MarketBoard from '@/components/MarketBoard'

export default {
  components: {
    MarketBoard
  },
  data () {
    return {
    }
  },
  methods: {
    
  },
  mounted(){
    console.log(this.$route);
  }
}
</script>
