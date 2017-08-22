webpackJsonp([84],{1061:function(v,t,_){var e=_(5)(null,_(1441),null,null,null);v.exports=e.exports},1441:function(v,t){v.exports={render:function(){var v=this,t=v.$createElement;v._self._c;return v._m(0)},staticRenderFns:[function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("section",[_("p",[_("strong",[v._v("time命令")]),v._v("用于统计给定命令所花费的总时间。")]),v._v(" "),_("h3",[v._v("语法")]),v._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[v._v("time(参数)\n")])]),v._v(" "),_("h3",[v._v("参数")]),v._v(" "),_("p",[v._v("指令：指定需要运行的额指令及其参数。")]),v._v(" "),_("h3",[v._v("实例")]),v._v(" "),_("p",[v._v("当测试一个程序或比较不同算法时，执行时间是非常重要的，一个好的算法应该是用时最短的。所有类UNIX系统都包含time命令，使用这个命令可以统计时间消耗。例如：")]),v._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[v._v('[root@localhost ~]# time [ls](#/ls "ls命令")\nanaconda-ks.cfg  [install](#/install "install命令").log  install.log.syslog  satools  text\n\nreal    0m0.009s\nuser    0m0.002s\nsys     0m0.007s\n\n')])]),v._v(" "),_("p",[v._v("输出的信息分别显示了该命令所花费的real时间、user时间和sys时间。")]),v._v(" "),_("ul",[_("li",[v._v("real时间是指挂钟时间，也就是命令开始执行到结束的时间。这个短时间包括其他进程所占用的时间片，和进程被阻塞时所花费的时间。")]),v._v(" "),_("li",[v._v("user时间是指进程花费在用户模式中的CPU时间，这是唯一真正用于执行进程所花费的时间，其他进程和花费阻塞状态中的时间没有计算在内。")]),v._v(" "),_("li",[v._v("sys时间是指花费在内核模式中的CPU时间，代表在内核中执系统调用所花费的时间，这也是真正由进程使用的CPU时间。")])]),v._v(" "),_("p",[v._v("shell内建也有一个time命令，当运行time时候是调用的系统内建命令，应为系统内建的功能有限，所以需要时间其他功能需要使用time命令可执行二进制文件"),_("code",{pre:!0},[v._v("/usr/bin/time")]),v._v("。")]),v._v(" "),_("p",[v._v("使用"),_("code",{pre:!0},[v._v("-o")]),v._v("选项将执行时间写入到文件中：")]),v._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[v._v("/usr/bin/time -o outfile.txt ls\n\n")])]),v._v(" "),_("p",[v._v("使用"),_("code",{pre:!0},[v._v("-a")]),v._v("选项追加信息：")]),v._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[v._v("/usr/bin/time -a -o outfile.txt ls\n\n")])]),v._v(" "),_("p",[v._v("使用"),_("code",{pre:!0},[v._v("-f")]),v._v("选项格式化时间输出：")]),v._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[v._v('/usr/bin/time -f "time: %U" ls\n\n')])]),v._v(" "),_("p",[_("code",{pre:!0},[v._v("-f")]),v._v("选项后的参数：")]),v._v(" "),_("table",{attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[_("tbody",[_("tr",[_("th",[v._v("参数")]),v._v(" "),_("th",[v._v("描述")])]),v._v(" "),_("tr",[_("td",[v._v("%E")]),v._v(" "),_("td",[v._v("real时间，显示格式为[小时:]分钟:秒")])]),v._v(" "),_("tr",[_("td",[v._v("%U")]),v._v(" "),_("td",[v._v("user时间。")])]),v._v(" "),_("tr",[_("td",[v._v("%S")]),v._v(" "),_("td",[v._v("sys时间。")])]),v._v(" "),_("tr",[_("td",[v._v("%C")]),v._v(" "),_("td",[v._v("进行计时的命令名称和命令行参数。")])]),v._v(" "),_("tr",[_("td",[v._v("%D")]),v._v(" "),_("td",[v._v("进程非共享数据区域，以KB为单位。")])]),v._v(" "),_("tr",[_("td",[v._v("%x")]),v._v(" "),_("td",[v._v("命令退出状态。")])]),v._v(" "),_("tr",[_("td",[v._v("%k")]),v._v(" "),_("td",[v._v("进程接收到的信号数量。")])]),v._v(" "),_("tr",[_("td",[v._v('%[w](#/w "w命令")')]),v._v(" "),_("td",[v._v("进程被交换出主存的次数。")])]),v._v(" "),_("tr",[_("td",[v._v("%Z")]),v._v(" "),_("td",[v._v("系统的页面大小，这是一个系统常量，不用系统中常量值也不同。")])]),v._v(" "),_("tr",[_("td",[v._v("%P")]),v._v(" "),_("td",[v._v("进程所获取的CPU时间百分百，这个值等于user+system时间除以总共的运行时间。")])]),v._v(" "),_("tr",[_("td",[v._v("%K")]),v._v(" "),_("td",[v._v("进程的平均总内存使用量（data+stack+text），单位是KB。")])]),v._v(" "),_("tr",[_("td",[v._v("%w")]),v._v(" "),_("td",[v._v("进程主动进行上下文切换的次数，例如等待I/O操作完成。")])]),v._v(" "),_("tr",[_("td",[v._v("%c")]),v._v(" "),_("td",[v._v("进程被迫进行上下文切换的次数（由于[时间片](http://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E7%89%87)到期）。")])])])])])}]}},472:function(v,t,_){v.exports=_(1061)}});
//# sourceMappingURL=84.2d1197700b87b32595f0.js.map