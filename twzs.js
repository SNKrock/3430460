/*******************************
脚本名称:  推文助手
描述:推文助手
脚本作者：彭于晏💞
更新时间：2024年5月2日 下午5:46
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/league-api.huazhuanapp.com\/api\/v1\/wallpaper\/generator\/vip\/info url script-response-body https://raw.githubusercontent.com/SNKrock/3430460/main/twzs.js

[mitm] 

hostname = league-api.huazhuanapp.com

*******************************/

var body = $response.body.replace(/"vipPoints":\d+/g,'"vipPoints":999999999')
.replace(/"showVipAlert":\w+/g,'"showVipAlert":true')
.replace(/"vipDesc":".*?"/g,'"vipDesc":"会员有效期至：2999-09-09 19:19"')
.replace(/"mobile":".*?"/g,'"mobile":"139****8888(年卡会员)"')
.replace(/"coins":\d+/g,'"coins":99999999999')
.replace(/"vipDesc":".*?"/g,'"vipDesc":"会员有效期至：2099-09-09 14:38"')
.replace(/"mobile":".*?"/g,'"mobile":"139****9999(年卡会员)"')
.replace(/"coins":\d+/g,'"coins":99999999')
.replace(/"showVipAlert":\w+/g,'"showVipAlert":true')
.replace(/"vipStatus":\d/g,'"vipStatus":1')
$done({ body });
