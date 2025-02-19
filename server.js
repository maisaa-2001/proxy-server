const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;  // تعديل المنفذ ليتناسب مع بيئة Render

app.use(cors());

// ÅÚÏÇÏ ÇáÈÑæßÓí
app.use('/proxy', createProxyMiddleware({
    target: 'http://87.236.232.84:3000', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '',
    },
}));

// ÊÔÛíá ÇáÎÇÏã
app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
