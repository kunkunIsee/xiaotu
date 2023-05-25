import http from '@/utils/http'


export function getcasa(){
    return http({
        url:"home/category/head"
    })
}