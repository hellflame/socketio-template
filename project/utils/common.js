import Path from "path"

/*
* 非 import 形式获取以 project 为基准目录的绝对路径
* */
export function resolve(name) {
  return Path.join(__dirname, "..", name)
}
