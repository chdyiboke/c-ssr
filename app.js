import express from 'express'
import path from 'path'
import ssr from './src/server'
import template from './server/template'
import data from './assets/data.json'
const app = express();
// 参考： https://github.com/Rohitkrops/ssr.git
app.use('/assets', express.static(path.resolve(__dirname, 'assets'))); // 当前执行文件绝对路径
app.use('/media', express.static(path.resolve(__dirname, 'media')));
// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  apps: data
}

app.get('/', (req, res) => {
  const { initState, content}  = ssr(initialState);
  const response = template('ssr', initState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

app.get('/client', (req, res) => {
  const response = template('csr');
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

app.get('/test', (req, res) => {
  const response = '<!DOCTYPE html><html lang="zh-CN"><link rel="icon" href="https://g.csdnimg.cn/static/logo/favicon32.ico" type="image/x-icon" /></head><body>ssr-nodemon</body></html>'
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});


// app.get('/html', (req, res) => {
//   // res.send('hello~!!');
//   var index = fs.readFileSync('./public/index.html');
//   var html = index.toString();
//   res.send(html);
// })
