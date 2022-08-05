<template>
  <div class="home">
    <ul class="home_tab">
      <li
        v-for=" tab in tabs"
        :key="tab">
          {{tab}}
      </li>
    </ul>
    <div
      id="udon"
      class="menuListLead">
      <p class="menuName">うどん</p>
      <p class="menuExp">
        丸亀製麺は全店に製麺機を置いて、打ち立て、茹でたての味を実現。<br>
        国産小麦100％にこだわった讃岐うどんのおいしさを、心ゆくまでご堪能ください。
      </p>
      <p class="menuCaution">
        ※お持ち帰りの場合には、表示価格に加えて容器代30円を頂戴します。<br>
        ※得サイズはお持ち帰り対象外です。
      </p>
    </div>
    <div
      id="udonMenuList"
      class="menuList">
      <div
      v-for="product in products"
      :key="product"
      class="menuListBox">
        <div class="img">
          <img :src="product.image">
        </div>
        <ul class="tag">
          <li class="category_01">{{product.cold}}</li>
          <li class="category_02">{{product.takeoutAvailable}}</li>
          <li class="category_03">{{product.shopExclusive}}</li>
        </ul>
        <div class="menuName">
          <p>{{product.name}}</p>
        </div>
        <div class="menuExp">
          <p>{{product.lead}}</p>
        </div>
        <div class="menuPrice">
          <p
            v-for="(value,index) in product.sizeUnits"
            :key="value"
            class="size">
              {{value}}<span v-if="index !== 2">,</span>
          </p>
          <p class="price">10{{product.currency}}</p>
        </div>
      </div>
    </div>
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

p{
  margin: 0;
}

.home{
  width: 100%;
  .home_tab{
    width: 40%;
    margin: 30px auto 100px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    @include tab () {
      width: 90%;
      margin-bottom: 50px;
    }
    li{
      font-size: get_vw(18);
      cursor: pointer;
      @include tab(){
        font-size: get_vw(14,375);
      }
      &:hover{
        font-weight: 600;
        color: rgb(183, 45, 45);
      }
      &.isActive{
        font-weight: 600;
        color: rgb(183, 45, 45);
      }
    }
  }
  .menuListLead{
    width: 50%;
    margin: 0 auto 100px;
    position: relative;
    @include tab(){
      width: 85%;
      margin: 0 0 40px auto;
    }
    .menuName{
      writing-mode: vertical-lr;
      font-size: get_vw(40);
      position: absolute;
      top: 0px;
      left: -80px;
      font-weight: 600;
      height: 200px;
      text-align: left;
      @include tab(){
        font-size: get_vw(35,375);
        left: get_vw(-60,375);
      }
    }
    .menuExp{
      text-align: left;
      font-size: get_vw(16);
      line-height: 2;
      margin-bottom: 10px;
      font-weight: 600;
      @include tab(){
        font-size: get_vw(15,375);
      }
    }
    .menuCaution{
      text-align: left;
      font-size: get_vw(13);
      line-height: 2;
      margin-bottom: 0px;
      @include tab(){
        font-size: get_vw(12,375);
      }
    }
  }
  .menuList{
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    @include tab(){
      width: 95%;
    }
    .menuListBox{
      padding-bottom: 10px;
      width: 30%;
      margin-right: calc((100% - 90%) / 2 );
      margin-bottom: 80px;
      background-color: #fff;
      &:nth-child(3n){
        margin-right: 0;
        @include tab(){
          margin-right: calc(100% - 96%);
        }
      }
      &:nth-child(2n){
        @include tab(){
          margin-right: 0;
        }
      }
      @include tab(){
        width: 48%;
        margin-right: calc(100% - 96%);
      }
      .img{
        width: 100%;
        margin: 0 auto;
        margin-bottom: get_vw(10);
        @include tab(){
          margin-bottom: 5px;
        }
        img{
          width: 100%;
        }
      }
      .tag{
        width: 90%;
        margin: 0 auto;
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
        // margin: 0;
        margin-bottom: 15px;
        @include tab(){
          flex-wrap: wrap;
        }
        li{
          font-size: get_vw(13);
          margin-right: 10px;
          font-weight: 600;
          &:nth-last-child(1){
            margin-right: 0;
          }
          @include tab(){
            font-size: get_vw(11.5,375);
          }
        }
        .category_01{
          color: #fff;
          background-color: rgb(48, 156, 210);
          padding: 2px 5px;
          border-radius: 50%;
        }
        .category_02{
          color: #fff;
          background-color: rgb(183, 45, 45);
          padding: 2px 10px;
          border-radius: 10px;
        }
        .category_03{
          color:#000;
          @include tab(){
            margin-top:5px;
          }
        }
      }
      .menuName{
        width: 90%;
        margin: 0 auto;
        text-align: left;
        margin-bottom: 10px;
        p{
          font-size: get_vw(18);
          font-weight: 600;
          @include tab(){
            font-size: get_vw(16,375);
          }
        }
      }
      .menuExp{
        width: 90%;
        margin: 0 auto;
        text-align: left;
        margin-bottom: 10px;
        p{
          font-size: get_vw(15);
          @include tab(){
            font-size: get_vw(13,375);
          }
        }
      }
      .menuPrice{
        width: 90%;
        margin: 0 auto;
        display: flex;
        @include tab(){
          flex-wrap: wrap;
        }
        .size{
          font-size: get_vw(15);
          &:nth-last-child(1){
            margin-right: 0;
          }
          @include tab(){
            font-size: get_vw(10,375);
            text-align: left;
          }
        }
        .price{
          margin-left: 10px;
          font-size: get_vw(15);
          font-weight: 600;
          @include tab(){
            font-size: get_vw(15,375);
          }
        }
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data () {
    return {
      tabs: ['うどん', '天ぷら', 'ご飯もの', '薬味・トッピング'],
      products: [
        {
          cold: '冷',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/udon_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするうどんになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '冷',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/udon_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするうどんになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '冷',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/udon_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするうどんになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '冷',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/udon_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするうどんになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '冷',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/udon_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするうどんになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        }
      ]
    }
  },
  methods: {
  }
}
</script>
