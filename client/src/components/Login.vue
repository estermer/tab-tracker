<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form">
            <v-text-field
              v-model="email"
              label="Email"
            />
            <br>
            <v-text-field
              type="password"
              v-model="password"
              label="Password"
            />
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn
              dark
              class="cyan"
              @click="login"
            >
              Log In
            </v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import auth from '@/services/authentication'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        const reponse = await auth.login({
          email: this.email.toLowerCase(),
          password: this.password
        })
        console.log(reponse.data)
      } catch (err) {
        this.error = err.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<style scoped>
</style>
