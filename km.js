/*******************************
脚本名称:  K米
描述:
脚本作者：彭于晏💞
更新时间：2024年4月30日 下午8:03
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/mobile.ktvme.com\/ url script-response-body https://raw.githubusercontent.com/SNKrock/3430460/main/km.js

[mitm] 

hostname = mobile.ktvme.com

*******************************/

var body = $response.body.replace(/"userviptype":"\d"/g,'"userviptype":"1"')
.replace(/"uservipexpiretime":"0"/g,'"uservipexpiretime":"9999999999000"')
$done({ body });
