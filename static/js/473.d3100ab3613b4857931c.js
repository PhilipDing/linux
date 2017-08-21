webpackJsonp([473],{1271:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[e._v("在"),n("a",{attrs:{href:"#/ip",title:"ip命令"}},[e._v("ip")]),e._v("报文的首部和ICMP报文的首部都可以放入时间戳数据。"),n("strong",[e._v("clockdiff")]),e._v("程序正是使用时间戳来测算目的主机和本地主机的系统时间差。")]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("-o：使用IP时间戳选项来测量系统时间差。时间戳只用3个。\n-o1：使用IP时间戳选项来测量系统时间差。用4个时间戳。如果-o和-o1都没有设置，那么就是用ICMP时间戳来测试系统时间差。\n")])]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('lixi@lixi-desktop:~$ [ping](#/ping "ping命令") -T tsandaddr www.ustc.edu.cn -c 1\nPING www.ustc.edu.cn (202.38.64.9) 56(124) bytes of data.\n64 bytes from 202.38.64.9: icmp_seq=1 ttl=62 [time](#/time "time命令")=0.823 ms\nTS:     lixi-desktop.local (210.45.74.25)    12522473 absolute\n    210.45.74.1    -251\n    local-gw.ustc.edu.cn (202.38.64.126)    248\n    202.38.64.9    -857514\nUnrecorded hops: 3\n\n--- www.ustc.edu.cn ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 0.823/0.823/0.823/0.000 ms\n')])]),e._v(" "),n("p",[e._v("首先由上面的得出在RRT不大的时候，几个ICMP时间戳的关系。本地主机和202.38.64.9之间的时间差约为：-857514+248-251=-857517。分别用-o（IP选项中时间戳）和不带选项（ICMP路由时间戳）上述路由的系统时间进行测试。得到的结果：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('lixi@lixi-desktop:~# ./clockdiff -o 202.38.64.9  \n..................................................\n[host](#/host "host命令")=202.38.64.9 rtt=1(0)ms/1ms delta=-857517ms/-857517ms Wed Dec 17 11:28:30 2008\n')])]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("lixi@lixi-desktop:~# ./clockdiff 202.38.64.9\n.\nhost=202.38.64.9 rtt=750(187)ms/0ms delta=-857517ms/-857517ms Wed Dec 17 11:28:35 2008\n")])]),e._v(" "),n("p",[e._v("两种方法测试的都比较准确。")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("lixi@lixi-desktop:~#./clockdiff gigagate1.Princeton.EDU\n..................................................\nhost=gigagate1.Princeton.EDU rtt=307(21)ms/271ms delta=-5ms/-5ms Wed Dec 17 11:50:16 2008\n")])]),e._v(" "),n("p",[e._v("上面是测试一个RTT较大的目的主机和本地主机的系统时间差。不过在使用clockdiff的时候，需要一点运气，因为很多路由会忽略ICMP或IP时间戳。")])])}]}},665:function(e,t,n){var s=n(5)(null,n(1271),null,null,null);e.exports=s.exports},77:function(e,t,n){e.exports=n(665)}});
//# sourceMappingURL=473.d3100ab3613b4857931c.js.map