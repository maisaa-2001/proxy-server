const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000; 

app.use(cors());

// ����� ��������
app.use('/proxy', createProxyMiddleware({
    target: 'http://87.236.232.84:3000', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '',
    },
}));

// ����� ������
app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
