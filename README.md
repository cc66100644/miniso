## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

云数据库JSON数据库文档字段含义  
cart.json  购物车   
_id         //id  
_openid     //onpenid  
choose      //购物车中是否处于选择状态 true是 false否  
goodsid     //商品ID  
hide        //购物车删除商品后goodcard的显示状态 true 隐藏 false 显示  
 num        //购物车中的商品数量  

commment.json 评论文章  
_id          //id  
_openid      //onpenid  
cursor       //文章的文字数量  
orther       // 点赞的用户  
text         // 文章内容  
time         // 文章建立的时间戳  
url          // 文章图片的云储存地址  
userinfo     //  用户信息  
zan          // 点赞数量  

goods 商品  
_id           
advert          //广告图地址  
best            //是否为品牌甄选  
class           //商品类型  
desc            //商品描述  
hot             //是否为热销商品  
name            //商品名称  
new             //是否为新商品  
price          //商品价格  
recommend      //是否为推荐商品  
src           //商品图片地址  
type          //商品种类  

swiper 轮播图  
_id  
name   //名称  
src    //轮播图地址  
type   //商品种类  

temp   发表文章时作为临时存储  
_id   
_openid   
content  //文章内容  
cursor   // 文章字数  
fuleid   // 图片的云文档地址  
path     // 图片的小程序零时地址  

云存储的的文件夹
icon//  存储一些ICON图片的地方和备用图片的地方
image是// 产品广告 商品图片
swiper//各界面的轮播图
upload//用户上传的目录  用户openid目录//  存储用户上传的图片
