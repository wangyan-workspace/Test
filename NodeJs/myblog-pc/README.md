# myblog-pc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 开发过程
1. 安装vue-axios和axios: npm install --save axios vue-axios
2. 在main.js中配置vue-axios
    ```
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)
    ```
    [vue-axios手册](https://www.npmjs.com/package/vue-axios)
