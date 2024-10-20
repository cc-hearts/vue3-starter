<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import type { Props } from './props'

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  active: void 0,
  textHidden: false,
})

const emits = defineEmits<{
  (event: 'update:active', index: number): void
}>()

const internalStyles = reactive({
  '--tab-bar-current-width': '0px',
  '--tab-bar-current-left': '0px',
})

const liElList = ref<HTMLLIElement[] | null>(null)

const activeTabs = ref(-1)
function handleChangeTabs(index: number) {
  const el = liElList.value?.[index]
  if (!el) {
    return
  }
  const { width } = el.getBoundingClientRect()
  internalStyles['--tab-bar-current-left'] = el.offsetLeft + 'px'
  internalStyles['--tab-bar-current-width'] = width + 'px'
  activeTabs.value = index
  emits('update:active', index)
}

watch(
  () => props.active,
  (val) => {
    if (val !== void 0 && val !== activeTabs.value) {
      activeTabs.value = val
    }
  },
)

onMounted(() => {
  if (liElList.value && liElList.value.length > 0) {
    handleChangeTabs(props.active ?? 0)
  }
})
</script>

<template>
  <ul class="tab-bar-wrapper" :style="internalStyles">
    <li
      v-for="(item, index) in columns"
      :key="index"
      ref="liElList"
      :class="[
        activeTabs === index ? 'tab-bar__active' : '',
        textHidden ? 'tab-bar__text-hidden' : '',
      ]"
      @click="handleChangeTabs(index)"
    >
      <template v-if="item.slot">
        <slot :name="item.slot.name">
          {{ item.text }}
        </slot>
      </template>
      <template v-else>
        {{ item.text }}
      </template>
    </li>
  </ul>
</template>

<style>
:root {
  --tab-bar-background: #f5f5f5;
  --tab-bar-active-tab: #fff;

  --tab-bar-border-radius: 4px;
  --tab-bar-current-width: 0px;
  --tab-bar-current-left: 0px;
  --tab-bar-active-color: #007fff;
  --tab-bar-z-index: 1;
}
:root.dark {
  --tab-bar-background: #1a1a1a;
  --tab-bar-active-tab: #292929;
}
</style>

<style lang="scss">
.tab-bar {
  &-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    background-color: var(--tab-bar-background);
    border-radius: var(--tab-bar-border-radius);
    position: relative;

    &,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    & {
      padding: 0 3px;
    }

    li {
      flex: 1;
      text-align: center;
      padding: 0 12px;
      position: relative;
      white-space: nowrap;

      z-index: calc(var(--tab-bar-z-index) + 1);
    }

    &::after {
      content: '';
      width: var(--tab-bar-current-width);
      height: 80%;
      position: absolute;
      border-radius: inherit;
      top: calc(10%);
      left: var(--tab-bar-current-left);
      background-color: var(--tab-bar-active-tab);
      transition: all 0.3s ease;
      z-index: var(--tab-bar-z-index);
    }
  }

  &__active {
    color: var(--tab-bar-active-color);
  }

  &__text-hidden {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
