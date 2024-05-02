/*******************************
脚本名称:  
脚本作者：彭于晏💞
更新时间：2024年5月2日 下午5:27
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^http[s]?:\/\/(league-api.huazhuanapp.com|league-api.huazhuanapp.com)(/api/v1/user/permanentPoints|/api/v1/wallpaper/generator/vip/info) url script-response-body 自定义.js
[mitm] 
hostname = (league-api.huazhuanapp.com|league-api.huazhuanapp.com)

*******************************/

var body = $response.body;
var url = $request.url;

if (url.indexOf("/api/v1/user/permanentPoints") != -1) {
  body = JSON.stringify("vipPoints":999999999);
}

if (url.indexOf("/api/v1/wallpaper/generator/vip/info") != -1) {
  body = JSON.stringify("showVipAlert":true);
}

$done({ body });
