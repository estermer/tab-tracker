<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="tab-tracker-form"
            autocomplete="off"
          >
            <v-text-field
              v-model="email"
              label="Email"
            />
            <br>
            <v-text-field
              type="password"
              v-model="password"
              label="Password"
              autocomplete="new-password"
            />
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn
              dark
              type="submit"
              class="cyan"
              @click="register"
            >
              Register
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
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        const reponse = await auth.register({
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
