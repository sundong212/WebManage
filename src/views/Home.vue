<template>
  <v-container fluid> 
    <v-layout row wrap>
      <v-flex xs3>
        <Input />
      </v-flex>
      <v-flex xs9>
        <Preview />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Input from '../components/Input'
  import Preview from '../components/Preview'

  export default {
    components: {
      Input,
      Preview
    }
  }
</script>
