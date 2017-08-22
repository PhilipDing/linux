webpackJsonp([9],{1420:function(A,r,e){A.exports={render:function(){var A=this,r=A.$createElement;A._self._c;return A._m(0)},staticRenderFns:[function(){var A=this,r=A.$createElement,o=A._self._c||r;return o("section",[o("p",[o("strong",[A._v("chmod命令")]),A._v("用来变更文件或目录的权限。在UNIX系统家族里，文件或目录权限的控制分别以读取、写入、执行3种一般权限来区分，另有3种特殊权限可供运用。用户可以使用chmod指令去变更文件与目录的权限，设置方式采用文字或数字代号皆可。符号连接的权限无法变更，如果用户对符号连接修改权限，其改变会作用在被连接的原始文件。")]),A._v(" "),o("p",[A._v("权限范围的表示法如下：")]),A._v(" "),o("p",[o("code",{pre:!0},[A._v("u")]),A._v(" User，即文件或目录的拥有者；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("g")]),A._v(" Group，即文件或目录的所属群组；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("o")]),A._v(" Other，除了文件或目录拥有者或所属群组之外，其他用户皆属于这个范围；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("a")]),A._v(" All，即全部的用户，包含拥有者，所属群组以及其他用户；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("r")]),A._v(" 读取权限，数字代号为“4”;"),o("br"),A._v(" "),o("code",{pre:!0},[A._v('[w](#/w "w命令")')]),A._v(" 写入权限，数字代号为“2”；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("x")]),A._v(" 执行或切换权限，数字代号为“1”；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("-")]),A._v(" 不具任何权限，数字代号为“0”；"),o("br"),A._v(" "),o("code",{pre:!0},[A._v("s")]),A._v(" 特殊功能说明：变更文件或目录的权限。")]),A._v(" "),o("h3",[A._v("语法")]),A._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[A._v("chmod(选项)(参数)\n")])]),A._v(" "),o("h3",[A._v("选项")]),A._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[A._v("-c或——changes：效果类似“-v”参数，但仅回报更改的部分；\n-f或--quiet或——silent：不显示错误信息；\n-R或——recursive：递归处理，将指令目录下的所有文件及子目录一并处理；\n-v或——verbose：显示指令执行过程；\n--reference=<参考文件或目录>：把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同；\n<权限范围>+<权限设置>：开启权限范围的文件或目录的该选项权限设置；\n<权限范围>-<权限设置>：关闭权限范围的文件或目录的该选项权限设置；\n<权限范围>=<权限设置>：指定权限范围的文件或目录的该选项权限设置；\n")])]),A._v(" "),o("h3",[A._v("参数")]),A._v(" "),o("p",[A._v("权限模式：指定文件的权限模式；"),o("br"),A._v("\n文件：要改变权限的文件。")]),A._v(" "),o("h3",[A._v("知识扩展和实例")]),A._v(" "),o("p",[A._v("Linux用 户分为：拥有者、组群(Group)、其他（other），Linux系统中，预设的情況下，系统中所有的帐号与一般身份使用者，以及root的相关信 息， 都是记录在"),o("code",{pre:!0},[A._v('/etc/[passwd](#/passwd "passwd命令")')]),A._v("文件中。每个人的密码则是记录在"),o("code",{pre:!0},[A._v("/etc/shadow")]),A._v("文件下。 此外，所有的组群名称记录在"),o("code",{pre:!0},[A._v("/etc/group")]),A._v("內！")]),A._v(" "),o("p",[A._v("linux文件的用户权限的分析图")]),A._v(" "),o("p",[o("img",{attrs:{src:e(601),alt:"linux文件的用户权限的分析图"}})]),A._v(" "),o("p",[A._v("例：rwx　rw-　r--")]),A._v(" "),o("p",[A._v("r=读取属性　　//值＝4"),o("br"),A._v("\nw=写入属性　　//值＝2"),o("br"),A._v("\nx=执行属性　　//值＝1")]),A._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[A._v("chmod u+x,g+w f01　　//为文件f01设置自己可以执行，组员可以写入的权限\nchmod u=rwx,g=rw,o=r f01\nchmod 764 f01\nchmod a+x f01　　//对文件f01的u,g,o都设置可执行属性\n")])]),A._v(" "),o("p",[A._v("文件的属主和属组属性设置")]),A._v(" "),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[A._v('[chown](#/chown "chown命令") user:market f01　　//把文件f01给uesr，添加到market组\nll -d f1  查看目录f1的属性\n')])])])}]}},601:function(A,r){A.exports="data:image/gif;base64,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"},659:function(A,r,e){var o=e(5)(null,e(1420),null,null,null);A.exports=o.exports},70:function(A,r,e){A.exports=e(659)}});
//# sourceMappingURL=9.78bf5df4a7f2e0722f66.js.map