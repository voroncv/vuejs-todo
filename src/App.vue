<template>
  <div id="app">
    <panel></panel>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <new></new>
          <posts></posts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from './components/Panel'
import New from './components/New'
import Posts from './components/Posts'

export default {
  name: 'app',
  components: {
    Panel,
    New,
    Posts
  }
}
</script>