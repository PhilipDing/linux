webpackJsonp([99],{1044:function(e,n,t){var c=t(5)(null,t(1556),null,null,null);e.exports=c.exports},1556:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[t("strong",[e._v("sysctl命令")]),e._v("被用于在内核运行时动态地修改内核的运行参数，可用的内核参数在目录"),t("code",{pre:!0},[e._v("/proc/sys")]),e._v("中。它包含一些TCP/"),t("a",{attrs:{href:"#/ip",title:"ip命令"}},[e._v("ip")]),e._v("堆栈和虚拟内存系统的高级选项， 这可以让有经验的管理员提高引人注目的系统性能。用sysctl可以读取设置超过五百个系统变量。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("sysctl(选项)(参数)\n")])]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('-n：打印值时不打印关键字；\n-e：忽略未知关键字错误；\n-N：仅打印名称；\n-[w](#/w "w命令")：当改变sysctl设置时使用此项；\n-p：从配置文件“/etc/sysctl.conf”加载内核参数设置；\n-a：打印当前所有可用的内核参数变量和值；\n-A：以表格方式打印当前所有可用的内核参数变量和值。\n')])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("p",[e._v("变量=值：设置内核参数对应的变量值。")]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[e._v("查看所有可读变量：")]),e._v(" "),t("p",[e._v("sysctl -a")]),e._v(" "),t("p",[e._v("读一个指定的变量，例如"),t("code",{pre:!0},[e._v("kern.maxproc")]),e._v("：")]),e._v(" "),t("p",[e._v("sysctl kern.maxproc kern.maxproc: 1044")]),e._v(" "),t("p",[e._v("要设置一个指定的变量，直接用"),t("code",{pre:!0},[e._v("variable=value")]),e._v("这样的语法：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("sysctl kern.maxfiles=5000\nkern.maxfiles: 2088 -> 5000\n")])]),e._v(" "),t("p",[e._v("您可以使用sysctl修改系统变量，也可以通过编辑sysctl.conf文件来修改系统变量。sysctl.conf看起来很像rc.conf。它用"),t("code",{pre:!0},[e._v("variable=value")]),e._v("的形式来设定值。指定的值在系统进入多用户模式之后被设定。并不是所有的变量都可以在这个模式下设定。")]),e._v(" "),t("p",[e._v("sysctl变量的设置通常是字符串、数字或者布尔型。（布尔型用 1 来表示'"),t("a",{attrs:{href:"#/yes",title:"yes命令"}},[e._v("yes")]),e._v("'，用 0 来表示'no'）。")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("sysctl -w kernel.sysrq=0\nsysctl -w kernel.core_uses_pid=1\nsysctl -w net.ipv4.conf.default.accept_redirects=0\nsysctl -w net.ipv4.conf.default.accept_source_route=0\nsysctl -w net.ipv4.conf.default.rp_filter=1\nsysctl -w net.ipv4.tcp_syncookies=1\nsysctl -w net.ipv4.tcp_max_syn_backlog=2048\nsysctl -w net.ipv4.tcp_fin_timeout=30\nsysctl -w net.ipv4.tcp_synack_retries=2\nsysctl -w net.ipv4.tcp_keepalive_time=3600\nsysctl -w net.ipv4.tcp_window_scaling=1\nsysctl -w net.ipv4.tcp_sack=1\n")])]),e._v(" "),t("h3",[e._v("配置sysctl")]),e._v(" "),t("p",[e._v("编辑此文件："),t("code",{pre:!0},[e._v("/etc/sysctl.conf")])]),e._v(" "),t("p",[e._v("如果该文件为空，则输入以下内容，否则请根据情况自己做调整：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('# Controls source [route](#/route "route命令") verification\n# Default should work for all interfaces\nnet.ipv4.conf.default.rp_filter = 1\n# net.ipv4.conf.all.rp_filter = 1\n# net.ipv4.conf.lo.rp_filter = 1\n# net.ipv4.conf.eth0.rp_filter = 1\n\n# Disables IP source routing\n# Default should work for all interfaces\nnet.ipv4.conf.default.accept_source_route = 0\n# net.ipv4.conf.all.accept_source_route = 0\n# net.ipv4.conf.lo.accept_source_route = 0\n# net.ipv4.conf.eth0.accept_source_route = 0\n\n# Controls the System Request debugging functionality of the kernel\nkernel.sysrq = 0\n\n# Controls whether core dumps will append the PID to the core filename.\n# Useful for debugging multi-threaded applications.\nkernel.core_uses_pid = 1\n\n# Increase maximum amount of memory allocated to shm\n# Only uncomment if needed!\n# kernel.shmmax = 67108864\n\n# Disable ICMP Redirect Acceptance\n# Default should work for all interfaces\nnet.ipv4.conf.default.accept_redirects = 0\n# net.ipv4.conf.all.accept_redirects = 0\n# net.ipv4.conf.lo.accept_redirects = 0\n# net.ipv4.conf.eth0.accept_redirects = 0\n\n# [enable](#/enable "enable命令") Log Spoofed Packets, Source Routed Packets, Redirect Packets\n# Default should work for all interfaces\nnet.ipv4.conf.default.log_martians = 1\n# net.ipv4.conf.all.log_martians = 1\n# net.ipv4.conf.lo.log_martians = 1\n# net.ipv4.conf.eth0.log_martians = 1\n\n# Decrease the [time](#/time "time命令") default value for tcp_fin_timeout connection\nnet.ipv4.tcp_fin_timeout = 25\n\n# Decrease the time default value for tcp_keepalive_time connection\nnet.ipv4.tcp_keepalive_time = 1200\n\n# Turn on the tcp_window_scaling\nnet.ipv4.tcp_window_scaling = 1\n\n# Turn on the tcp_sack\nnet.ipv4.tcp_sack = 1\n\n# tcp_fack should be on because of sack\nnet.ipv4.tcp_fack = 1\n\n# Turn on the tcp_timestamps\nnet.ipv4.tcp_timestamps = 1\n\n# Enable TCP SYN Cookie Protection\nnet.ipv4.tcp_syncookies = 1\n\n# Enable ignoring broadcasts request\nnet.ipv4.icmp_echo_ignore_broadcasts = 1\n\n# Enable bad error message Protection\nnet.ipv4.icmp_ignore_bogus_error_responses = 1\n\n# [make](#/make "make命令") [more](#/more "more命令") local ports available\n# net.ipv4.ip_local_port_range = 1024 65000\n\n# [set](#/set "set命令") TCP Re-Ordering value in kernel to ‘5′\nnet.ipv4.tcp_reordering = 5\n\n# Lower syn retry rates\nnet.ipv4.tcp_synack_retries = 2\nnet.ipv4.tcp_syn_retries = 3\n\n# Set Max SYN Backlog to ‘2048′\nnet.ipv4.tcp_max_syn_backlog = 2048\n\n# Various Settings\nnet.core.netdev_max_backlog = 1024\n\n# Increase the maximum number of skb-heads to be cached\nnet.core.hot_list_length = 256\n\n# Increase the tcp-time-[wait](#/wait "wait命令") buckets pool size\nnet.ipv4.tcp_max_tw_buckets = 360000\n\n# This will increase the amount of memory available for socket input/output queues\nnet.core.rmem_default = 65535\nnet.core.rmem_max = 8388608\nnet.ipv4.tcp_rmem = 4096 87380 8388608\nnet.core.wmem_default = 65535\nnet.core.wmem_max = 8388608\nnet.ipv4.tcp_wmem = 4096 65535 8388608\nnet.ipv4.tcp_mem = 8388608 8388608 8388608\nnet.core.optmem_max = 40960\n')])]),e._v(" "),t("p",[e._v("如果希望屏蔽别人 "),t("a",{attrs:{href:"#/ping",title:"ping命令"}},[e._v("ping")]),e._v(" 你的主机，则加入以下代码：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("# Disable ping requests\nnet.ipv4.icmp_echo_ignore_all = 1\n")])]),e._v(" "),t("p",[e._v("编辑完成后，请执行以下命令使变动立即生效：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("/sbin/sysctl -p\n/sbin/sysctl -w net.ipv4.route.flush=1\n")])])])}]}},456:function(e,n,t){e.exports=t(1044)}});
//# sourceMappingURL=99.4343aa1478d4fe57500a.js.map