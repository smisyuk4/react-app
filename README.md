# react-app - vite + gh page🙌

**Після клонування проекту потрібно:**
- змінити назву репозиторію
- ![](https://i.ibb.co/9NY280x/2023-06-09-00-40-44.png)

- змінити налаштування github
- ![](https://i.ibb.co/JBkC4Cf/2023-06-09-00-44-13.png)
- ![](https://i.ibb.co/DgMGQ64/2023-06-09-00-46-16.png)
- ![](https://i.ibb.co/xhqXLnQ/2023-06-09-00-46-51.png)
- ![](https://i.ibb.co/KV20NLN/2023-06-09-01-07-39.png)

**Перевірити чи є в налаштуваннях змінні оточення**
![](https://i.ibb.co/C8wFqTW/2023-07-16-23-06-37.png)

**Перевірити чи є правила для гілок**
![](https://i.ibb.co/wQQCHZH/2023-08-12-13-16-35.png)

# У проекті також встановлені:

- react-redux
- reduxjs/toolkit
- redux-persist
- axios
- react-router-dom
- emotion/styled

# Додаткові статті:

- [deploying-vite-app-to-github-pages](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane)
- [vite-gh-pages-example](https://github.com/richard929/vite-gh-pages-example/tree/main)
- [page-not-found-react-vite-app-not-routing-correctly-on-github-pages](https://stackoverflow.com/questions/76115927/page-not-found-react-vite-app-not-routing-correctly-on-github-pages)
- [vitejs.dev](https://vitejs.dev/guide/)
- [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [youtube - Deploy Vite app to GitHub Pages using GitHub Actions](https://www.youtube.com/watch?v=MKw-IriprJY&ab_channel=MaciekSitkowski)

# Змінні оточення на хостингу GitHub
![](https://i.ibb.co/Pwp15BT/2023-07-20-00-21-35.png)
![](https://i.ibb.co/Fh119wF/2023-07-20-00-24-06.png)

```bash
   - name: Build and set env
        env:
          VITE_CHANNEL_ID: ${{  vars.VITE_CHANNEL_ID  }}
        run: npm run build
```

![](https://i.ibb.co/LYRPhSm/2023-07-20-00-31-23.png)

# Deploy to Firebase
- `npm run build`
- `npm run deploy`
