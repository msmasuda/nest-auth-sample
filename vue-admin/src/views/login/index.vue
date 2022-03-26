<script setup lang="ts">
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../../store'

  const store = useStore(key)

  const username = ref('')
  const password = ref('')
  const handleSubmit = () => {
    store.commit('login', username.value)
  }
</script>

<template>
  <div>
    <va-form style="width: 300px" tag="form" @submit.prevent="handleSubmit">
      <va-input v-model="username" label="Username" />

      <va-input
        v-model="password"
        class="mt-2"
        type="password"
        label="Password"
      />

      <!-- <va-select
        v-model="value"
        class="mt-2"
        label="Role"
        :options="options"
        clearable
      /> -->

      <va-button type="submit" class="mt-2"> Login </va-button>
    </va-form>
  </div>
</template>
