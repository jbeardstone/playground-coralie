<template>

 <v-form id=connexion>
     <v-container>
      <v-row>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="first"
            label="login"
            outlined >
           </v-text-field>
        </v-col>

    
         <v-col cols="12" sm="6">
          <v-text-field
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show4 ? 'text' : 'password'"
            name="input-10-2"
            label="Error"
            hint="At least 8 characters"
            value="Pa"
            error
            @click:append="show4 = !show4" >
        </v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.passwordConfirm]"
            :type="show4 ? 'text' : 'passwordConfirm'"
            name="input-10-2"
            label="Error"
            hint="At least 8 characters"
            value="Pa"
            error
            @click:append="show4 = !show4"
          ></v-text-field>
        </v-col>
    
        <button type="button" v-on:click="enter()">Connexion</button>

     </v-row>
   </v-container>
 </v-form>
        
</template>


<script>
export default {
 el: '#connexion',
  data() {
      return{
      first: '',
      show4: false,
      password: '',
      }
 },
    rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          passwordConfirm: () => ('wrong password'),
        },

 methods:{
     enter(){
         if(this.v-text-field.login != "" && this.v-text-field.password != "" && this.v-text-field.passwordConfirm != ""){
                if(this.v-text-field.password===this.v-text-field.passwordConfirm){
                    <v-alert border="right" color="blue-grey" dark>
                         You are connected
                    </v-alert>
                }else{
                     <v-alert type="error"> Wrong Password </v-alert>
                }
         }
     }

 }
}
</script>
<style scoped>

</style>

