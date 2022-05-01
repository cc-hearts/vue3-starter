/**
 * @author heart
 * @description 鼠标点击位置
 * @Date 2022-04-30
 */
import { reactive, onMounted, onBeforeUnmount } from 'vue'
let isInit = false
const obj = {
  x: 0,
  y: 0
}
export default function () {
  const mouseDown = reactive(obj)
  const ev = (e: MouseEvent) => {
    mouseDown.x = e.clientX
    mouseDown.y = e.clientY
  }
  if (!isInit) {
    isInit = true
    onMounted(() => {
      console.log('onMounted')
      window.addEventListener('mousedown', ev)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('mousedown', ev)
    })
  }
  return mouseDown
}
