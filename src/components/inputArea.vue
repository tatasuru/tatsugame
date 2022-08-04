<template>
    <div>
        <p v-if="inputValue">{{inputValue}}</p>
        <input v-else v-model="contactName" type="text" placeholder="名前を入力してください">
        <p v-if="isVali">11文字以上です。</p>
    </div>
</template>

<script>
export default {
  name: 'inputArea',
  data () {
    return {
      contactName: '',
      isVali: false
    }
  },
  props: {
    inputValue: {
      type: String,
      default: ''
    }
  },
  watch: {
    contactName (newValue, oldValue) {
      if (newValue.length >= 11) {
        this.isVali = true
      } else {
        this.isVali = false
      }
      console.log('new: %s, old: %s', newValue, oldValue)
      this.$emit('sendInputValue', newValue)
      this.$emit('isVali', this.isVali)
    }
  },
  methods: {
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
