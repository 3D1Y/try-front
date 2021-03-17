import request from "@utils/request";
import mockRequest from "@utils/mockRequest"
// 获取三级分类数据
const getCategoryData = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
const getBannersData = ()=>{
  return mockRequest({
    method: "GET",
    url: "/banners"
  })
}
const getFloorData = () => {
  return mockRequest({
    method: "GET",
    url: "/floor"
  })
}
export  {
    getCategoryData,
    getBannersData,
    getFloorData
}