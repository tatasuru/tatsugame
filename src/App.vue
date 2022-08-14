<template>
  <div id="app">
    <nav>
      <router-link to="/">全メニュー</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

/* =============================================
  //よく使うfont
  ============================================= */
$fontFamilyHiraGo:'Hiragino Sans', Meiryo;
$fontFamilyHiraGo: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
$fontFamilyYuMin: "游明朝", "YuMincho", "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
$fontFamilyHiraMin: "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
$fontFamilyMeiryo: "メイリオ", "Meiryo", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", sans-serif;
$fontFamilyGaramondPremierPro: "garamond-premier-pro", serif;

/* =============================================
  //レスポンシブの設定
  ============================================= */
$tab: 767px;
@mixin tab {
    @media (max-width: ($tab)) {
        @content;
    }
}

.pc_contents{
    display: block;
    @include tab(){
        display: none !important;
    }
}

.sp_contents{
    display: none !important;
    @include tab(){
        display: block !important;
    }
}

/* =============================================
/ get_vwの設定
============================================= */
@function get_vw($size, $viewport: 1536) {
    $rate: 100 / $viewport;
    @return $rate * $size * 1vw;
}

body{
  padding: 0;
  margin: 0;
  background-color: #f2eee6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  width: 95%;
  margin: 20px auto;
}

nav {
  padding: 30px;
  @include tab{
    padding: 0;
  }
  a {
    font-weight: bold;
    color: #000;
    text-decoration: none;
    margin: 0 50px;
    @include tab{
      margin: 0 get_vw(15,375);
    }
    &.router-link-exact-active {
      color: rgb(183, 45, 45);
    }
  }
}
</style>
