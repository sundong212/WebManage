<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs3>
        <v-subheader>类型</v-subheader>
      </v-flex>
      <v-flex xs9>
        <v-select
          :items="typeList"
          v-model="inputType"
          label="选择"
          class="input-group--focused"
          item-text="text"
          item-value="key"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="inputType=='title'">
      <v-flex xs12>
        <v-textarea
          name="title-input"
          label="标题内容"
          v-model="titleContent"
          :value="titleContent"
          textarea
          error-count=20
          auto-grow
        ></v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-btn color="primary" v-on:click.native="submitTitle">提交</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else-if="inputType=='imgSrc'">
      <v-flex xs12>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
      </v-flex>
      <v-flex xs12>
        <v-btn color="primary" v-on:click.native="submitTitle">上传</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else-if="inputType=='abstract'">
      <v-flex xs12>
        <v-textarea
          name="title-input"
          label="标题内容"
          v-model="abstract"
          :value="abstract"
          textarea
          error-count=20
          auto-grow
        ></v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-btn color="primary" v-on:click.native="submitAbstract">提交</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else-if="inputType=='img'">
      <v-flex xs12>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onContentImgPicked"
					>
				</v-flex>
      </v-flex>
      <v-flex xs12>
        <v-btn color="primary" v-on:click.native="submitTitle">上传</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else-if="inputType=='text'">
      <v-flex xs12>
        <v-textarea
          name="title-input"
          label="新闻内容段落"
          v-model="contentText"
          :value="contentText"
          textarea
          auto-grow
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-btn color="primary" v-on:click.native="submitContentText">提交</v-btn>
      </v-flex>
      <v-flex xs6>
        <v-checkbox
          label="加粗"
          v-model="contentBold"
        ></v-checkbox>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      inputType: 'title',
      titleContent: null,
      contentText: null,
      abstract: null,
      contentBold: false,
      typeList: [
        { 
          text: '标题',
          key: 'title'
        },
        {
          text: '配图',
          key: 'imgSrc'
        },
        { 
          text: '摘要',
          key: 'abstract'
        },
        { 
          text: '新闻图片',
          key: 'img'
        },
        { 
          text: '新闻段落',
          key: 'text'
        },
      ],
      title: "Image Upload",
      dialog: false,
      imageName: '',
      imageUrl: '',
      imageFile: '',
      contentImgUrl: '',
      contentImgFile: '',
      contentImgName: '',
    }),
    
    methods: {
      ...mapMutations([
        'SET_NEWS_TITLE',
        'SET_NEWS_IMGSRC',
        'SET_NEWS_ABSTRACT',
        'ADD_CONTENT',
        'DELETE_CONTENT'
      ]),
      ...mapActions([
        'setNewsTitle',
        'setNewsImgsrc',
        'setNewsAbstract',
        'addContent',
        'deleteContent',
      ]),
      submitTitle: function() {
        this.setNewsTitle(this.titleContent);
      },
      submitAbstract: function() {
        this.setNewsAbstract(this.abstract)
      },
      submitContentText: function() {
        console.log(this.contentBold);
        this.addContent({
          type: 'text',
          bold: this.contentBold,
          context: this.contentText
        });
        this.contentText = null;
      },


      pickFile () {
        this.$refs.image.click()
      },
      onFilePicked (e) {
        const files = e.target.files
        if(files[0] !== undefined) {
          this.imageName = files[0].name
          if(this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
            this.setNewsImgsrc(this.imageUrl);
          })

        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      },
      onContentImgPicked (e) {
        const files = e.target.files
        if(files[0] !== undefined) {
          this.contentImgName = files[0].name
          if(this.contentImgName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.contentImgUrl = fr.result
            this.contentImgFile = files[0] // this is an image file that can be sent to server...
            this.addContent({
              type: 'img',
              src: this.contentImgUrl
            });
          })

        } else {
          this.contentImgName = ''
          this.contentImgFile = ''
          this.contentImgUrl = ''
        }
      }
    }
  }
</script>

<style>

</style>
