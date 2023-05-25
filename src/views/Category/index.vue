<script setup>
import {getTopCategoryAPI} from '@/apis/category'
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';
import {getbannerAPI} from '@/apis/home'
const route =useRoute()

const bannerlist = ref([]);
const categorydata=ref({})

const getTopCategory =async ()=>{
  const res =await getTopCategoryAPI(route.params.id)
  categorydata.value=res.data.result
  console.log(categorydata.value.children);
}
const getBanner = async () => {
  const res = await getbannerAPI({distributionSite:'2'});
  bannerlist.value = res.data.result;
 
}
onMounted(()=>{
  getTopCategory()
  getBanner()
})

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categorydata.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
         <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerlist" :key="item.id">
        <img :src="item.imgUrl" alt="">
      
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="sub-list">
  <h3>全部分类</h3>
  
  <ul>
    <li v-for="i in categorydata.children" :key="i.id">
      <RouterLink to="/">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>
      </RouterLink>
    </li>
  </ul>
</div>
<!-- <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
  <div class="head">
    <h3>- {{ item.name }}-</h3>
  </div>
  <div class="body">

    <ul class="goods-list">
       
          <li v-for="good in item.goods" :key="good.id">
            <RouterLink to="/" class="goods-item">
              <img    v-img-lazy="good.picture" alt="" />
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </RouterLink>
          </li>
        </ul>

  </div>
</div> -->
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: red;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
  .home-banner {
  width: 1240px;
  height: 500px;
  // position: absolute;
  // left: 0;
  // top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
}
.goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

</style>