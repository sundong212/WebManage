<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="news-item-container">
                    <img :src="news.imgSrc"/>
                    <div class="content-wrapper">
                        <p class="title">{{ news.title }}</p>
                        <p class="date">{{ news.date }}</p>
                        <p class="content">{{ news.abstract }}</p>
                    </div>
                </div>
            </v-flex>
            <v-flex xs12>
                <div>
                    <div v-if="news" class="template-container">
                        <h1>{{ news.title }}</h1>
                        <div class="article-info">
                            <p>{{ news.date }}</p>
                            <p>{{ news.category }}</p>
                        </div>
                        <div class="article-container">
                            <div class="para-container" v-for="(paragraph, index) in news.content" :key="news.type + index">
                                <div v-if="paragraph.type == 'text'" class="container">
                                    <strong v-if="paragraph.bold">{{paragraph.context}}</strong>
                                    <p v-else>{{paragraph.context}}</p>
                                    <span class="delete-mark" v-on:click="deleteSelected(index)">x</span>
                                </div>
                                <div v-if="paragraph.type == 'img'" class="container">
                                    <img :src="paragraph.src" />
                                    <span class="delete-mark" v-on:click="deleteSelected(index)">x</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: "NewsTemplate",
    
    data() {
        return{
            bannerInfo: {
                titleCh: '新闻动态',
                titleEn: 'News',
                key: 'news',
                type: 'general'
            }
        }
    },
    computed: {
        ...mapState(['news'])
    },
    methods: {
        ...mapMutations(['DELETE_CONTENT']),
        ...mapActions(['deleteContent']),

        deleteSelected: function(index) {
            this.deleteContent(index);
        }
    }
}
</script>

<style lang="scss" scoped>
$mobileWidth: 414px;
$maxImgWidth: 750px;

.news-item-container {
    position: relative;
    background: #fff;
    height: 178px;
    padding: 20px 0;
    width: 100%;
    margin: 10px 0;
    img {
        display: inline-block;
        vertical-align: top;
        width: 184px;
        height: 138px;
    }
    .content-wrapper {
        display: inline-block;
        vertical-align: top;
        padding: 0 30px;
        width: 70%;
        .title {
            font-size: 18px;
            color: #333333;
            font-weight: bold;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
        }
        .date {
            padding-top: 20px;
            font-size: 12px;
            color: #666666;
            line-height: 1;
        }
        .content {
            display: block;
            position: relative;
            // width: 70%;
            padding-top: 28px;
            font-size: 16px;
            color: #666666;
            // text-overflow: ellipsis;
            // max-width: 70%;
            // white-space: nowrap;
        }
    }
}

.template-container {
    padding: 60px 80px 100px;
    @media screen and (max-width: $maxImgWidth) {
        padding: 60px 20px 100px;
    }
    h1 {
        text-align: center;
        font-size: 22px;
        color: #333333;
    }
    .article-info {
        padding-top: 22px;
        text-align: center;
        p{
            display: inline-block;
            font-size: 16px;
            color: #666666;
            padding: 0 10px;
        }
    }
    .article-container {
        padding-top: 50px;
        color: #666666;
        font-size: 16px;
        .para-container {
            padding: 20px 0 ;
            .container{
                position: relative;
                p {
                    text-indent: 2em;
                }
                img {
                    display: block;
                    width: 600px;
                    height: 338px;
                    margin: auto;
                    @media screen and (max-width: $maxImgWidth){
                        width: 100%;
                        height: auto;
                    }
                }
                .delete-mark {
                    position: absolute;
                    top: 0;
                    right: 20px;
                    font-size: 30px;
                    border-radius: 50%;
                    line-height: 26px;
                    border: 1px solid #333333;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    color: #333;
                    transition: .4s;
                    cursor: pointer;
                    &:hover {
                        background: #DC143C;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
