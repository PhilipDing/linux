webpackJsonp([352],{1550:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,v=n._self._c||e;return v("section",[v("p",[v("strong",[n._v("iconv命令")]),n._v("是用来转换文件的编码方式的，比如它可以将UTF8编码的转换成GB18030的编码，反过来也行。JDK中也提供了类似的工具native2ascii。Linux下的iconv开发库包括iconv_open,iconv_close,iconv等C函数，可以用来在C/C++程序中很方便的转换字符编码，这在抓取网页的程序中很有用处，而iconv命令在调试此类程序时用得着。")]),n._v(" "),v("h3",[n._v("语法")]),n._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[n._v("iconv -f encoding [-t encoding] [inputfile]... \n")])]),n._v(" "),v("h3",[n._v("选项")]),n._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[n._v('-f encoding :把字符从encoding编码开始转换。 \n-t encoding :把字符转换到encoding编码。 \n-l :列出已知的编码字符集合 \n-o [file](#/file "file命令") :指定输出文件 \n-c :忽略输出的非法字符 \n-s :禁止警告信息，但不是错误信息 \n--verbose :显示进度信息 \n-f和-t所能指定的合法字符在-l选项的命令里面都列出来了。 \n')])]),n._v(" "),v("h3",[n._v("实例")]),n._v(" "),v("p",[n._v("列出当前支持的字符编码：")]),n._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[n._v("iconv -l \n")])]),n._v(" "),v("p",[n._v("将文件file1转码，转后文件输出到fil2中：")]),n._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[n._v("iconv file1 -f EUC-JP-MS -t UTF-8 -o file2 \n")])]),n._v(" "),v("p",[n._v("这里，没"),v("code",{pre:!0},[n._v("-o")]),n._v("那么会输出到标准输出。")])])}]}},199:function(n,e,v){n.exports=v(788)},788:function(n,e,v){var o=v(5)(null,v(1550),null,null,null);n.exports=o.exports}});
//# sourceMappingURL=352.39f570125efa7b4dc952.js.map