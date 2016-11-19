new Vue({
  el: 'body',
  data: function() {
    return {
      newPostsText: '',
      posts: [
        'First post',
        'Second post'
      ]
    }
  },
  methods: {
    addNewPosts: function () {
      this.posts.push(this.newPostsText)
      this.newPostsText = ''
    }
  }
})
