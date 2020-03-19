<template lang="pug">
  v-layout(column='' justify-center='' align-center='')
    v-flex(xs12='' sm8='' md6='')
      h1 Yoooohooo
      FvLoginForm
</template>

<script>
import FvLoginForm from '@/components/FvLoginForm'

export default {
  components: {
    FvLoginForm
  }
}
</script>
