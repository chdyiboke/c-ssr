import express from 'express'
import path from 'path'

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets'))); // 当前执行文件绝对路径

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3001);

app.get('/', (req, res) => {
  // const { preloadedState, content}  = ssr(initialState)
  // const response = template("Server Rendered Page", preloadedState, content)
  const response = '<!DOCTYPE html><html lang="zh-CN"><link rel="icon" href="https://g.csdnimg.cn/static/logo/favicon32.ico" type="image/x-icon" /></head><body>ssr</body></html>'
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
