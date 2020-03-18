<template>

 <v-form id=connexion>

    <input type="text" name="login" placeholder="login" />
    <input type="password" name="password"  placeholder="password" />
    <input type="password" name="passwordConfirm" placeholder="passwordConfirm" />
    <button type="button" v-on:click="enter()">Connexion</button>

 </v-form>
        
</template>
<script>
export default {
 el: '#connexion',
 data(){
     return{
         input:{
             login : "",
             password : "",
             passwordConfirm : ""
         }
     }
 },

 methods:{
     enter(){
         if(this.input.login != "" && this.input.password != "" && this.input.passwordConfirm != ""){
                if(this.input.password===this.input.passwordConfirm){
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