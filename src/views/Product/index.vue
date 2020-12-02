<template>
  <div class="product-container">
    <ProductHand />
    <ProductList />
    <ProductPagination />
    <ProductAdd />
    <ProdcutEditor />
  </div>
</template>

<script>
import ProductList from "./ProductList";
import ProductPagination from "./ProductPagination";
import ProductAdd from "./ProductAdd";
import ProductHand from "./ProductHand";
import ProdcutEditor from "./ProdcutEditor";
export default {
  name: "index",
  components: {
    ProductList,
    ProductPagination,
    ProductAdd,
    ProductHand,
    ProdcutEditor,
  },
};
</script>

<style>
</style>