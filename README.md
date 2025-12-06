# TestOps Copilot

AI-ассистент для автоматизации рутинной работы QA-инженера на базе $mol и CRUS-DB.

## Описание проекта

TestOps Copilot - это интеллектуальный помощник для QA-команд, который автоматизирует создание, управление и оптимизацию тест-кейсов. Проект разработан для хакатона Cloud.ru и использует современный стек технологий:

- **$mol** - реактивный фреймворк для UI
- **CRUS-DB** - децентрализованная база данных с автоматической синхронизацией
- **Cloud.ru Evolution API** - для генерации тест-кейсов через LLM

## Основной функционал

### 1. Генератор тест-кейсов

Автоматическая генерация тест-кейсов в формате Allure TestOps as Code:

- Ручные тест-кейсы (manual tests) с полной структурой AAA
- Автоматизированные UI тесты (Playwright/Selenium)
- API тесты (pytest + requests)
- Поддержка OpenAPI спецификаций для API тестов

**Возможности:**
- Генерация на основе текстового описания требований
- Парсинг OpenAPI спецификаций
- Применение паттерна AAA (Arrange-Act-Assert)
- Автоматическое добавление Allure декораторов

### 2. Библиотека тест-кейсов

Централизованное хранилище всех тест-кейсов:

- Поиск по названию, фиче, тегам
- Фильтрация по типу теста, приоритету, статусу
- Просмотр и редактирование кода
- Пагинация для больших наборов данных
- Статистика по всем тест-кейсам

### 3. Оптимизатор тестов

Интеллектуальный анализ покрытия и качества тестов:

- **Анализ покрытия**: статистика по типам тестов, приоритетам, продуктам
- **Поиск дубликатов**: выявление повторяющихся тест-кейсов
- **Пробелы в покрытии**: определение непокрытых сценариев
- **Рекомендации**: советы по улучшению тест-сьюта

### 4. Валидатор стандартов

Проверка тест-кейсов на соответствие стандартам:

- Проверка структуры AAA
- Валидация Allure декораторов
- Проверка корректности меток (owner, feature, story, priority)
- Проверка типов и аннотаций
- Отчет о соответствии с рекомендациями

### 5. Настройки

Конфигурация интеграций:

- Cloud.ru Evolution API (ключ, модель)
- GitLab (токен, URL, project ID)
- Allure (владелец по умолчанию)

## Технологическая архитектура

### CRUS-DB модели данных

```typescript
// Профиль пользователя
$bog_testops_profile
  - TestCases: список тест-кейсов
  - TestSuites: список тест-сьютов

// Тест-кейс
$bog_testops_testcase
  - Title, Description, Priority
  - PythonCode (ручной тест)
  - AutomatedCode (автотест)
  - Requirements, ApiSpec
  - AI анализ и валидация

// Тест-сьют
$bog_testops_testsuite
  - Name, Product, BaseUrl
  - AI отчеты (покрытие, дубликаты, пробелы)

// Настройки
$bog_testops_settings
  - Evolution API, GitLab, Allure
```

### Структура проекта

```
bog/testops/
├── app/
│   ├── app.view.tree          # Главное приложение ($mol_book2_catalog)
│   ├── app.view.ts
│   ├── testcase.model.ts      # CRUS модели данных
│   │
│   ├── generator/             # Генератор тест-кейсов
│   ├── library/               # Библиотека тест-кейсов
│   ├── optimizer/             # Оптимизатор
│   ├── validator/             # Валидатор
│   └── settings/              # Настройки
│
└── assets/
    └── favicon.ico
```

## Запуск проекта

### Предварительные требования

1. Node.js (LTS версия)
2. Git
3. MAM (автоматически установится)

### Установка и запуск

```bash
# 1. Клонировать репозиторий MAM (если ещё не клонирован)
git clone https://github.com/hyoo-ru/mam.git
cd mam

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер
npm start

# 4. Открыть в браузере
# http://localhost:9080/bog/testops/app/-/test.html
```

## Использование

### Создание тест-кейса

