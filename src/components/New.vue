<template>
  <div class="new">
    <h1>Create new</h1>
      <form onsubmit="return false;">
        <div class="form-group">
        <input v-model="postsText" v-on:keyup.enter="newPosts(postsText)" type="text" class="form-control" placeholder="Enter text">
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'new',
  data() {
  	return {
  		postsText: ''
  	}
  },
  methods: {
    newPosts (postsText) {
      this.$store.commit('new', postsText)
      this.postsText = ''
    }
  }
}
</script>