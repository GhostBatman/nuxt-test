<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="form.email"
                :rules="rules.email"
                label="E-mail"
                required
                name="email"
              ></v-text-field>

              <v-text-field
                :rules="rules.password"
                v-model="form.password"
                type="password"
                name="password"
                label="Password"
                hint="At least 8 characters"
                value=""
                class="input-group--focused"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'login',

  data: () => ({
    valid: false,
    rules: {
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      password: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',
      ]
    },
    form: {
      email: '',
      password: ''
    }
  }),
  computed: {
    ...mapGetters({ IS_AUTH: 'auth/IS_AUTH' })
  },
  mounted() {
    if (this.IS_AUTH) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapMutations({
      SET_AUTH: 'auth/SET_AUTH'
    }),
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.SET_AUTH(true)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
</style>