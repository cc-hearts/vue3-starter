import { defineComponent } from 'vue'
import TabsExample from '@/components/tabs/examples/index.vue'
import LoadingExample from '@/components/loading/examples/index.vue'
import InputExample from '@/components/input/examples/index.vue'

export default defineComponent({
  name: 'Home-layout',
  setup() {
    return () => (
      <main class="m-auto text-gray-700 dark:text-gray-200">
        <router-view />

        <section>
          <h2>tabs example</h2>
          <TabsExample />
        </section>

        <section>
          <h2>loading example</h2>
          <LoadingExample />
        </section>

        <section>
          <h2>input example</h2>
          <InputExample />
        </section>
      </main>
    )
  },
})
