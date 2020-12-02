const base ={
    baseUrl:'/api',
    login:'/api/login', //登录
    register:'/api/register' ,//登录
    selectTbItemAllByPage:"/api/backend/item/selectTbItemAllByPage", //商品查询接口
    total:"/api/total", //分页
    search:"/api/search",//模糊搜索
    selectItemCategoryByParentId:"/api/backend/itemCategory/selectItemCategoryByParentId",//类目选择
    insertTbItem:"/api/backend/item/insertTbItem",//产品增加
    deleteItemById:"/api/backend/item/deleteItemById",//商品删除
    preUpdateItem:"/api/backend/item/preUpdateItem",//预更新
    updateTbItem:"/api/backend/item/updateTbItem",//编辑商品
    preCategory:"/api/preCategory",//单一类目数据获取
    selectItemParamAll:"/api/backend/itemParam/selectItemParamAll",//规格参数 读取数据
    paramsSearch: "/api/params/search",//规格参数 查询
    paramsDelete:"/api/params/delete",//规格参数 删除
    paramsTotal:"/api/params/total",//规格参数 分页
    insertItemParam:"/api/backend/itemParam/insertItemParam",//规格参数添加
    paramsItem:"/api/product/parmas/paramsItem",//获取规格参数数据添加到产品
    selectContentCategoryByParentId:"/api/content/selectContentCategoryByParentId",//内容分类管理 查询导航
    insertContentCategory:"/api/content/insertContentCategory",//内容分类管理 增加子导航
    updateContentCategory:"/api/content/updateContentCategory",//内容分类管理 修改子导航
    deleteContentCategoryById:"/api/content/deleteContentCategoryById",//内容分类管理 删除子导航
    insertTbContent:"/api/content/insertTbContent",//内容分类管理 内容增加
    deleteContentByIds:"/api/content/deleteContentByIds",//内容分类管理 内容删除
    selectTbContentAllByCategoryId:"/api/content/selectTbContentAllByCategoryId",//内容分类管理 内容查询
}

export default base