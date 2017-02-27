<template>
  <div v-if="posts.length > 0" class="posts">
  	<h1>All</h1>
	<div class="list-group">
		<a v-for="(post, index) in posts" href="#" class="list-group-item" >{{ post }}
		<span class="pull-right">
			<button class="btn btn-xs btn-danger" @click="removeElement(index)">
				<span class="glyphicon glyphicon-trash"></span>
			</button>
		</span> 
		</a>
	</div>
  </div>
</template>

<script>
export default {
	computed: {
		posts() {
			return this.$store.state.posts
		}
	},
	name: 'posts',
	methods: {
    removeElement(index) {
    	this.$store.dispatch('remove', index)
    }
  }
}
</script>