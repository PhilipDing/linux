webpackJsonp([236],{1427:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[n("strong",[t._v("netstat命令")]),t._v("用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况。")]),t._v(" "),n("h3",[t._v("语法")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat(选项)\n")])]),t._v(" "),n("h3",[t._v("选项")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('-a或--all：显示所有连线中的Socket；\n-A<网络类型>或--<网络类型>：列出该网络类型连线中的相关地址；\n-c或--continuous：持续列出网络状态；\n-C或--cache：显示路由器配置的快取信息；\n-e或--extend：显示网络其他相关信息；\n-F或--fib：显示FIB；\n-g或--[groups](#/groups "groups命令")：显示多重广播功能群组组员名单；\n-h或--[help](#/help "help命令")：在线帮助；\n-i或--interfaces：显示网络界面信息表单；\n-l或--listening：显示监控中的服务器的Socket；\n-M或--masquerade：显示伪装的网络连线；\n-n或--numeric：直接使用[ip](#/ip "ip命令")地址，而不通过域名服务器；\n-N或--netlink或--symbolic：显示网络硬件外围设备的符号连接名称；\n-o或--timers：显示计时器；\n-p或--programs：显示正在使用Socket的程序识别码和程序名称；\n-r或--[route](#/route "route命令")：显示Routing Table；\n-s或--statistice：显示网络工作信息统计表；\n-t或--tcp：显示TCP传输协议的连线状况；\n-u或--udp：显示UDP传输协议的连线状况；\n-v或--verbose：显示指令执行过程；\n-V或--version：显示版本信息；\n-[w](#/w "w命令")或--raw：显示RAW传输协议的连线状况；\n-x或--unix：此参数的效果和指定"-A unix"参数相同；\n--ip或--inet：此参数的效果和指定"-A inet"参数相同。\n')])]),t._v(" "),n("h3",[t._v("实例")]),t._v(" "),n("p",[n("strong",[t._v("列出所有端口 (包括监听和未监听的)")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('netstat -a     #列出所有端口\nnetstat -[at](#/at "at命令")    #列出所有tcp端口\nnetstat -au    #列出所有udp端口                             \n')])]),t._v(" "),n("p",[n("strong",[t._v("列出所有处于监听状态的 Sockets")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -l        #只显示监听端口\nnetstat -lt       #只列出所有监听 tcp 端口\nnetstat -lu       #只列出所有监听 udp 端口\nnetstat -lx       #只列出所有监听 UNIX 端口\n")])]),t._v(" "),n("p",[n("strong",[t._v("显示每个协议的统计信息")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('netstat -s   显示所有端口的统计信息\nnetstat -st   显示TCP端口的统计信息\nnetstat -[su](#/su "su命令")   显示UDP端口的统计信息\n\n')])]),t._v(" "),n("p",[n("strong",[t._v("在netstat输出中显示 PID 和进程名称")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -pt\n")])]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("netstat -p")]),t._v("可以与其它开关一起使用，就可以添加“PID/进程名称”到netstat输出中，这样debugging的时候可以很方便的发现特定端口运行的程序。")]),t._v(" "),n("p",[n("strong",[t._v("在netstat输出中不显示主机，端口和用户名("),n("a",{attrs:{href:"#/host",title:"host命令"}},[t._v("host")]),t._v(", port or user)")])]),t._v(" "),n("p",[t._v("当你不想让主机，端口和用户名显示，使用"),n("code",{pre:!0},[t._v("netstat -n")]),t._v("。将会使用数字代替那些名称。同样可以加速输出，因为不用进行比对查询。")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -an\n")])]),t._v(" "),n("p",[t._v("如果只是不想让这三个名称中的一个被显示，使用以下命令:")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('netsat -a --numeric-ports\nnetsat -a --numeric-hosts\nnetsat -a --numeric-[users](#/users "users命令")\n')])]),t._v(" "),n("p",[n("strong",[t._v("持续输出netstat信息")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -c   #每隔一秒输出网络信息\n")])]),t._v(" "),n("p",[n("strong",[t._v("显示系统不支持的地址族(Address Families)")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat --verbose\n")])]),t._v(" "),n("p",[t._v("在输出的末尾，会有如下的信息：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat: no support for `AF IPX' on this system.\nnetstat: no support for `AF AX25' on this system.\nnetstat: no support for `AF X25' on this system.\nnetstat: no support for `AF NETROM' on this system.\n")])]),t._v(" "),n("p",[n("strong",[t._v("显示核心路由信息")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -r\n")])]),t._v(" "),n("p",[t._v("使用"),n("code",{pre:!0},[t._v("netstat -rn")]),t._v("显示数字格式，不查询主机名称。")]),t._v(" "),n("p",[n("strong",[t._v("找出程序运行的端口")])]),t._v(" "),n("p",[t._v("并不是所有的进程都能找到，没有权限的会不显示，使用 root 权限查看所有的信息。")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('netstat -ap | [grep](#/grep "grep命令") [ssh](#/ssh "ssh命令")\n')])]),t._v(" "),n("p",[t._v("找出运行在指定端口的进程：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -an | grep ':80'\n")])]),t._v(" "),n("p",[n("strong",[t._v("显示网络接口列表")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -i\n")])]),t._v(" "),n("p",[t._v("显示详细信息，像是"),n("a",{attrs:{href:"#/ifconfig",title:"ifconfig命令"}},[t._v("ifconfig")]),t._v("使用"),n("code",{pre:!0},[t._v("netstat -ie")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("IP和TCP分析")])]),t._v(" "),n("p",[t._v("查看连接某服务端口最多的的IP地址：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('netstat -ntu | grep :80 | [awk](#/awk "awk命令") \'{print $5}\' | [cut](#/cut "cut命令") -d: -f1 | awk \'{++ip[$1]} END {for(i in ip) print ip[i],"\\t",i}\' | [sort](#/sort "sort命令") -nr\n')])]),t._v(" "),n("p",[t._v("TCP各种状态列表：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("netstat -nt | grep -e 127.0.0.1 -e 0.0.0.0 -e ::: -v | awk '/^tcp/ {++state[$NF]} END {for(i in state) print i,\"\\t\",state[i]}'\n")])]),t._v(" "),n("p",[t._v("查看phpcgi进程数，如果接近预设值，说明不够用，需要增加：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('netstat -anpo | grep "[php](#/php "php命令")-cgi" | [wc](#/wc "wc命令") -l\n')])])])}]}},317:function(t,e,n){t.exports=n(906)},906:function(t,e,n){var r=n(5)(null,n(1427),null,null,null);t.exports=r.exports}});
//# sourceMappingURL=236.bbc041b4ab157266fe4f.js.map