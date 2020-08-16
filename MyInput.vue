<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input
      :id="name"
      :type="type"
      :value="value"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      type: Object // min, required
    },
    value: {
      type: String
    },
    type: {
      type: String
    }
  },
  computed: {
    error() {
      return this.validate(this.value)
    }
  },
  methods: {
    validate(value) {
      if (this.rules.required && !value) {
        return 'Required'
      }

      if (this.rules.min && value.length < this.rules.min) {
        return `Minimum length is ${this.rules.min}`
      }
    },

    input($evt) {
      this.$emit('update', {
        value: $evt.target.value,
        name: this.name,
        valid: this.validate($evt.target.value) ? false : true
      })
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
}

.label {
  display: flex;
  justify-content: space-between;
}

input {
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
}
</style>
