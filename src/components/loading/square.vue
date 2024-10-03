<script setup lang="ts">
defineOptions({
  name: 'SquareLoading',
})
</script>

<template>
  <div class="square-loading-wrapper">
    <div v-for="item in 3" :key="item" class="square">
      <span v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$background-color: #f51951;
$name: 'square-rotate';

.square-loading-wrapper {
  margin: auto;
  & > div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@keyframes square-rotate1 {
  20%,
  75% {
    transform: translate(0) rotate(0deg);
  }
  40%,
  55% {
    transform: translate(40px) rotate(-90deg);
  }
}

@keyframes square-rotate2 {
  15%,
  80% {
    transform: translate(0) rotate(0deg);
  }
  35%,
  60% {
    transform: translate(40px) rotate(-90deg);
  }
}

@keyframes square-rotate3 {
  10%,
  85% {
    transform: translate(0) rotate(0deg);
  }
  30%,
  65% {
    transform: translate(40px) rotate(-90deg);
  }
}

@keyframes square-rotate4 {
  5%,
  90% {
    transform: translate(0) rotate(0deg);
  }
  25%,
  70% {
    transform: translate(40px) rotate(-90deg);
  }
}

@mixin animation-square-loop($i, $n) {
  @if $i <= $n {
    &:nth-child(#{$i}) {
      animation: #{$name}#{$i} 2s infinite ease-in;
    }
    @include animation-square-loop($i + 1, $n);
  }
}

@mixin animation-loop($index, $n) {
  @if $index <= $n {
    &:nth-child(#{$index}) {
      span {
        @include animation-square-loop(1, 4);
        animation-delay: #{$index}00ms !important;
      }
    }
    @include animation-loop($index + 1, $n);
  }
}

.square {
  line-height: 1;

  span {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 4px;
    background-color: $background-color;
    border-radius: 2px;
  }

  @include animation-loop(1, 3);
}
</style>
