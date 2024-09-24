<script>
  import { Link, Route, Router } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';

  import HomeIcon from './assets/home.svg';
  export let url = '';
</script>

<div id="app" class="lg:w-1/3 mx-auto">
  <Router {url}>
    <nav class="flex items-center w-full p-3">
      <div class="flex-grow flex text-lg">
        <Link to="/solo">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={HomeIcon} alt="Home" class="h-4"/>
          </div>
        </Link>
      </div>
      <Link class="text-xs text-gray-500 p-2" to="/change-log">
        v1.240924.01
      </Link>
    </nav>
    <section>
      <Route path="/" component={Home} />
    </section>
  </Router>
</div>

<style lang="postcss">
  .active {
    @apply bg-gray-700 text-gray-100 border-gray-100;
  }
</style>
