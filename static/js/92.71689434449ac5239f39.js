webpackJsonp([92],{1052:function(r,t,e){var v=e(5)(null,e(1153),null,null,null);r.exports=v.exports},1153:function(r,t){r.exports={render:function(){var r=this,t=r.$createElement;r._self._c;return r._m(0)},staticRenderFns:[function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("section",[e("p",[e("strong",[r._v("tar命令")]),r._v("可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。")]),r._v(" "),e("p",[r._v("首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。")]),r._v(" "),e("p",[r._v("为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（"),e("a",{attrs:{href:"#/gzip",title:"gzip命令"}},[r._v("gzip")]),r._v(" "),e("a",{attrs:{href:"#/bzip2",title:"bzip2命令"}},[r._v("bzip2")]),r._v("命令）。")]),r._v(" "),e("h3",[r._v("语法")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v("tar(选项)(参数)\n")])]),r._v(" "),e("h3",[r._v("选项")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v('-A或--catenate：新增文件到以存在的备份文件；\n-B：设置区块大小；\n-c或--create：建立新的备份文件；\n-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。\n-d：记录文件的差别；\n-x或--extract或--get：从备份文件中还原文件；\n-t或--list：列出备份文件的内容；\n-z或--gzip或--ungzip：通过gzip指令处理备份文件；\n-Z或--[compress](#/compress "compress命令")或--[uncompress](#/uncompress "uncompress命令")：通过compress指令处理备份文件；\n-f<备份文件>或--[file](#/file "file命令")=<备份文件>：指定备份文件；\n-v或--verbose：显示指令执行过程；\n-r：添加文件到已经压缩的文件；\n-u：添加改变了和现有的文件到已经存在的压缩文件；\n-j：支持bzip2解压文件；\n-v：显示操作过程；\n-l：文件系统边界设置；\n-k：保留原有文件不覆盖；\n-m：保留文件不被覆盖；\n-[w](#/w "w命令")：确认压缩文件的正确性；\n-p或--same-permissions：用原来的文件权限还原文件；\n-P或--absolute-names：文件名使用绝对名称，不移除文件名称前的“/”号；\n-N <日期格式> 或 --newer=<日期时间>：只将较指定日期更新的文件保存到备份文件里；\n--exclude=<范本样式>：排除符合范本样式的文件。\n')])]),r._v(" "),e("h3",[r._v("参数")]),r._v(" "),e("p",[r._v("文件或目录：指定要打包的文件或目录列表。")]),r._v(" "),e("h3",[r._v("实例")]),r._v(" "),e("p",[e("strong",[r._v("将文件全部打包成tar包")]),r._v("：")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v("tar -cvf log.tar log2012.log    仅打包，不压缩！ \ntar -zcvf log.tar.gz log2012.log   打包后，以 gzip 压缩 \ntar -jcvf log.tar.bz2 log2012.log  打包后，以 bzip2 压缩 \n")])]),r._v(" "),e("p",[r._v("在选项"),e("code",{pre:!0},[r._v("f")]),r._v("之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加"),e("code",{pre:!0},[r._v("z")]),r._v("选项，则以.tar.gz或.tgz来代表gzip压缩过的tar包；如果加"),e("code",{pre:!0},[r._v("j")]),r._v("选项，则以.tar.bz2来作为tar包名。")]),r._v(" "),e("p",[e("strong",[r._v("查阅上述tar包内有哪些文件")]),r._v("：")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v("tar -ztvf log.tar.gz\n")])]),r._v(" "),e("p",[r._v("由于我们使用 gzip 压缩的log.tar.gz，所以要查阅log.tar.gz包内的文件时，就得要加上"),e("code",{pre:!0},[r._v("z")]),r._v("这个选项了。")]),r._v(" "),e("p",[e("strong",[r._v("将tar包解压缩")]),r._v("：")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v('tar -zxvf /opt/soft/[test](#/test "test命令")/log.tar.gz\n')])]),r._v(" "),e("p",[r._v("在预设的情况下，我们可以将压缩档在任何地方解开的")]),r._v(" "),e("p",[e("strong",[r._v("只将tar内的部分文件解压出来")]),r._v("：")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v("tar -zxvf /opt/soft/test/log30.tar.gz log2013.log\n")])]),r._v(" "),e("p",[r._v("我可以透过"),e("code",{pre:!0},[r._v("tar -ztvf")]),r._v("来查阅 tar 包内的文件名称，如果单只要一个文件，就可以透过这个方式来解压部分文件！")]),r._v(" "),e("p",[e("strong",[r._v("文件备份下来，并且保存其权限")]),r._v("：")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v("tar -zcvpf log31.tar.gz log2014.log log2015.log log2016.log\n")])]),r._v(" "),e("p",[r._v("这个"),e("code",{pre:!0},[r._v("-p")]),r._v("的属性是很重要的，尤其是当您要保留原本文件的属性时。")]),r._v(" "),e("p",[e("strong",[r._v("在文件夹当中，比某个日期新的文件才备份")]),r._v("：")]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v('tar -N "2012/11/13" -zcvf log17.tar.gz test\n')])]),r._v(" "),e("p",[e("strong",[r._v("备份文件夹内容是排除部分文件：")])]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v('tar --exclude scf/[service](#/service "service命令") -zcvf scf.tar.gz scf/*\n')])]),r._v(" "),e("p",[e("strong",[r._v("其实最简单的使用 tar 就只要记忆底下的方式即可：")])]),r._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[r._v("压　缩：tar -jcv -f filename.tar.bz2 要被压缩的文件或目录名称\n查　询：tar -jtv -f filename.tar.bz2\n解压缩：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录\n")])])])}]}},463:function(r,t,e){r.exports=e(1052)}});
//# sourceMappingURL=92.71689434449ac5239f39.js.map