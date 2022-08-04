<template>
  <div class="test">
    <p class="test__txt">test</p>
    <!-- <button @click="changeArray">配列かえるよ！</button> -->
    <arrBtn @my-click="changeIsTestData" />
    <arrBtn greet = '配列を変えるよ' />
    <arrBtn :testArr = testData />
    <!-- <div>{{ testData }}</div> -->
    <div v-if="isTestData">
      <div
        v-for="(item, index) in testData"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div v-else>
      <div
        v-for="(item, index) in testData2"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import arrBtn from '@/components/arrBtn.vue'

export default {
  name: 'TestView',
  components: {
    arrBtn
  },
  data () {
    return {
      data: 'Hello world!!',
      testData: [1, 2, 3],
      testData2: [4, 5, 6],
      isTestData: true
    }
  },
  methods: {
    changeIsTestData (value) {
      this.isTestData = value
    }
  }
}
</script>

<style scoped lang="scss">
.test{
  .test__txt{
    color: red;
  }
}
</style>
