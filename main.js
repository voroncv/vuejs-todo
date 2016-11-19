new Vue({
  el: 'body',
  data: function() {
    return {
      postsText: '',
      posts: [
        'First pages',
        'Second pages',
        'Three pages'
      ]
    }
  },
  methods: {
    newPosts: function () {
      this.posts.push(this.postsText)
      this.postsText = ''

    },
    removeElement : function (post) {
      this.posts.$remove(post)
    }
  }
})
