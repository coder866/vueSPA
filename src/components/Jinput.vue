<template>
  <label>
    {{ label }}
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
  </label>
</template>

<script>
export default {
  name: 'JInput',
  props: {
    label: [String],
    value: [String]
  }
};
</script>