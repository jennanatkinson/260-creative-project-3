<template>
  <div class="content">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="shop-item center">
        <h4>{{ product.name }}</h4>
        <p>${{ product.price }}</p>
        <button class="shopButton"
        @click="toggleFavorite(product.id)">
          {{getFavoriteMessage(product.id)}}
        </button>
      </div>
      <div class="shop-item-picture small-image center" :id="'product' + product.id">
        <img :src="require('../assets/images/shop/' + product.image)"/>
      </div>
      <div class="break"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array,
  },
  data() {
    return {
    }
  },
  methods: {
    toggleFavorite(itemID) {
      this.$root.$data.products[itemID - 1].attributes.favorite = !this.$root.$data.products[itemID - 1].attributes.favorite;
    },
    getFavoriteMessage(itemID) {
      if (this.$root.$data.products[itemID - 1].attributes.favorite) {
        return "Unfavorite"
      }
      else {
        return "Favorite"
      }
    }
  }
};
</script>

<style scoped>
h4 {
  font-size: 20px;
  font-weight: 300;
}
.small-image {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-size: cover;
}
/*This makes the scallable square work*/
/*.small-image:after { 
  content: "";
  display: block;
  padding-bottom: 100%;
}*/
.content {
  display: block;
  margin-top: 30px;
  margin-bottom: 100px;
}
.content h4 {
  text-transform: uppercase;
}
.break {
  margin-top: 150px;
}
.shopButton {
  background-color: #3F5957;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
}
.shopButton:hover {
  background-color: #73908F;
}
.shop-favorite-selected {
  border: 2px;
  border-color: #73908F;
}
.shop-nutrition {
  margin-top: 20px;
}
.product img {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: cover;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
  h4 {
    font-size: 25px;
  }
  .product {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
    height: auto;
  }
  .shop-item {
    height: 300px;
    width: 50%;
    padding-top: 200px;
  }
  .shop-item-pic {
    width: 600px;
  }
  .small-image {
    width: 40%;
  }
  .break {
    margin-top: 50px;
    flex-basis: 100%;
    height: 0;
  }
}

</style>