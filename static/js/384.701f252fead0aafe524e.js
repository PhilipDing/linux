webpackJsonp([384],{1211:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("section",[v("p",[v("strong",[t._v("gcc命令")]),t._v("使用GNU推出的基于C/C++的编译器，是开放源代码领域应用最广泛的编译器，具有功能强大，编译代码支持性能优化等特点。现在很多程序员都应用GCC，怎样才能更好的应用GCC。目前，GCC可以用来编译C/C++、FORTRAN、JAVA、OBJC、ADA等语言的程序，可根据需要选择安装支持的语言。")]),t._v(" "),v("h3",[t._v("语法")]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc(选项)(参数)\n")])]),t._v(" "),v("h3",[t._v("选项")]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v('-o：指定生成的输出文件；\n-E：仅执行编译预处理；\n-S：将C代码转换为汇编代码；\n-[wall](#/wall "wall命令")：显示警告信息；\n-c：仅执行编译操作，不进行连接操作。\n')])]),t._v(" "),v("h3",[t._v("参数")]),t._v(" "),v("p",[t._v("C源文件：指定C语言源代码文件。")]),t._v(" "),v("h3",[t._v("实例")]),t._v(" "),v("p",[v("strong",[t._v("常用编译命令选项")])]),t._v(" "),v("p",[t._v("假设源程序文件名为"),v("a",{attrs:{href:"#/test",title:"test命令"}},[t._v("test")]),t._v(".c")]),t._v(" "),v("p",[v("strong",[t._v("无选项编译链接")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc test.c\n")])]),t._v(" "),v("p",[t._v("将test.c预处理、汇编、编译并链接形成可执行文件。这里未指定输出文件，默认输出为a.out。")]),t._v(" "),v("p",[v("strong",[t._v("选项 -o")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc test.c -o test\n")])]),t._v(" "),v("p",[t._v("将test.c预处理、汇编、编译并链接形成可执行文件test。-o选项用来指定输出文件的文件名。")]),t._v(" "),v("p",[v("strong",[t._v("选项 -E")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc -E test.c -o test.i\n")])]),t._v(" "),v("p",[t._v("将test.c预处理输出test.i文件。")]),t._v(" "),v("p",[v("strong",[t._v("选项 -S")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc -S test.i\n")])]),t._v(" "),v("p",[t._v("将预处理输出文件test.i汇编成test.s文件。")]),t._v(" "),v("p",[v("strong",[t._v("选项 -c")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc -c test.s\n")])]),t._v(" "),v("p",[t._v("将汇编输出文件test.s编译输出test.o文件。")]),t._v(" "),v("p",[v("strong",[t._v("无选项链接")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc test.o -o test\n")])]),t._v(" "),v("p",[t._v("将编译输出文件test.o链接成最终可执行文件test。")]),t._v(" "),v("p",[v("strong",[t._v("选项 -O")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc -O1 test.c -o test\n")])]),t._v(" "),v("p",[t._v("使用编译优化级别1编译程序。级别为1~3，级别越大优化效果越好，但编译时间越长。")]),t._v(" "),v("p",[v("strong",[t._v("多源文件的编译方法")])]),t._v(" "),v("p",[t._v("如果有多个源文件，基本上有两种编译方法：")]),t._v(" "),v("p",[t._v("假设有两个源文件为test.c和testfun.c")]),t._v(" "),v("p",[v("strong",[t._v("多个文件一起编译")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc testfun.c test.c -o test\n")])]),t._v(" "),v("p",[t._v("将testfun.c和test.c分别编译后链接成test可执行文件。")]),t._v(" "),v("p",[v("strong",[t._v("分别编译各个源文件，之后对编译后输出的目标文件链接。")])]),t._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[t._v("gcc -c testfun.c    #将testfun.c编译成testfun.o\ngcc -c test.c       #将test.c编译成test.o\ngcc -o testfun.o test.o -o test    #将testfun.o和test.o链接成test\n")])]),t._v(" "),v("p",[t._v("以上两种方法相比较，第一中方法编译时需要所有文件重新编译，而第二种方法可以只重新编译修改的文件，未修改的文件不用重新编译。")])])}]}},167:function(t,e,v){t.exports=v(755)},755:function(t,e,v){var _=v(5)(null,v(1211),null,null,null);t.exports=_.exports}});
//# sourceMappingURL=384.701f252fead0aafe524e.js.map