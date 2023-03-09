<template>
  <div>
    <label>
      <small class="font-weight-bold">{{ label }}</small>
    </label>
    <input
      :type="type"
      :required="required"
      @change="changeValue"
      class="form-control p-3 mb-3 shadow-none border-0 bg-form-login"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "required"],

  methods: {
    changeValue(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>
