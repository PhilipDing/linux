webpackJsonp([499],{1237:function(e,p){e.exports={render:function(){var e=this,p=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,p=e.$createElement,t=e._self._c||p;return t("section",[t("p",[t("strong",[e._v("bunzip2命令")]),e._v("解压缩由"),t("a",{attrs:{href:"#/bzip2",title:"bzip2命令"}},[e._v("bzip2")]),e._v('指令创建的”.bz2"压缩包。对文件进行压缩与解压缩。此命令类似于“'),t("a",{attrs:{href:"#/gzip",title:"gzip命令"}},[e._v("gzip")]),e._v("/"),t("a",{attrs:{href:"#/gunzip",title:"gunzip命令"}},[e._v("gunzip")]),e._v("”命令，只能对文件进行压缩。对于目录只能压缩目录下的所有文件，压缩完成后，在目录下生成以“.bz2”为后缀的压缩包。bunzip2其实是bzip2的符号链接，即软链接，因此压缩解压都可以通过bzip2实现。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("bunzip2(选项)(参数)\n")])]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("-f或--force：解压缩时，若输出的文件与现有文件同名时，预设不会覆盖现有的文件；\n-k或——keep：在解压缩后，预设会删除原来的压缩文件。若要保留压缩文件，请使用此参数；\n-s或——small：降低程序执行时，内存的使用量；\n-v或——verbose：解压缩文件时，显示详细的信息；\n-l，--license，-V或——version：显示版本信息。\n")])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("p",[e._v(".bz2压缩包：指定需要解压缩的.bz2压缩包。")]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[e._v("将"),t("code",{pre:!0},[e._v("/opt")]),e._v("目录下的etc."),t("a",{attrs:{href:"#/zip",title:"zip命令"}},[e._v("zip")]),e._v("、var.zip和backup.zip进行压缩，设置压缩率为最高，同时在压缩完毕后不删除原始文件，显示压缩过程的详细信息。")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("bzip2 -9vk /opt/etc.zip /opt/var.zip /opt/backup.zip\n")])]),e._v(" "),t("p",[e._v("压缩完毕后，在"),t("code",{pre:!0},[e._v("/opt")]),e._v("下就会生成相应的etc.zip.bz2、var.zip.bz2和backup.zip.bz2文件。")])])}]}},50:function(e,p,t){e.exports=t(639)},639:function(e,p,t){var v=t(5)(null,t(1237),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=499.01173e5debfa7ed37584.js.map