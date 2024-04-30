/*******************************
脚本名称:  拓客助手
描述:拓客助手
脚本作者：彭于晏💞
更新时间：2024年4月30日 下午11:14
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/tkapi.customerhelper.cn\/1\/classes\/userInfoList url script-response-body https://raw.githubusercontent.com/SNKrock/3430460/main/tkzs.js

[mitm] 

hostname = tkapi.customerhelper.cn

*******************************/

var body = $response.body.replace(/"vipExpireTime":".*?"/g,'"vipExpireTime":"2099-09-09 19:19:19"')
.replace(/"freeCount":"\d+"/g,'"freeCount":"888888888"')
.replace(/"msgBalance":"\d+"/g,'"msgBalance":"9999999"')
$done({ body });
