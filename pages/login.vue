<template>
  <div class="w-100">
    <h3 class="font-weight-bold">Masuk ke akun kamu</h3>
    <small>{{ katanime.indo }}</small>

    <p align="right">
      <small class="font-italic text-secondary"
        >~ {{ katanime.character }} dari anime {{ katanime.anime }}</small
      >
    </p>

    <div name="Form Login">
      <Form @submit="login">
        <TextInput
          type="email"
          :required="true"
          label="Email"
          @change="handleEmail"
        />
        <TextInput
          type="password"
          :required="true"
          label="Kata Sandi"
          @change="handlePassword"
        />

        <button
          type="submit"
          class="btn bg-purple w-100 mt-2 py-2 text-white shadow-none border-0"
        >
          <small>Masuk</small>
        </button>
      </Form>

      <p align="center" class="mt-3">
        <small class="text-secondary">
          Belum punya akun?
          <NuxtLink to="/register" class="text-purple"
            >Daftar sekarang</NuxtLink
          >
        </small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      let random = Math.floor(Math.random() * 34);
      let getQuotes = await $axios(`https://katanime.vercel.app/api/getrandom`);
      let response = getQuotes.data.result[0];

      return {
        katanime: response,
        email: "",
        password: "",
        nama: "",
      };
    } catch (e) {
      error({
        message: e,
      });
    }
  },

  layout: "auth",

  methods: {
    handleEmail(e) {
      this.email = e;
    },
    handlePassword(e) {
      this.password = e;
    },
    async login(e) {
      e.preventDefault();
      try {
        let tryLogin = await this.$axios.$post("/api/login", {
          email: this.email,
          password: this.password,
        });

        this.$cookies.set("token-menn", tryLogin.token);
        this.$store.commit("Auth/setIsAuth", true);
        this.$router.push("/");
      } catch (e) {
        if (e.response) {
          this.$bvToast.toast(`${e.response.data.message}`, {
            title: "Gagal",
            autoHideDelay: 3000,
            appendToast: true,
            variant: "danger",
          });
        } else {
          this.$nuxt.error({
            message: e,
          });
        }
      }
    },
  },
};
</script>
