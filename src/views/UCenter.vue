<template>
  <div>
    个人信息
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
 components: {
    pdf
  },
  data() {
		return {
			currentPage: 0,
			pageCount: 0,
		}
	}
}
</script>

<style>

</style>