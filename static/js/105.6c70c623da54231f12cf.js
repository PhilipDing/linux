webpackJsonp([105],{1039:function(e,t,r){var n=r(5)(null,r(1482),null,null,null);e.exports=n.exports},1482:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[r("strong",[e._v("su命令")]),e._v("用于切换当前用户身份到其他用户身份，变更时须输入所要变更的用户帐号与密码。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("su(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-c<指令>或--[command](#/command "command命令")=<指令>：执行完指定的指令后，即恢复原来的身份；\n-f或——fast：适用于csh与tsch，使shell不用去读取启动文件；\n-l或——[login](#/login "login命令")：改变身份时，也同时变更工作目录，以及HOME,SHELL,USER,[logname](#/logname "logname命令")。此外，也会变更PATH变量；\n-m,-p或--preserve-environment：变更身份时，不要变更环境变量；\n-s<shell>或--shell=<shell>：指定要执行的shell；\n--[help](#/help "help命令")：显示帮助；\n--version；显示版本信息。\n')])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("用户：指定要切换身份的目标用户。")]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("变更帐号为root并在执行"),r("a",{attrs:{href:"#/ls",title:"ls命令"}},[e._v("ls")]),e._v("指令后退出变回原使用者：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("su -c ls root\n")])]),e._v(" "),r("p",[e._v("变更帐号为root并传入"),r("code",{pre:!0},[e._v("-f")]),e._v("选项给新执行的shell：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("su root -f\n")])]),e._v(" "),r("p",[e._v("变更帐号为"),r("a",{attrs:{href:"#/test",title:"test命令"}},[e._v("test")]),e._v("并改变工作目录至test的家目录：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("su -test\n")])])])}]}},450:function(e,t,r){e.exports=r(1039)}});
//# sourceMappingURL=105.6c70c623da54231f12cf.js.map