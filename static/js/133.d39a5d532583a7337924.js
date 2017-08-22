webpackJsonp([133],{1011:function(n,e,t){var o=t(5)(null,t(1480),null,null,null);n.exports=o.exports},1480:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("sh命令")]),n._v("是shell命令语言解释器，执行命令从标准输入读取或从一个文件中读取。通过用户输入命令，和内核进行沟通！Bourne Again Shell （即bash）是自由软件基金会（GNU）开发的一个Shell，它是Linux系统中一个默认的Shell。Bash不但与Bourne Shell兼容，还继承了C Shell、Korn Shell等优点。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('bash [options] [[file](#/file "file命令")]\n')])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("-c string：命令从-c后的字符串读取。\n-i：实现脚本交互。\n-n：进行shell脚本的语法检查。\n-x：实现shell脚本逐条语句的跟踪。\n")])]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("p",[n._v("使用-x选项跟踪脚本调试shell脚本，能打印出所执行的每一行命令以及当前状态：")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[root@AY1307311912260196fcZ satools]# sh -x check_ssh_login.sh\n+ DEFINE=30\n+ [cat](#/cat \"cat命令\") /var/log/secure\n+ [awk](#/awk \"awk命令\") '/Failed/ {++[ip](#/ip \"ip命令\")[$(NF-3)]} END {for (i in ip) print i\"=\"ip[i]}'\n++ cat /root/satools/black.txt\n+ for i in '`cat /root/satools/black.txt`'\n++ [echo](#/echo \"echo命令\") 121.42.0.16=1427\n++ awk -F= '{print $1}'\n+ IP=121.42.0.16\n++ echo 121.42.0.16=1427\n++ awk -F= '{print $2}'\n+ NUM=1427\n+ '[' 1427 -gt 30 ']'\n+ [grep](#/grep \"grep命令\") 121.42.0.16 /etc/hosts.deny\n+ '[' 1 -gt 0 ']'\n+ echo [sshd](#/sshd \"sshd命令\"):121.42.0.16\n+ echo vsftpd:121.42.0.16\n+ for i in '`cat /root/satools/black.txt`'\n++ echo 121.42.0.72=276\n++ awk -F= '{print $1}'\n+ IP=121.42.0.72\n++ awk -F= '{print $2}'\n++ echo 121.42.0.72=276\n+ NUM=276\n+ '[' 276 -gt 30 ']'\n+ grep 121.42.0.72 /etc/hosts.deny\n+ '[' 1 -gt 0 ']'\n+ echo sshd:121.42.0.72\n+ echo vsftpd:121.42.0.72\n")])])])}]}},422:function(n,e,t){n.exports=t(1011)}});
//# sourceMappingURL=133.d39a5d532583a7337924.js.map