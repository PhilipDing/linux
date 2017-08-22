webpackJsonp([242],{1660:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("section",[n("p",[n("strong",[e._v("mysqldump命令")]),e._v("是"),n("a",{attrs:{href:"#/mysql",title:"mysql命令"}},[e._v("mysql")]),e._v("数据库中备份工具，用于将MySQL服务器中的数据库以标准的sql语言的方式导出，并保存到文件中。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("mysqldump(选项)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('--add-drop-table：在每个创建数据库表语句前添加删除数据库表的语句；\n--add-locks：备份数据库表时锁定数据库表；\n--all-databases：备份MySQL服务器上的所有数据库；\n--comments：添加注释信息；\n--compact：压缩模式，产生更少的输出；\n--complete-insert：输出完成的插入语句；\n--databases：指定要备份的数据库；\n--default-character-[set](#/set "set命令")：指定默认字符集；\n--force：当出现错误时仍然继续备份操作；\n--[host](#/host "host命令")：指定要备份数据库的服务器；\n--lock-tables：备份前，锁定所有数据库表；\n--no-create-db：禁止生成创建数据库语句；\n--no-create-[info](#/info "info命令")：禁止生成创建数据库库表语句；\n--password：连接MySQL服务器的密码；\n--port：MySQL服务器的端口号；\n--user：连接MySQL服务器的用户名。\n')])]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[n("strong",[e._v("导出整个数据库")])]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("mysqldump -u 用户名 -p 数据库名 > 导出的文件名\nmysqldump -u linuxde -p smgp_apps_linuxde > linuxde.sql\n")])]),e._v(" "),n("p",[n("strong",[e._v("导出一个表")])]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('mysqldump -u 用户名 -p 数据库名 表名> 导出的文件名\nmysqldump -u linuxde -p smgp_apps_linuxde [users](#/users "users命令") > linuxde_users.sql\n')])]),e._v(" "),n("p",[n("strong",[e._v("导出一个数据库结构")])]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("mysqldump -u linuxde -p -d --add-drop-table smgp_apps_linuxde > linuxde_db.sql\n")])]),e._v(" "),n("p",[n("code",{pre:!0},[e._v("-d")]),e._v("没有数据，"),n("code",{pre:!0},[e._v("--add-drop-tabl")]),e._v("e每个create语句之前增加一个"),n("code",{pre:!0},[e._v("drop table")])])])}]}},310:function(e,s,n){e.exports=n(899)},899:function(e,s,n){var r=n(5)(null,n(1660),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=242.7dc346c319943e471225.js.map