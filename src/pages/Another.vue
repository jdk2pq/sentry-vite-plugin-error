<template>Another page</template>

<script setup lang="ts">
import { Mask } from 'maska'

const mask = new Mask({
  mask: '9,99#',
  tokens: {
    9: { pattern: /[0-9]/, repeated: true },
  },
  reversed: true,
})
console.log(mask);
</script>
