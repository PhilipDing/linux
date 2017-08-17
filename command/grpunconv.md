**grpunconv命令**用来关闭群组的投影密码。它会把密码从gshadow文件内，回存到group文件里。

### 语法  

```
grpunconv
```

### 实例  

未关闭的情况

```
[cat](https://philipding.github.io/linux-command/cat "cat命令") /etc/gshadow | [grep](https://philipding.github.io/linux-command/grep "grep命令") cdy
cdy:123456::
```

关闭影子密码

```
cat /etc/gshadow
cat: /etc/gshadow: 没有那个文件或目录
```

查看密码已经复制到`/etc/group`中了。

```
cat /etc/group | grep cdy
cdy:123456:1000:
```