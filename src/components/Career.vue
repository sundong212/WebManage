<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="jobName"
      :rules="nameRules"
      :counter="10"
      label="职位名称"
      required
    ></v-text-field>
    <v-text-field
      v-model="city"
      :rules="nameRules"
      :counter="10"
      label="城市"
      required
    ></v-text-field>
    <v-text-field
      v-model="experience"
      :rules="nameRules"
      :counter="10"
      label="经历要求"
      required
    ></v-text-field>
    <v-text-field
      v-model="edu"
      :rules="nameRules"
      :counter="10"
      label="学历要求"
      required
    ></v-text-field>
     <v-text-field
      v-model="wage"
      :rules="nameRules"
      :counter="10"
      label="薪资"
      required
    ></v-text-field>
     <v-text-field
      v-model="openingNum"
      :rules="nameRules"
      :counter="10"
      label="招聘数量"
      required
    ></v-text-field>
    <v-text-field
      v-model="resumeDes"
      :rules="emailRules"
      label="简历投递邮箱"
      required
    ></v-text-field>
    <v-select
      :items="categoryList"
      v-model="category"
      label="职位类型"
      class="input-group--focused"
      item-text="text"
      item-value="key"
      required
    ></v-select>
    <v-btn>submit</v-btn>
    <v-btn>clear</v-btn>
  </v-form>


</template>

<script>
  export default {
    data: () => ({
      valid: false,
      jobName: '',
      city: '',
      experience: '',
      edu: '',
      wage: '',
      openingNum: '',
      jd: [],
      requirement: [],
      extra: [],
      resumeDes: '',
      category: '',
      categoryList: [
        {
          text: '软件',
          key: 'software'
        },{
          text: '硬件',
          key: 'hardware',
        },{
          text: '设计',
          key: 'design'
        },{
          text: '公关',
          key: 'pr'
        },{
          text: '市场',
          key: 'marketing'
        }
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>