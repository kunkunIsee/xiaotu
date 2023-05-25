//懒加载
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin ={
    install(app){
//定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        //el:指定那个元素 img
        //binding ：binding.valyue 指令等于后面绑定的表达式图片url
    
      useIntersectionObserver(
        el,
            ([{ isIntersecting }]) => {
                if(isIntersecting){
         
                    el.src=binding.value
                }
            }
          )
    }
})

    }
}