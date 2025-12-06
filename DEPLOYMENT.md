# Deployment Guide - TestOps Copilot

## Автоматический деплой через GitHub Actions

Проект настроен для автоматического деплоя на GitHub Pages при пуше в основную ветку.

### Настройка GitHub Pages

1. **Создайте репозиторий на GitHub:**
   ```bash
   cd bog/testops
   git init
   git add .
   git commit -m "Initial commit: TestOps Copilot"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/testops-copilot.git
   git push -u origin main
   ```

2. **Включите GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: выберите ветку `gh-pages`
   - Нажмите Save

3. **После первого пуша:**
   - GitHub Actions автоматически запустит сборку
   - Проект будет доступен по адресу: `https://YOUR_USERNAME.github.io/testops-copilot/`

### CI/CD Workflows

Проект включает три workflow:

#### 1. `ci.yml` - Continuous Integration
Запускается при каждом push и PR:
- Устанавливает зависимости
- Проверяет TypeScript
- Собирает проект
- Загружает артефакты сборки

#### 2. `deploy.yml` - Deployment
Запускается при push в main/master:
- Собирает проект
- Деплоит на GitHub Pages
- Настраиваемый домен (опционально)

#### 3. `release.yml` - Release Creation
Запускается при создании тега версии:
- Собирает релизную версию
- Создает архивы (.tar.gz, .zip)
- Создает GitHub Release с changelog

### Создание релиза

```bash
# Создайте тег версии
git tag -a v1.0.0 -m "Release v1.0.0: Initial public release"
git push origin v1.0.0

# GitHub Actions автоматически создаст релиз
```

## Ручной деплой

### Деплой на любой статический хостинг

1. **Соберите проект:**
   ```bash
   cd /Users/cmyser/code/mam
   npm run build bog/testops/app
   ```

2. **Скопируйте файлы для деплоя:**
   ```bash
   mkdir -p deploy/testops
   cp -r bog/testops/app/-/* deploy/testops/
   cp bog/testops/app/index.html deploy/testops/
   cp -r bog/testops/assets deploy/testops/
   ```

3. **Загрузите на хостинг:**
   - Netlify: перетащите папку `deploy/testops` в Netlify Drop
   - Vercel: `vercel deploy deploy/testops`
   - AWS S3: `aws s3 sync deploy/testops s3://your-bucket/`
   - Любой FTP/SFTP хостинг

### Деплой на Netlify

#### Автоматический деплой из Git
Создайте `netlify.toml`:
```toml
[build]
  base = "/"
  publish = "bog/testops/app/-"
  command = "npm run build bog/testops/app"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Ручной деплой
```bash
# Установите Netlify CLI
npm install -g netlify-cli

# Деплой
cd bog/testops
netlify deploy --prod --dir=app/-
```

### Деплой на Vercel

Создайте `vercel.json`:
```json
{
  "buildCommand": "npm run build bog/testops/app",
  "outputDirectory": "bog/testops/app/-",
  "devCommand": "npm start",
  "installCommand": "npm install"
}
```

Деплой:
```bash
npm install -g vercel
vercel --prod
```

### Деплой на собственный сервер (Nginx)

1. **Скопируйте файлы на сервер:**
   ```bash
   scp -r deploy/testops user@your-server:/var/www/html/testops
   ```

2. **Настройте Nginx:**
   ```nginx
   server {
       listen 80;
       server_name testops.your-domain.com;
       root /var/www/html/testops;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Кэширование статики
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Перезапустите Nginx:**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## Docker деплой

Создайте `Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build bog/testops/app

FROM nginx:alpine

COPY --from=builder /app/bog/testops/app/-/ /usr/share/nginx/html/
COPY --from=builder /app/bog/testops/app/index.html /usr/share/nginx/html/
COPY --from=builder /app/bog/testops/assets /usr/share/nginx/html/assets

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Деплой:
```bash
docker build -t testops-copilot .
docker run -p 8080:80 testops-copilot
```

## Переменные окружения

Для продакшн-деплоя может потребоваться настройка:

```bash
# .env.production
VITE_API_URL=https://api.cloud.ru
VITE_EVOLUTION_API_KEY=your-api-key
```

## Мониторинг деплоя

### GitHub Actions статус
Добавьте badge в README:
```markdown
![Deploy Status](https://github.com/YOUR_USERNAME/testops-copilot/workflows/Deploy%20TestOps%20Copilot/badge.svg)
```

### Проверка работоспособности
После деплоя проверьте:
- [ ] Главная страница загружается
- [ ] Все вкладки работают
- [ ] CRUS-DB синхронизация работает
- [ ] Нет ошибок в консоли браузера

## Откат деплоя

### GitHub Pages
```bash
# Вернуться к предыдущему коммиту
git revert HEAD
git push origin main
```

### Netlify/Vercel
Используйте веб-интерфейс для отката к предыдущему деплою.

## Custom Domain

### GitHub Pages
1. Добавьте файл `CNAME` с вашим доменом:
   ```bash
   echo "testops.your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Настройте DNS:
   ```
   Type: CNAME
   Name: testops
   Value: YOUR_USERNAME.github.io
   ```

### SSL Certificate
GitHub Pages автоматически выдаёт SSL сертификат для custom domain.

## Troubleshooting

### Деплой не работает
1. Проверьте GitHub Actions logs
2. Убедитесь, что `gh-pages` ветка создана
3. Проверьте настройки Pages в репозитории

### 404 ошибка при навигации
Добавьте файл `404.html` = копия `index.html` для SPA routing

### CRUS-DB не синхронизируется
Проверьте CORS настройки и WebSocket соединение

## Полезные ссылки

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

**Готово к деплою!** 🚀
