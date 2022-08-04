<template>
    <button @click="changeArray">{{ greet }}</button>
</template>

<script>
export default {
  name: 'arrBtn',
  data () {
    return {
      isTestData: true
    }
  },
  props: {
    greet: {
      type: String,
      default: 'ボタンだよ'
    },
    testArr: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeArray () {
      this.isTestData = !this.isTestData
      this.$emit('my-click', this.isTestData)
    }
  }
}
</script>
