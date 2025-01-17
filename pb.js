/******************************
[rewrite_local]
http-response ^https:\/\/user\.bbwhk\.net\/user\/login script-path=https://raw.githubusercontent.com/tureens001/AABB/refs/heads/main/pb.js, requires-body=true, timeout=10, tag=彭博中文
[mitm] 
hostname = user.bbwhk.net
*******************************/
var baby = JSON.parse($response.body);

baby = {
  ...baby,
  "level" : 80,
  "vip" : "進階會員",
  "end_time" : "4092599349",
  "start_time" : "1737028718",
  "paid" : 1,
};

console.log(baby)

$done({ body: JSON.stringify(baby) });
