// 自动导入当前目录下的 js 文件, eager 代表直接引入模块而非懒加载
import.meta.glob('./*.js', { eager: true })
