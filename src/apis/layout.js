import http from '@/utils/http'


export function getheadAPI(){
    return http({
        url:"/home/category/head"
    })
}