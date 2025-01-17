/******************************
[rewrite_local]
^https:\/\/user\.bbwhk\.net\/user\/login url script-response-body xxxx.js
[mitm] 
hostname = user.bbwhk.net
*******************************/
var baby = JSON.parse($response.body);

baby = {
  ...baby,
  "vip" : "",
  "completevip" : 1
  "end_time" : "4092599349",
  "start_time" : "1737028718",
  "paid" : 1,
};

$done({ body: JSON.stringify(baby) });
