# ssr
React Server-Side Rendering Example

## Development

下载项目
```bash
$ git clone https://github.com/chdyiboke/c-ssr.git
```
安装：
```bash
$ cd c-ssr && yarn install
```

启动:

```bash
$ yarn start
```
浏览器访问： 

http://localhost:3000

### Note
Don't use this in Production. 

For that use mature solutions, I would recommend Next.js

🥳

## Api
[精通 React SSR 之 API 篇](https://juejin.cn/post/6896637837895008263#heading-6)
ReactDOMServer.renderToString(element)  
ReactDOM.hydrate
hydrate()配合 SSR 使用，与render()的区别在于渲染过程中能够复用服务端返回的现有 HTML 节点  


服务端只执行 3 个生命周期函数：
```
constructor
getDerivedStateFromProps
render
```

## 参考

[SSR 教学文档](https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/)  

[这个讲的挺好](https://juejin.cn/post/6844903784078901262)