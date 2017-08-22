webpackJsonp([528],{1411:function(a,l){a.exports={render:function(){var a=this,l=a.$createElement;a._self._c;return a._m(0)},staticRenderFns:[function(){var a=this,l=a.$createElement,s=a._self._c||l;return s("section",[s("p",[s("strong",[a._v("alias命令")]),a._v("用来设置指令的别名。我们可以使用该命令可以将一些较长的命令进行简化。使用alias时，用户必须使用单引号"),s("code",{pre:!0},[a._v("''")]),a._v("将原来的命令引起来，防止特殊字符导致错误。")]),a._v(" "),s("p",[a._v("alias命令的作用只局限于该次登入的操作。若要每次登入都能够使用这些命令别名，则可将相应的alias命令存放到bash的初始化文件"),s("code",{pre:!0},[a._v("/etc/bashrc")]),a._v("中。")]),a._v(" "),s("h3",[a._v("语法")]),a._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[a._v("alias(选项)(参数)\n")])]),a._v(" "),s("h3",[a._v("选项")]),a._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[a._v("-p：打印已经设置的命令别名。\n")])]),a._v(" "),s("h3",[a._v("参数")]),a._v(" "),s("p",[a._v("命令别名设置：定义命令别名，格式为“命令别名=‘实际命令’”。")]),a._v(" "),s("h3",[a._v("实例")]),a._v(" "),s("p",[s("strong",[a._v("alias 的基本使用方法为：")])]),a._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[a._v("alias 新的命令='原命令 -选项/参数'\n")])]),a._v(" "),s("p",[a._v("例如："),s("code",{pre:!0},[a._v('alias l=‘[ls](#/ls "ls命令") -lsh\'')]),a._v("将重新定义ls命令，现在只需输入l就可以列目录了。直接输入 alias 命令会列出当前系统中所有已经定义的命令别名。")]),a._v(" "),s("p",[a._v("要删除一个别名，可以使用 "),s("a",{attrs:{href:"#/unalias",title:"unalias命令"}},[a._v("unalias")]),a._v(" 命令，如 unalias l。")]),a._v(" "),s("p",[s("strong",[a._v("查看系统已经设置的别名：")])]),a._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[a._v("alias -p\nalias [cp](#/cp \"cp命令\")='cp -i'\nalias l.='ls -d .* --color=tty'\nalias ll='ls -l --color=tty'\nalias ls='ls --color=tty'\nalias [mv](#/mv \"mv命令\")='mv -i'\nalias [rm](#/rm \"rm命令\")='rm -i'\nalias [which](#/which \"which命令\")='alias | /usr/bin/which --tty-only --[read](#/read \"read命令\")-alias --show-dot --show-tilde'\n")])])])}]}},20:function(a,l,s){a.exports=s(609)},609:function(a,l,s){var r=s(5)(null,s(1411),null,null,null);a.exports=r.exports}});
//# sourceMappingURL=528.90693a3454d0cee407d1.js.map