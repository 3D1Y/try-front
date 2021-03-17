import Mock from "mockjs"
import banners from "./banners.json"
import floor from "./floor.json"
Mock.mock('/mock/banners','get',{
    code: 200,
    "data|4": [banners]
})
Mock.mock('/mock/floor','get',{
    code: 200,
    "data|2": floor
})