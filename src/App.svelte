<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Binding from "./routes/Binding.svelte";
  import Lifecycle from "./routes/Lifecycle.svelte";
  import Context from "./routes/Context.svelte";
  import StoreWritable from "./routes/StoreWritable.svelte";
  import StoreReadable from "./routes/StoreReadable.svelte";
  import StoreDerived from "./routes/StoreDerived.svelte";
  import Slot from "./routes/Slot.svelte";
  import Transition from "./routes/Transition.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="binding">Binding</Link>
    <Link to="lifecycle">Lifecycle</Link>
    <Link to="context">Context</Link>
    <Link to="storeWritable">StoreWritable</Link>
    <Link to="storeReadable">StoreReadable</Link>
    <Link to="storeDerived">StoreDerived</Link>
    <Link to="slot">Slot</Link>
    <Link to="transition">Transition</Link>
  </nav>
  <hr />
  <div>
    <!-- <Route path="/"><Home /></Route> -->
    <!-- <Route path="about"><About /></Route> -->
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="binding" component={Binding} />
    <Route path="lifecycle" component={Lifecycle} />
    <Route path="context" component={Context} />
    <Route path="storeWritable" component={StoreWritable} />
    <Route path="storeReadable" component={StoreReadable} />
    <Route path="storeDerived" component={StoreDerived} />
    <Route path="slot" component={Slot} />
    <Route path="transition" component={Transition} />
  </div>
</Router>

<style>
</style>