1. Перейдите в раздел "Генератор"
2. Выберите продукт и тип теста
3. Опишите требования
4. Для API тестов вставьте OpenAPI спецификацию
5. Нажмите "Генерировать"
6. Просмотрите код (ручной и автоматизированный)
7. Сохраните в библиотеку

### Просмотр библиотеки

1. Перейдите в раздел "Библиотека"
2. Используйте фильтры для поиска
3. Просматривайте и редактируйте тест-кейсы

### Оптимизация тестов

1. Перейдите в раздел "Оптимизатор"
2. Нажмите "Анализировать"
3. Изучите отчеты по вкладкам:
   - Покрытие
   - Дубликаты
   - Пробелы
   - Рекомендации

### Валидация

1. Перейдите в раздел "Валидатор"
2. Вставьте код тест-кейса или проверьте все
3. Получите отчет о соответствии стандартам

## Формат генерируемого кода

### Пример ручного тест-кейса (Allure TestOps as Code)

```python
@allure.manual
@allure.label("owner", "qa-team")
@allure.feature("compute")
@allure.story("manual")
@allure.suite("manual")
@mark.manual
class TestCompute:
    @allure.title("Проверка создания виртуальной машины")
    @allure.link("JIRA-123", name="JIRA-123")
    @allure.tag("CRITICAL")
    @allure.label("priority", "CRITICAL")
    def test_manual_scenario(self) -> None:
        with allure_step("Открыть страницу compute"):
            pass
        with allure_step("Выполнить действие"):
            pass
        with allure_step("Проверить результат"):
            allure.attach.file(
                "screenshots/result.png",
                name="result",
                attachment_type=allure.attachment_type.PNG,
            )
```

### Пример автоматизированного UI теста

```python
import pytest
from playwright.sync_api import Page, expect
import allure

@allure.feature("compute")
@allure.story("UI")
class TestUICompute:
    
    @allure.title("Проверка создания ВМ через UI")
    def test_ui_scenario(self, page: Page):
        with allure.step("Navigate to page"):
            page.goto("https://compute.cloud.ru")
        
        with allure.step("Verify page loaded"):
            expect(page).to_have_title("Evolution Compute")
```

### Пример API теста

```python
import pytest
import requests
import allure

@allure.feature("compute")
@allure.story("API")
class TestAPICompute:
    
    @allure.title("GET /vms - получение списка ВМ")
    def test_api_endpoint(self):
        with allure.step("Send API request"):
            response = requests.get(
                "https://compute.api.cloud.ru/v3/vms",
                headers={"Authorization": "Bearer TOKEN"}
            )
        
        with allure.step("Verify response"):
            assert response.status_code == 200
            assert "vms" in response.json()
```

## Roadmap (будущие улучшения)

- [ ] Интеграция с Cloud.ru Evolution API (реальная генерация через LLM)
- [ ] Интеграция с GitLab (коммит тест-кейсов в репозиторий)
- [ ] Генератор тест-планов
- [ ] Парсинг кода для выявления API endpoints
- [ ] Unit-тесты для CI/CD pipeline
- [ ] Экспорт в Allure TestOps
- [ ] Импорт существующих тест-кейсов
- [ ] Версионирование тест-кейсов

## Соответствие требованиям MVP

### Базовый функционал ✓

- [x] Генерация ручных тест-кейсов (Allure format)
- [x] Генерация автоматизированных тестов (UI + API)
- [x] Оптимизация тест-кейсов (анализ покрытия и дубликатов)
- [x] Проверка на стандарты (AAA, Allure декораторы)

### Технические требования ✓

- [x] Использование CRUS-DB для хранения
- [x] $mol фреймворк для UI
- [x] Реактивная архитектура
- [x] Поддержка OpenAPI спецификаций
- [x] Формат Allure TestOps as Code

### Демонстрационные кейсы

Приложение готово для тестирования на:
- Кейс 1: UI-тестирование Cloud.ru калькулятора цен
- Кейс 2: API-тестирование Evolution Compute

## Лицензия

MIT

## Авторы

Проект создан для хакатона Cloud.ru 2025
