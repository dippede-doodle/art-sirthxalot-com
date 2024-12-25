<template>
  <div class="callout"
       data-type="success"
       data-closable="yes"
       role="banner"
       ref="topbar"
  >
    <button class="icon--close">
      <i class="fal fa-times-circle text-2xl"
         aria-label="close"
         aria-hidden="true"
      />
    </button>
    <div class="callout__container animate-slidein opacity-0" >
      Notification goes here...
    </div>
  </div>
</template>
<script setup lang="ts">
</script>