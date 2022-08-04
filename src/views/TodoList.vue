<template>
  <div class="todoList">
    <div class="enterArea">
      <input type="text" v-model="addText">
      <button @click="submit()">決定</button>
    </div>
    <ul class="listArea">
      <div v-if="submitText.length !== 0">
        <li v-for="(item,index) in submitText" :key="index">
          <p>{{item}}</p>
          <button @click="deleteBtn(index)">削除</button>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>

// @ is an alias to /src

export default {
  name: 'TestView',
  components: {

  },
  data () {
    return {
      addText: '',
      submitText: []
    }
  },
  mounted () {
    this.submitText = JSON.parse(localStorage.getItem('todoContent'))
  },
  methods: {
    submit () {
      this.submitText.push(this.addText)
      this.addText = ''
      localStorage.setItem('todoContent', JSON.stringify(
        this.submitText
      ))
    },
    deleteBtn (index) {
      this.addText = ''
      this.submitText.splice(index, 1)
      localStorage.setItem('todoContent', JSON.stringify(
        this.submitText
      ))
    }
  }
}
</script>

<style scoped lang="scss">
.todoList{
  width: 50%;
  margin: 0 auto;
  .enterArea{
    display: flex;
    align-items: center;
    justify-content: space-between;
    input{
      width: 70%;
    }
    button{
      width: 20%;
      font-size: 16px;
    }
  }
  .listArea{
    padding: 0;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        text-align: left;
        width: 70%;
        font-size: 16px;
      }
      button{
        width: 20%;
        font-size: 16px;
      }
    }
  }
}
</style>
