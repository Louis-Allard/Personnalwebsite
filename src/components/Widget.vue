<template>
<div class="main">
<div class="title-widget"></div>
  <twitter class="widget">
    <a
      class="twitter-timeline"
      data-lang="fr"
      data-width="800"
      data-height="600"
      href="https://twitter.com/lallard_59?ref_src=twsrc%5Etfw"
      >Mon twitter</a
    >
  </twitter>
  </div>
</template>

<script>
import "../sass/widget.scss";
export default {
  name: "Widget",
  data() {
    return {};
  }
};
</script>
