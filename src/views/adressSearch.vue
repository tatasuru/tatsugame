<template>

<div class="adressSearch">
    <div class="adressSearchInput">
        <input type="text" placeholder="住所を入力する">
        <button>検索する</button>
    </div>
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'adressSearch',
  data () {
    return {
      inputValue: '',
      isVali: false
    }
  }
}
</script>

<style scoped lang="scss">

.adressSearchInput{
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    input{
        width: 65%;
    }
    button{
        width: 20%;

    }
}

</style>
