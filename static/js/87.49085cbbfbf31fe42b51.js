webpackJsonp([87],{1057:function(e,_,t){var p=t(5)(null,t(1572),null,null,null);e.exports=p.exports},1572:function(e,_){e.exports={render:function(){var e=this,_=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("section",[t("p",[e._v("有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是"),t("code",{pre:!0},[e._v("/tmp")]),e._v("，因为该目录中所有的内容在系统重启后就会被清空。下面是两种方法为临时数据生成标准的文件名。")]),e._v(" "),t("h3",[e._v("tempfile命令")]),e._v(" "),t("p",[t("code",{pre:!0},[e._v("tempfile命令")]),e._v("只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他发行版没有这个命令。")]),e._v(" "),t("p",[e._v("用tempfile命令为一个临时文件命名：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("temp_file_name=$(tempfile)\n")])]),e._v(" "),t("p",[e._v("用一个加带了随机数的文件名作为临时文件命名：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('temp_file_name="/tmp/file_$RANDOM"\n')])]),e._v(" "),t("p",[e._v("$RANDOM是一个返回随机数的环境变量。")]),e._v(" "),t("h3",[e._v("$$变量")]),e._v(" "),t("p",[e._v("如果没有tempfile命令的Linux发行版，也可以使用自己的临时文件名：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('temp_file_name="/tmp/[file](#/file "file命令").$"\n')])]),e._v(" "),t("p",[t("code",{pre:!0},[e._v("$$")]),e._v("是系统预定义变量，显示当前所在进程的进程号，用"),t("code",{pre:!0},[e._v(".$$")]),e._v("作为添加的后缀会被扩展成当前运行脚本的进程"),t("a",{attrs:{href:"#/id",title:"id命令"}},[e._v("id")]),e._v("。")])])}]}},469:function(e,_,t){e.exports=t(1057)}});
//# sourceMappingURL=87.49085cbbfbf31fe42b51.js.map