<template>
  <div class="home">
    <ul class="home_tab">
      <li
      :class="{'active': isActive === '1' }"
      @click="isSelect('1')">
        うどん
      </li>
      <li
      :class="{'active': isActive === '2' }"
      @click="isSelect('2')">
        天ぷら
      </li>
      <li
      :class="{'active': isActive === '3' }"
      @click="isSelect('3')">
        ご飯もの
      </li>
      <li
      :class="{'active': isActive === '4' }"
      @click="isSelect('4')">
        薬味・トッピング
      </li>
    </ul>
    <div
    v-show="isActive === '1'"
    class="contents">
      <div class="menuListLead">
        <p class="menuName">うどん</p>
        <p class="menuExp">
          たつ亀製麺は全店に製麺機を置いて、打ち立て、茹でたての味を実現。<br>
          国産小麦100％にこだわった讃岐うどんのおいしさを、心ゆくまでご堪能ください。
        </p>
        <p class="menuCaution">
          ※お持ち帰りの場合には、表示価格に加えて容器代30円を頂戴します。<br>
          ※得サイズはお持ち帰り対象外です。
        </p>
      </div>
      <div class="menuList">
        <div
        v-for="product in filterTakeout_01"
        :key="product"
        class="menuListBox">
          <div class="img">
            <img :src="product.image">
          </div>
          <ul class="tag">
            <li
            v-if="product.cold"
            class="category_01">
              {{product.cold}}
            </li>
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
    <div
    v-show="isActive === '2'"
    class="contents">
      <div class="menuListLead">
        <p class="menuName">天ぷら</p>
        <p class="menuExp">
          だしとの相性にこだわった天ぷらは、うどんのおいしさを引き立てる最高の相棒。<br>
          アツアツ、サクサクの揚げたてをどうぞ。
        </p>
      </div>
      <div class="menuList">
        <div
        v-for="product in filterTakeout_02"
        :key="product"
        class="menuListBox">
          <div class="img">
            <img :src="product.image">
          </div>
          <ul class="tag">
            <li
            v-if="product.cold"
            class="category_01">
              {{product.cold}}
            </li>
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
    <div
    v-show="isActive === '3'"
    class="contents">
      <div class="menuListLead">
        <p class="menuName">ご飯もの</p>
        <p class="menuExp">
          国産米をふっくら炊きあげました。<br>
          のりの風味が香るおむすびは、4種類の味をお楽しみいただけます。
        </p>
        <p class="menuCaution">
          ※丼のお持ち帰りの場合には、表示価格に加えて容器代30円を頂戴します。<br>
          ※一部店舗で販売していない場合があります。
        </p>
      </div>
      <div class="menuList">
        <div
        v-for="product in filterTakeout_03"
        :key="product"
        class="menuListBox">
          <div class="img">
            <img :src="product.image">
          </div>
          <ul class="tag">
            <li
            v-if="product.cold"
            class="category_01">
              {{product.cold}}
            </li>
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
    <div
    v-show="isActive === '4'"
    class="contents">
      <div class="menuListLead">
        <p class="menuName other">薬味・<br>トッピング</p>
        <p class="menuExp">
          お好みの味にカスタマイズ。<br>
          自由なアレンジで、自分だけの味を見つけてください。
        </p>
        <p class="menuCaution">
          ※お持ち帰りの場合には、表示価格に加えて容器代30円を頂戴します。<br>
          ※得サイズはお持ち帰り対象外です。
        </p>
      </div>
      <div class="menuList">
        <div
        v-for="product in filterTakeout_04"
        :key="product"
        class="menuListBox">
          <div class="img">
            <img :src="product.image">
          </div>
          <ul class="tag">
            <li
            v-if="product.cold"
            class="category_01">
              {{product.cold}}
            </li>
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data () {
    return {
      // tabs: ['うどん', '天ぷら', 'ご飯もの', '薬味・トッピング'],
      isActive: '1',
      products_01: [
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
          takeoutOnly: true
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
          takeoutOnly: true
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
          takeoutOnly: true
        }
      ],
      products_02: [
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/tempura_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする天ぷらになります。',
          name: 'たつるの限定天ぷら',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/tempura_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする天ぷらになります。',
          name: 'たつるの限定天ぷら',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: true
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/tempura_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする天ぷらになります。',
          name: 'たつるの限定天ぷら',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: true
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/tempura_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする天ぷらになります。',
          name: 'たつるの限定天ぷら',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/tempura_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする天ぷらになります。',
          name: 'たつるの限定天ぷら',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        }
      ],
      products_03: [
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/onigiri_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするおにぎりになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/onigiri_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするおにぎりになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: true
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/onigiri_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするおにぎりになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/onigiri_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするおにぎりになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: true
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/onigiri_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しするおにぎりになります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        }
      ],
      products_04: [
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/yakumi_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする薬味になります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: true
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/yakumi_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする薬味になります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/yakumi_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする薬味になります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/yakumi_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする薬味になります。',
          name: 'たつるの限定うどん',
          price: { default: true, number: 690, unit: '並' },
          priceNotes: null,
          shopExclusive: '店舗限定',
          sizeUnits: ['特大', 'めちゃ特大', 'ギガ'],
          takeoutAvailable: 'お持ち帰り可',
          takeoutOnly: false
        },
        {
          cold: '',
          currency: '円',
          hot: false,
          href: '',
          image: require('@/assets/yakumi_01.jpeg'),
          lead: 'たつるが一日一食限定でお出しする薬味になります。',
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
  computed: {
    filterTakeout_01 () {
      return this.products_01.filter(item => item.takeoutOnly)
    },
    filterTakeout_02 () {
      return this.products_02.filter(item => item.takeoutOnly)
    },
    filterTakeout_03 () {
      return this.products_03.filter(item => item.takeoutOnly)
    },
    filterTakeout_04 () {
      return this.products_04.filter(item => item.takeoutOnly)
    }
  },
  methods: {
    isSelect: function (num) {
      this.isActive = num
    }
  }
}
</script>
