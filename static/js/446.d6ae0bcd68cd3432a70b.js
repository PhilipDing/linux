webpackJsonp([446],{104:function(n,e,t){n.exports=t(693)},1294:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("dig命令")]),n._v("是常用的域名查询工具，可以用来测试域名系统工作是否正常。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("dig(选项)(参数)\n")])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('@<服务器地址>：指定进行域名解析的域名服务器；\n-b<[ip](#/ip "ip命令")地址>：当主机具有多个IP地址，指定使用本机的哪个IP地址向域名服务器发送域名查询请求；\n-f<文件名称>：指定dig以批处理的方式运行，指定的文件中保存着需要批处理查询的DNS任务信息；\n-P：指定域名服务器所使用端口号；\n-t<类型>：指定要查询的DNS数据类型；\n-x<IP地址>：执行逆向域名查询；\n-4：使用IPv4；\n-6：使用IPv6；\n-h：显示指令帮助信息。\n')])]),n._v(" "),t("h3",[n._v("参数")]),n._v(" "),t("ul",[t("li",[n._v("主机：指定要查询域名主机；")]),n._v(" "),t("li",[n._v("查询类型：指定DNS查询的类型；")]),n._v(" "),t("li",[n._v("查询类：指定查询DNS的class；")]),n._v(" "),t("li",[n._v("查询选项：指定查询选项。")])]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('[root@localhost ~]# dig www.linuxde.net\n\n; <<>> DiG 9.3.6-P1-RedHat-9.3.6-20.P1.el5_8.1 <<>> www.linuxde.net\n;; global options:  printcmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, [id](#/id "id命令"): 2115\n;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 2, ADDITIONAL: 0\n\n;; QUESTION SECTION:\n;www.linuxde.net.               IN      A\n\n;; ANSWER SECTION:\nwww.linuxde.net.        0       IN      CNAME   [host](#/host "host命令").1.linuxde.net.\nhost.1.linuxde.net.     0       IN      A       100.42.212.8\n\n;; AUTHORITY SECTION:\nlinuxde.net.            8       IN      NS      f1g1ns2.dnspod.net.\nlinuxde.net.            8       IN      NS      f1g1ns1.dnspod.net.\n\n;; Query [time](#/time "time命令"): 0 msec\n;; SERVER: 202.96.104.15#53(202.96.104.15)\n;; WHEN: Thu Dec 26 11:14:37 2013\n;; MSG SIZE  rcvd: 121\n')])])])}]}},693:function(n,e,t){var i=t(5)(null,t(1294),null,null,null);n.exports=i.exports}});
//# sourceMappingURL=446.d6ae0bcd68cd3432a70b.js.map