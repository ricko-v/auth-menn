<template>
  <div>
    <div v-if="$store.state.Auth.isChecked" class="container-fluid">
      <div class="row position-relative">
        <div
          name="Left Content"
          class="col-12 col-lg-6 min-vh-100 d-flex w-100 align-items-center p-5"
        >
          <nuxt />
        </div>

        <div
          name="Right Content"
          style="right: 0"
          class="col-12 d-none position-fixed col-lg-6 p-0 bg-login text-white min-vh-100 d-lg-flex align-items-center"
        >
          <div>
            <div name="Banner IMG" class="position-relative text-center">
              <div class="position-absolute h-100 w-100">
                <img
                  alt="banner"
                  :src="require('~/assets/img/login-circle.png')"
                  class="w-100 img-fluid h-100"
                />
              </div>
              <div>
                <img
                  alt="banner"
                  :src="require('~/assets/img/login.png')"
                  class="img-fluid mt-5"
                />
              </div>
            </div>

            <div name="Text Area" class="px-5 mt-3">
              <p class="text-secondary small font-weight-bolder">
                BELAJAR-AUTH.IO
              </p>
              <p>
                BELAJAR SISTEM AUTENTIKASI DARI BERBAGAI TEKNOLOGI YANG ADA.
                <br />
                SAAT INI:
                <span class="text-danger font-weight-bold">M</span>ONGO
                <span class="text-danger font-weight-bold">E</span>XPRESS
                <span class="text-danger font-weight-bold">N</span>UXT
                <span class="text-danger font-weight-bold">N</span>ODE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!$store.state.Auth.isChecked">
      <Loading />
    </div>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (store.state.Auth.isAuth) {
      return redirect("/");
    }
  },
};
</script>
