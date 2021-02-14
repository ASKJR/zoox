<template>
  <section class="hero is-info has-text-centered block">
    <div class="hero-body">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style></style>
