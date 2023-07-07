<template>
  <VeeForm
    :validation-schema="validationSchema"
    @submit="onSubmit">
    <VeeField
      v-slot="{ field, errorMessage, meta: { dirty } }"
      name="email">
      <p-form-group
        label="Email"
        :error="errorMessage">
        <p-input v-bind="field" />
      </p-form-group>
      <pre>Dirty {{ dirty }}</pre>
    </VeeField>

    <VeeField
      v-slot="{ field, errorMessage, meta: { dirty } }"
      name="password">
      <p-form-group
        label="Email"
        :error="errorMessage">
        <p-input v-bind="field" />
      </p-form-group>
      <pre>Is Dirty: {{ dirty }}</pre>
    </VeeField>

    <p-button>Submit</p-button>
  </VeeForm>
</template>

<script lang="ts" setup>
import { object, string } from 'yup'

const validationSchema = object({
  email: string().required().label('Email'),
  password: string().required().min(6).label('Password'),
})

const onSubmit = (values: Record<string, unknown>) => {
  // eslint-disable-next-line no-console
  console.log(values)
}
</script>
