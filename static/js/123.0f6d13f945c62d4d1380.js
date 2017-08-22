webpackJsonp([123],{1021:function(e,n,t){var i=t(5)(null,t(1318),null,null,null);e.exports=i.exports},1318:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[t("strong",[e._v("speedtest-cli")]),e._v("是一个使用python编写的命令行脚本，通过调用speedtest.net测试上下行的接口来完成速度测试，最后我会测试运维生存时间所在服务器的外网速度。项目地址：https://github.com/sivel/speedtest-cli")]),e._v(" "),t("h3",[e._v("安装speedtest－cli")]),e._v(" "),t("p",[e._v("speedtest-cli需要在python 2.4-3.4的环境下，安装方法都很简单，自己选择以下最适合你的一种。")]),e._v(" "),t("p",[t("strong",[e._v("pip方式")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('＃ pip [install](#/install "install命令") speedtest－cli\n')])]),e._v(" "),t("p",[t("strong",[e._v("easy_install方式")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("＃ easy_install speedtest-cli\n")])]),e._v(" "),t("p",[t("strong",[e._v("github＋pip方式")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("＃ pip install git+https://github.com/sivel/speedtest-cli.git\n")])]),e._v(" "),t("p",[e._v("或者")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("＃ git clone https://github.com/sivel/speedtest-cli.git\n＃ python speedtest-cli/setup.py install\n")])]),e._v(" "),t("p",[t("strong",[e._v("下载脚本方式")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('＃ [wget](#/wget "wget命令") -O speedtest-cli https://raw.github.com/sivel/spe ... er/speedtest_cli.py\n＃ [chmod](#/chmod "chmod命令") +x speedtest-cli\n')])]),e._v(" "),t("p",[e._v("或者")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('＃ [curl](#/curl "curl命令") -o speedtest-cli https://raw.github.com/sivel/spe ... er/speedtest_cli.py\n＃ chmod +x speedtest-cli\n')])]),e._v(" "),t("p",[e._v("直接下载脚本，给予执行权限即可。")]),e._v(" "),t("h3",[e._v("用法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('-h, --[help](#/help "help命令")       show this help message and [exit](#/exit "exit命令")\n--share          分享你的网速，该命令会在speedtest网站上生成网速测试结果的图片。\n--simple         Suppress verbose output, only show basic information\n--list           根据距离显示speedtest.net的测试服务器列表。\n--server=SERVER  指定列表中[id](#/id "id命令")的服务器来做测试。\n--mini=MINI      URL of the Speedtest Mini server\n--source=SOURCE  Source [ip](#/ip "ip命令") address to [bind](#/bind "bind命令") to\n--version        Show the version number and exit\n')])]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[e._v("列出所有在中国的测试服务器：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('[root@li229-122 ~]# speedtest-cli --list | [grep](#/grep "grep命令") China\n1185) China Unicom (Changchun, China) [10534.35 km]\n3784) China Mobile (Urumqi, China) [10581.15 km]\n2667) Beijing Normal University (Beijing, China) [11117.03 km]\n2529) Beijing Normal University (Beijing, China) [11117.03 km]\n2816) Capital Online Data [service](#/service "service命令") (Beijing, China) [11117.03 km]\n4354) SXmobile (Taiyuan, China) [11383.17 km]\n3973) China Telecom (Lanzhou, China) [11615.43 km]\n3633) China Telecom (Shanghai, China) [11983.37 km]\n3927) China Mobile Jiangsu Co., Ltd. (Suzhou, China) [11989.27 km]\n2461) China Unicom (Chengdu, China) [12213.35 km]\n1028) Shepherd Software (Xiamen, China) [12785.57 km]\n1628) Xiamen Guangdian Xinxu (Xiamen, China) [12785.57 km]\n3891) GZinternet (Guangzhou, China) [13005.36 km]\n3871) SZWCDMA (Shenzhen, China) [13059.20 km]\n3819) SZU (Shenzhen, China) [13059.20 km]\n1536) STC (Hong Kong, China) [13088.37 km]\n1890) Telin (Hong Kong, China) [13088.37 km]\n')])]),e._v(" "),t("p",[t("strong",[e._v("结果解释")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("3633) China Telecom (Shanghai, China) [11983.37 km]\n")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("3633: 服务器id\nchina telecom：isp，这里是中国电信\nshanghai,china ：服务器所在地址\n11983.37 km：两台服务器地理位置之间距离，我这台机器在美国，和上海相距11983.37公里，很远呐.\n")])]),e._v(" "),t("p",[t("strong",[e._v("外网速度测试")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@li229-122 ~]# speedtest-cli --server=3633 --share\nRetrieving speedtest.net configuration...\nRetrieving speedtest.net server list...\nTesting from Linode (173.255.219.122)...\nHosted by China Telecom (Shanghai) [11983.37 km]: 23.603 ms\nTesting download speed........................................\nDownload: 24.84 Mbit/s\nTesting upload speed..................................................\nUpload: 4.57 Mbit/s\nShare results: http://www.speedtest.net/result/3240988007.png\n")])])])}]}},432:function(e,n,t){e.exports=t(1021)}});
//# sourceMappingURL=123.0f6d13f945c62d4d1380.js.map