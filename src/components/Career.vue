<template>
  <v-form v-model="valid" class="career-form-container">
    <v-select
      :items="categoryList"
      v-model="category"
      label="职位类型"
      class="input-group--focused"
      item-text="text"
      item-value="key"
      required
    ></v-select>
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
    <v-layout row wrap>
      <v-flex class="xs3-flex" xs3>
        <v-text-field
          v-model="experience"
          :rules="nameRules"
          :counter="10"
          label="经历要求"
          required
        ></v-text-field>
      </v-flex>
      <v-flex class="xs3-flex" xs3>
        <v-text-field
          v-model="edu"
          :rules="nameRules"
          :counter="10"
          label="学历要求"
          required
        ></v-text-field>
      </v-flex>
      <v-flex class="xs3-flex" xs3>
        <v-text-field
          v-model="wage"
          :rules="nameRules"
          :counter="10"
          label="薪资"
          required
        ></v-text-field>
      </v-flex>
      <v-flex class="xs3-flex" xs3>
        <v-text-field
          v-model="openingNum"
          :rules="nameRules"
          :counter="10"
          label="招聘数量"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <h1 class='list-title'>职位职责</h1>
         <v-btn class="list-add-btn" @click="addJdTextField">加一条</v-btn>
      </v-flex>
      <v-flex v-for="(field, index) in jdNum" :key="`jd-${index}`" xs12>

        <v-text-field 
          v-model="jd[index].content"
          :counter="80"
          required
        ></v-text-field>

      </v-flex>

      <v-flex xs12>
        <h1 class='list-title'>职位要求</h1>
         <v-btn class="list-add-btn" @click="addJrTextField">加一条</v-btn>
      </v-flex>
      <v-flex v-for="(field, index) in jrNum" :key="`jr-${index}`" xs12>

        <v-text-field 
          v-model="jr[index].content"
          :counter="80"
          required
        ></v-text-field>
        
      </v-flex>

      <v-flex xs12>
        <h1 class='list-title'>加分项</h1>
         <v-btn class="list-add-btn" @click="addExtraTextField">加一条</v-btn>
      </v-flex>
      <v-flex v-for="(field, index) in extraNum" :key="`extra-${index}`" xs12>

        <v-text-field 
          v-model="extra[index].content"
          :counter="80"
          required
        ></v-text-field>
        
      </v-flex>
      
    </v-layout>
    <v-btn>submit</v-btn>
    <v-btn>clear</v-btn>
  </v-form>

</template>

<script>
  export default {
    data: () => ({
      jdNum: 1,
      jrNum: 1,
      extraNum: 1,
      valid: false,
      jobName: '',
      city: '',
      experience: '',
      edu: '',
      wage: '',
      openingNum: '',
      jd: [
        {content: ''}
      ],
      jr: [
        {content: ''}
      ],
      extra: [
        {content: ''}
      ],
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
          text: '实习生',
          key: 'intern'
        }
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {
      addJdTextField: function() {
        this.jdNum++;
        this.jd.push({content: '' })
      },
      addJrTextField: function() {
        this.jrNum++;
        this.jr.push({content: ''})
      },
      addExtraTextField: function() {
        this.extraNum++;
        this.extra.push({content: ''})
      }
    } 
  }

</script>

<style lang="scss" scoped>
.career-form-container{
  width: 80%;
  margin: auto;
  padding-top: 50px;
}
.xs3-flex {
  padding: 0 10px;
}
.list-title{
  display: inline-block;
  vertical-align: top;
}
.list-add-btn {
  display: inline-block;
  vertical-align: top;
}
</style>
