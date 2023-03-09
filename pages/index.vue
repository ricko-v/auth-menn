<template>
  <div class="container-fluid">
    <div
      class="row d-flex justify-content-center bg-form-login align-items-center min-vh-100"
    >
      <div class="col-12 col-lg-6">
        <div class="card p-3 bg-white shadow-sm">
          <h3 class="text-center m-0">BELAJAR-AUTH.IO</h3>
          <hr />
          <div style="gap: 15px" class="d-flex w-100 justify-content-center">
            <button
              @click="$router.push('/login')"
              v-if="!isAuth"
              class="btn btn-success shadow-none"
            >
              Masuk
            </button>
            <button
              @click="$router.push('/register')"
              v-if="!isAuth"
              class="btn btn-primary shadow-none"
            >
              Daftar
            </button>
            <button
              @click="logout"
              v-if="isAuth"
              class="btn btn-danger shadow-none"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  computed: {
    isAuth() {
      return this.$store.state.Auth.isAuth;
    },
  },

  methods: {
    logout() {
      this.$store.commit("Auth/setIsAuth", false);
      this.$cookies.removeAll();
    },
  },
};
</script>
