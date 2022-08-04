<template>

<div>
  <form>
    <div class="inputArea">
      <p>お名前</p>
      <!-- <input v-model="contactName" type="text" placeholder="名前を入力してください" required> -->
      <inputArea @isVali= "isVali = $event"  @sendInputValue= "inputValue = $event" />
    </div>
    <div class="submit">
      <input @click="confirm" type="submit" value="確認する">
    </div>
  </form>
</div>

</template>

<script>
// @ is an alias to /src
import inputArea from '@/components/inputArea.vue'

export default {
  name: 'contact',
  components: {
    inputArea
  },
  data () {
    return {
      inputValue: '',
      isVali: false
    }
  },
  methods: {
    confirm () {
      if (this.isVali) {
        alert('入力項目が正しくありません。')
      } else {
        console.log(this.isVali)
        this.$router.push({ name: 'contactConfirm', params: { key: this.inputValue } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  input,
  button,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
  }
  form{
    width: 80%;
    margin: 0 auto;
    .inputArea{
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        font-size: 16px;
      }
      input{
        width: 70%;
        margin-left: 20px;
        height: 40px;
        border: 1px solid #000;
      }
    }
    .submit{
      width: 30%;
      margin: 0 auto;
      input{
        width: 100%;
        background-color: #000;
        color: #fff;
        appearance: none;
        padding: 10px 0;
      }
    }
  }
</style>
