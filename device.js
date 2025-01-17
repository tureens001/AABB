/******************************
[rewrite_local]
http-response ^https:\/\/user\.bbwhk\.net\/device\/add\/type script-path=https://raw.githubusercontent.com/tureens001/AABB/refs/heads/main/device.js, requires-body=true, timeout=10, tag=彭博设备
[mitm] 
hostname = user.bbwhk.net
*******************************/

$done({ body: 1 });
