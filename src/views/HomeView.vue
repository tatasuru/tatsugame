<template>
  <div class="home">
    <div v-if="isDisplay">表示される</div>
    <!-- <ul>
      <li v-for="(member,index) in members">{{index}}:{{member}}</li>
      <li v-for="(value,key,index) in book">{{index}}:{{key}}:{{value}}</li>
      <li v-for="book in books" :key="book.key">
        <p>{{book.id}}</p>
        <p>{{book.title}}</p>
        <p>{{book.author}}</p>
      </li>
    </ul> -->
    <button @click="btn()">クリックしてね！！</button>
    <button type="submit">送信する</button>
  </div>
</template>

<style scoped lang="scss">
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data () {
    return {
      isDisplay: true
      // members: [
      //   "A","B","C"
      // ],
      // books:[
      //   {
      //     id: "1",
      //     title:"ttl",
      //     author:"author"
      //   },
      //   {
      //     id: "2",
      //     title:"ttl2",
      //     author:"author3"
      //   },
      //   {
      //     id: "3",
      //     title:"ttl3",
      //     author:"author3"
      //   }
      // ],
      // test: "aaaaaaiiiiii"
    }
  },
  methods: {
    btn () {
      console.log('clicked!!')
    }
  }
}
</script>
