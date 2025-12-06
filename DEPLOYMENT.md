# Deployment Guide - TestOps Copilot

## GitHub Pages (автоматический деплой)

Проект использует GitHub Actions для автоматического деплоя.

### Настройка

1. **Создайте репозиторий:**
   ```bash
   cd bog/testops
   git add .
   git commit -m "Initial commit: TestOps Copilot"
   git remote add origin https://github.com/YOUR_USERNAME/testops-copilot.git
   git push -u origin master
   ```

2. **GitHub Actions автоматически:**
   - Соберёт проект через `hyoo-ru/mam_build@master2`
   - Задеплоит на GitHub Pages через `hyoo-ru/gh-deploy@v4.4.1`

3. **Результат:**
   - URL: `https://YOUR_USERNAME.github.io/testops-copilot/`
   - Обновляется при каждом push в master

### Расписание

Workflow запускается:
- При каждом push
- При pull request
- Каждый день в 7:00 UTC (schedule)
- Вручную через workflow_dispatch

## CRUS синхронизация

Приложение автоматически подключается к prod-мастеру:
```typescript
$hyoo_crus_yard.masters = ['https://crus.hd4.ru/']
```

Все данные синхронизируются между пользователями через CRUS-DB.

## Локальная разработка

```bash
cd /path/to/mam
npm start
# Откройте: http://localhost:9080/bog/testops/app/-/test.html
```

---

**Готово к деплою!** 🚀
