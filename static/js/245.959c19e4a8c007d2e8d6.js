webpackJsonp([245],{1473:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("section",[r("p",[r("strong",[e._v("mv命令")]),e._v("用来对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。source表示源文件或目录，target表示目标文件或目录。如果将一个文件移到一个已经存在的目标文件中，则目标文件的内容将被覆盖。")]),e._v(" "),r("p",[e._v("mv命令可以用来将源文件移至一个目标文件中，或将一组文件移至一个目标目录中。源文件被移至目标文件有两种不同的结果：")]),e._v(" "),r("ol",[r("li",[e._v("如果目标文件是到某一目录文件的路径，源文件会被移到此目录下，且文件名不变。")]),e._v(" "),r("li",[e._v("如果目标文件不是目录文件，则源文件名（只能有一个）会变为此目标文件名，并覆盖己存在的同名文件。如果源文件和目标文件在同一个目录下，mv的作用就是改文件名。当目标文件是目录文件时，源文件或目录参数可以有多个，则所有的源文件都会被移至目标文件中。所有移到该目录下的文件都将保留以前的文件名。")])]),e._v(" "),r("p",[e._v("注意事项：mv与"),r("a",{attrs:{href:"#/cp",title:"cp命令"}},[e._v("cp")]),e._v("的结果不同，mv好像文件“搬家”，文件个数并未增加。而cp对文件进行复制，文件个数增加了。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("mv(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("--backup=<备份模式>：若需覆盖文件，则覆盖前先行备份；\n-b：当文件存在时，覆盖前，为其创建一个备份；\n-f：若目标文件或目录与现有的文件或目录重复，则直接覆盖现有的文件或目录；\n-i：交互式操作，覆盖前先行询问用户，如果源文件与目标文件或目标目录中的文件同名，则询问用户是否覆盖目标文件。用户输入”y”，表示将覆盖目标文件；输入”n”，表示取消对源文件的移动。这样可以避免误将文件覆盖。\n--strip-trailing-slashes：删除源文件中的斜杠“/”；\n-S<后缀>：为备份文件指定后缀，而不使用默认的后缀；\n--target-directory=<目录>：指定源文件要移动到目标目录；\n-u：当源文件比目标文件新或者目标文件不存在时，才执行移动操作。\n")])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("ul",[r("li",[e._v("源文件：源文件列表。")]),e._v(" "),r("li",[e._v("目标文件：如果“目标文件”是文件名则在移动文件的同时，将其改名为“目标文件”；如果“目标文件”是目录名则将源文件移动到“目标文件”下。")])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("将文件ex3改名为new1")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("mv ex3 new1\n")])]),e._v(" "),r("p",[e._v("将目录"),r("code",{pre:!0},[e._v("/usr/men")]),e._v("中的所有文件移到当前目录（用"),r("code",{pre:!0},[e._v(".")]),e._v("表示）中：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("mv /usr/men/* .\n")])])])}]}},307:function(e,v,r){e.exports=r(896)},896:function(e,v,r){var _=r(5)(null,r(1473),null,null,null);e.exports=_.exports}});
//# sourceMappingURL=245.959c19e4a8c007d2e8d6.js.map