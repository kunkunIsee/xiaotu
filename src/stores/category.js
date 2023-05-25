import { reactive,ref} from 'vue'
import { defineStore } from 'pinia'
import {getheadAPI} from '@/apis/layout'

export const useLayouterStore = defineStore('categoryto', () => {
 
    let num =ref(5)
    //state 导航列表数据
    let getheadlist=reactive([])
    const  gethead =async ()=>{
      const res = await getheadAPI()
      Object.assign(getheadlist, res.data.result);
    
    }
    
  return {
    gethead,
    getheadlist,
    num
}
})
