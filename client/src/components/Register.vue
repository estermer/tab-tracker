<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <br>
    <div class="error" v-html="error"/>
    <br>
    <button
      @click="register"
    >
      Register
    </button>
  </div>
</template>

<script>
import auth from '@/services/authentication'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const reponse = await auth.register({
          email: this.email,
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
  .error {
    color: red;
  }
</style>
