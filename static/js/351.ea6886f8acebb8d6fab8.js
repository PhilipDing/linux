webpackJsonp([351],{1467:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("section",[o("p",[o("strong",[e._v("id命令")]),e._v("可以显示真实有效的用户ID(UID)和组ID(GID)。UID 是对一个用户的单一身份标识。组ID（GID）则对应多个UID。id命令已经默认预装在大多数Linux系统中。要使用它，只需要在你的控制台输入id。不带选项输入id会显示如下。结果会使用活跃用户。")]),e._v(" "),o("p",[e._v("当我们想知道某个用户的UID和GID时id命令是非常有用的。一些程序可能需要UID/GID来运行。id使我们更加容易地找出用户的UID以GID而不必在"),o("code",{pre:!0},[e._v("/etc/group")]),e._v("文件中搜寻。如往常一样，你可以在控制台输入"),o("code",{pre:!0},[e._v('[man](#/man "man命令") id')]),e._v("进入id的手册页来获取更多的详情。")]),e._v(" "),o("h3",[e._v("语法")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v('id [-gGnru][--[help](#/help "help命令")][--version][用户名称]\n')])]),e._v(" "),o("h3",[e._v("选项")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v('-g或--group 　 显示用户所属群组的ID。\n-G或--[groups](#/groups "groups命令")   显示用户所属附加群组的ID。\n-n或--name 　  显示用户，所属群组或附加群组的名称。\n-r或--real 　  显示实际ID。\n-u或--user 　  显示用户ID。\n-help 　       显示帮助。\n-version 　    显示版本信息。\n')])]),e._v(" "),o("h3",[e._v("实例")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# id\nuid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel)\n")])]),e._v(" "),o("p",[e._v("解释：用户root的UID号码 = 0，GID号码 = 0。用户root是下面组的成员：")]),e._v(" "),o("ul",[o("li",[e._v("root组GID号是：0")]),e._v(" "),o("li",[e._v("bin组GID号是：1")]),e._v(" "),o("li",[e._v("daemon组GID号是：2")]),e._v(" "),o("li",[e._v("sys组GID号是：3")]),e._v(" "),o("li",[e._v("adm组GID号是：4")]),e._v(" "),o("li",[e._v("disk组GID号是：6")]),e._v(" "),o("li",[e._v("wheel组GID号是：10")])]),e._v(" "),o("p",[e._v("打印用户名、UID 和该用户所属的所有组，要这么做，我们可以使用 -a 选项：")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# id -a\nuid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel)\n")])]),e._v(" "),o("p",[e._v("输出所有不同的组ID ，有效的，真实的和补充的，我们可以使用 -G 选项来实现：")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# id -G\n0 1 2 3 4 6 10\n")])]),e._v(" "),o("p",[e._v("结果只会显示GID号。你可以和"),o("code",{pre:!0},[e._v("/etc/group")]),e._v("文件比较。下面是"),o("code",{pre:!0},[e._v("/etc/group")]),e._v("文件的示例内容：")]),e._v(" "),o("p",[e._v("只输出有效的组ID，通过使用 -g 选项来只输出有效组ID：")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# id -g\n0\n")])]),e._v(" "),o("p",[e._v("输出特定用户信息，我们可以输出特定的用户信息相关的UID和GID。只需要在id命令后跟上用户名：")]),e._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# id www\nuid=500(www) gid=500(www) groups=500(www)\n")])])])}]}},200:function(e,r,o){e.exports=o(789)},789:function(e,r,o){var v=o(5)(null,o(1467),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=351.ea6886f8acebb8d6fab8.js.map