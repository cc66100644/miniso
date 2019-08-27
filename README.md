# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

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
