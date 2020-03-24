<template lang="pug">
  v-form#connexion(
    ref="formulaire"
    v-model="valid"
    lazy-validation=''
  )
    v-container
      v-row
        v-col(cols='3') {{ login }}
        v-col(cols='3') {{ password }}
        v-col(cols='3') {{ password_confirmation }}
        v-col(cols='3') {{ valid }}
      v-row
        v-col(cols='12')
          v-text-field(
            v-model='login'
            id='login'
            label='login'
            hint='Saisir votre login, username ou email'
            :rules="[required('login'), minLength('login', 5), maxLength('login', 128)]"
            outlined=''
            counter=''
          )
        v-col(cols='12')
          v-text-field(
            v-model='password'
            id='password'
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show4 ? 'text' : 'password'"
            :rules="[required('password'), minLength('password', 5), maxLength('password', 128)]"
            name='input-10-2'
            label='Mot de passe'
            hint='Saisissez votre mot de passe'
            @click:append='show4 = !show4'
            outlined=''
          )
        v-col(cols='12')
          v-text-field(
            v-model='password_confirmation'
            id='password_confirmation'
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show4 ? 'text' : 'password'"
            :rules="[required('password'), minLength('password', 5), maxLength('password', 128), passwordValidation(password, password_confirmation)]"
            name='input-10-2'
            label='Mot de passe'
            hint='Saisissez votre mot de passe une seconde fois'
            @click:append='show4 = !show4'
            outlined=''
            )
        v-col(cols='3')
          v-btn(
            type='button'
            class='success'
            @click.prevent='reset()'
          ) Reset
        v-col(cols='3')
          v-btn(
            :disabled='!valid'
            type='button'
            class='primary'
            @click.prevent='enter()'
          ) Connexion
</template>

<script>
import validators from '@/plugins/validator'
export default {
  data() {
    return {
      show4: false,
      valid: false,
      login: '',
      password: '',
      password_confirmation: '',
      ...validators
    }
  },
  methods: {
    validate() {
      this.$refs.formulaire.validate()
    },
    reset() {
      this.$refs.formulaire.reset()
    },
    resetValidation() {
      this.$refs.formulaire.resetValidation()
    },
    enter() {
      if (this.password !== this.password_confirmation) return false
      console.log("c'est bon")
      console.log('User : ', this.login)
      console.log('Pwd : ', this.password)
    }
  }
}
</script>
