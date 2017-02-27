export default {
	remove(state, index) {
		state.posts.splice(index, 1)
	},
	new(state, postsText) {
		state.posts.push(postsText)
	}
}