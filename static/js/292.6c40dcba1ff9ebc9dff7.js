webpackJsonp([292],{1471:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("section",[_("p",[_("strong",[e._v("lp命令")]),e._v("用于打印文件，或者修改排队的打印任务。与"),_("a",{attrs:{href:"#/lpr",title:"lpr命令"}},[e._v("lpr")]),e._v("命令类似，lp命令既支持文件输入也支持标准输入。它与lpr的不同之处在于它有一个不同（稍微复杂点）的参数选项设置。")]),e._v(" "),_("h3",[e._v("语法")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("lp(选项)(参数)\n")])]),e._v(" "),_("h3",[e._v("选项")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v('-E：与打印服务器连接时强制使用加密；\n-U：指定连接打印服务器时使用的用户名；\n-d：指定接收打印任务的目标打印机；\n-i：指定一个存在的打印任务号；\n-m：打印完成时发送E-[mail](#/mail "mail命令")；\n-n：指定打印的份数；\n-t：指定打印任务的名称；\n-H：指定打印任务开始的时间；\n-P：指定需要打印的页码。\n')])]),e._v(" "),_("h3",[e._v("参数")]),e._v(" "),_("p",[e._v("文件：需打印的文件。")]),e._v(" "),_("h3",[e._v("实例")]),e._v(" "),_("p",[e._v("要在连接在设备dlp0上的打印机lp0上打印文件"),_("code",{pre:!0},[e._v("/etc/motd")]),e._v("，请输入：")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("lp /etc/motd\n")])]),e._v(" "),_("p",[e._v("要使用文件的一个副本打印"),_("code",{pre:!0},[e._v("/etc/motd")]),e._v("文件的30个副本，并且要用邮件通知用户作业完成，请输入：")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("lp -c -m -n30 -dlp0:lpd0 /etc/motd\n")])]),e._v(" "),_("p",[e._v("要使用后端标志-f和-a并带上作业标题blah打印"),_("code",{pre:!0},[e._v("/etc/motd")]),e._v("文件，请输入：")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v('lp -t "blah" -o -f -o -a /etc/motd\n')])]),e._v(" "),_("p",[e._v("要排队MyFile文件并返回作业编号，请输入：")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("lp myfile\n")])]),e._v(" "),_("p",[e._v("要排队MyFile文件并禁止作业编号，请输入：")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("lp -s myfile\n")])]),e._v(" "),_("p",[_("strong",[e._v("退出状态")])]),e._v(" "),_("p",[e._v("该命令返回以下退出值：")]),e._v(" "),_("ul",[_("li",[e._v("0：所有输入文件成功处理。")]),e._v(" "),_("li",[_("blockquote",[_("p",[e._v("0：没有输出设备可用，或者出现一个错误。")])])])])])}]}},260:function(e,v,_){e.exports=_(849)},849:function(e,v,_){var p=_(5)(null,_(1471),null,null,null);e.exports=p.exports}});
//# sourceMappingURL=292.6c40dcba1ff9ebc9dff7.js.map