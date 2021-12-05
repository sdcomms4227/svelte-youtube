<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Binding from "./routes/Binding.svelte";
  import Lifecycle from "./routes/Lifecycle.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="binding">Binding</Link>
    <Link to="lifecycle">Lifecycle</Link>
  </nav>
  <hr />
  <div>
    <!-- <Route path="/"><Home /></Route> -->
    <!-- <Route path="about"><About /></Route> -->
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="binding" component={Binding} />
    <Route path="lifecycle" component={Lifecycle} />
  </div>
</Router>

<style>
</style>
