webpackJsonp([221],{1476:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("od命令")]),n._v("用于输出文件的八进制、十六进制或其它格式编码的字节，通常用于显示或查看文件中不能直接显示在终端的字符。")]),n._v(" "),t("p",[n._v("常见的文件为文本文件和二进制文件。此命令主要用来查看保存在二进制文件中的值。比如，程序可能输出大量的数据记录，每个数据是一个单精度浮点数。这些数据记录存放在一个文件中，如果想查看下这个数据，这时候od命令就派上用场了。在我看来，od命令主要用来格式化输出文件数据，即对文件中的数据进行无二义性的解释。不管是IEEE754格式的浮点数还是ASCII码，od命令都能按照需求输出它们的值。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("od(选项)(参数)\n")])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('-a：此参数的效果和同时指定“-ta”参数相同；\n-A：<字码基数>：选择以何种基数计算字码；\n-b：此参数的效果和同时指定“-toC”参数相同；\n-c：此参数的效果和同时指定“-tC”参数相同；\n-d：此参数的效果和同时指定“-tu2”参数相同；\n-f：此参数的效果和同时指定“-tfF”参数相同；\n-h：此参数的效果和同时指定“-tx2”参数相同；\n-i：此参数的效果和同时指定“-td2”参数相同；\n-j<字符数目>或--skip-bytes=<字符数目>：略过设置的字符数目；\n-l：此参数的效果和同时指定“-td4”参数相同；\n-N<字符数目>或--[read](#/read "read命令")-bytes=<字符数目>：到设置的字符树目为止；\n-o：此参数的效果和同时指定“-to2”参数相同；\n-s<字符串字符数>或--strings=<字符串字符数>：只显示符合指定的字符数目的字符串；\n-t<输出格式>或--format=<输出格式>：设置输出格式；\n-v或--output-duplicates：输出时不省略重复的数据；\n-[w](#/w "w命令")<每列字符数>或--width=<每列字符数>：设置每列的最大字符数；\n-x：此参数的效果和同时指定“-h”参数相同；\n--[help](#/help "help命令")：在线帮助；\n--version：显示版本信息。\n')])]),n._v(" "),t("h3",[n._v("参数")]),n._v(" "),t("p",[n._v("文件：指定要显示的文件。")]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('[linuxde@localhost ~]$ [echo](#/echo "echo命令") abcdef g > tmp\n[linuxde@localhost ~]$ [cat](#/cat "cat命令") tmp\nabcdef g\n')])]),n._v(" "),t("p",[n._v("说明：先准备一个tmp文件")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -b tmp\n0000000 141 142 143 144 145 146 040 147 012\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：使用单字节八进制解释进行输出，注意左侧的默认地址格式为八字节")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -c tmp\n0000000   a   b   c   d   e   f       g  \\n\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：使用ASCII码进行输出，注意其中包括转义字符")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -t d1 tmp\n0000000   97   98   99  100  101  102   32  103   10\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：使用单字节十进制进行解释")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -A d -c tmp\n0000000   a   b   c   d   e   f       g  \\n\n0000009\n")])]),n._v(" "),t("p",[n._v("说明：设置地址格式为十进制。")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -A x -c tmp\n000000   a   b   c   d   e   f       g  \\n\n000009\n")])]),n._v(" "),t("p",[n._v("说明：设置地址格式为十六进制")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -j 2 -c tmp\n0000002   c   d   e   f       g  \\n\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：跳过开始的两个字节")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -N 2 -j 2 -c tmp\n0000002   c   d\n0000004\n")])]),n._v(" "),t("p",[n._v("说明：跳过开始的两个字节，并且仅输出两个字节")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -w1 -c tmp\n0000000   a\n0000001   b\n0000002   c\n0000003   d\n0000004   e\n0000005   f\n0000006   \n0000007   g\n0000010  \\n\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：每行仅输出1个字节")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -w2 -c tmp\n0000000   a   b\n0000002   c   d\n0000004   e   f\n0000006       g\n0000010  \\n\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：每行输出两个字节")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("[linuxde@localhost ~]$ od -w3 -b tmp\n0000000 141 142 143\n0000003 144 145 146\n0000006 040 147 012\n0000011\n")])]),n._v(" "),t("p",[n._v("说明：每行输出3个字节，并使用八进制单字节进行解释")])])}]}},333:function(n,e,t){n.exports=t(922)},922:function(n,e,t){var v=t(5)(null,t(1476),null,null,null);n.exports=v.exports}});
//# sourceMappingURL=221.9ecd79a871a07fe6e957.js.map