<template>
  <div class="w-100">
    <h3 class="font-weight-bold">Bikin akun baru</h3>
    <small>{{ katanime.indo }}</small>

    <p align="right">
      <small class="font-italic text-secondary"
        >~ {{ katanime.character }} dari anime {{ katanime.anime }}</small
      >
    </p>

    <div name="Form Login">
      <Form @submit="register">
        <TextInput
          type="text"
          :required="true"
          label="Nama Lengkap"
          @change="handleName"
        />
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

        <p class="mt-3">
          <small class="text-secondary">
            Dengan mendaftar berarti kamu setuju dengan
            <i>Terms of Service</i> dan <i>Privacy Police</i> dari
            BELAJAR-AUTH.IO
          </small>
        </p>

        <button
          type="submit"
          class="btn bg-purple w-100 mt-2 py-2 text-white shadow-none border-0"
        >
          <small>Mendaftar</small>
        </button>
      </Form>

      <p align="center" class="mt-3">
        <small class="text-secondary">
          Sudah punya akun?
          <NuxtLink to="/login" class="text-purple">Masuk sekarang</NuxtLink>
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
      };
    } catch (e) {
      error({
        message: e,
      });
    }
  },

  layout: "auth",

  methods: {
    handleName(e) {
      this.name = e;
    },
    handleEmail(e) {
      this.email = e;
    },
    handlePassword(e) {
      this.password = e;
    },
    async register(e) {
      e.preventDefault();
      try {
        let tryLogin = await this.$axios.$post("/api/register", {
          email: this.email,
          password: this.password,
          name: this.name,
        });
        this.$router.push("/login");
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
