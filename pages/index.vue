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
        <v-card class="elevation-12" :loading="loading">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>User card</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="user.avatar_url"
          >
          </v-img>
          <v-list class="transparent">
            <v-list-item
              v-for="(value, name) in userData"
              :key="name"
            >
              <v-list-item-title class="">
                <span class="property-name">{{ name }}</span>
              </v-list-item-title>
              <v-list-item-subtitle class="text-right">
                {{ value }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'user',
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapGetters({ user: 'auth/GET_USER' }),
    userData() {
      const {
        login,
        name,
        company,
        location,
        email,
        bio
      } = this.user

      return { login, name, company, location, email: email || 'MS@gmail.com', bio }
    },
  },
  async mounted() {
    try {
      await this.GET_USER()
      this.loading = false
    } catch (e) {
      console.log(e)
    }

  },
  methods: {
    ...mapActions({ GET_USER: 'auth/GET_USER' }),
  }
}
</script>

<style scoped lang="scss">
.property-name {
  text-transform: capitalize;
}
</style>