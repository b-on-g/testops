namespace $.$$ {
	export class $bog_testops_app_validator extends $.$bog_testops_app_validator {
		@$mol_mem
		realm() {
			return this.$.$hyoo_crus_glob
		}

		@$mol_mem
		profile() {
			return this.realm().home().hall_by($bog_testops_profile, {})
		}

		@$mol_mem
		testcases_all() {
			const list = this.profile()?.TestCases()?.remote_list() ?? []
			return list as readonly $bog_testops_testcase[]
		}

		@$mol_mem
		code_input(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		validation_result(reset?: null): {
			report: string
			issues: string[]
		} | null {
			if (reset === null) return null

			const code = this.code_input()
			if (!code.trim()) return null

			return this.validate_testcase_code(code)
		}

		validate_testcase_code(code: string): {
			report: string
			issues: string[]
		} {
			const issues: string[] = []

			// Проверка структуры AAA
			const hasArrange = code.includes('with allure_step') || code.includes('with allure.step')
			if (!hasArrange) {
				issues.push('❌ Отсутствует структура AAA (нет шагов с allure_step)')
			}

			// Проверка Allure декораторов
			const hasAllureManual = code.includes('@allure.manual')
			const hasAllureLabel = code.includes('@allure.label')
			const hasAllureFeature = code.includes('@allure.feature')
			const hasAllureStory = code.includes('@allure.story')
			const hasAllureTitle = code.includes('@allure.title')
			const hasAllureTag = code.includes('@allure.tag')

			if (!hasAllureManual && !code.includes('def test_')) {
				issues.push('⚠️ Отсутствует @allure.manual декоратор для ручного теста')
			}
			if (!hasAllureLabel) {
				issues.push('⚠️ Отсутствует @allure.label("owner", ...) - нужно указать владельца')
			}
			if (!hasAllureFeature) {
				issues.push('⚠️ Отсутствует @allure.feature(...) - нужно указать фичу')
			}
			if (!hasAllureStory) {
				issues.push('⚠️ Отсутствует @allure.story(...) - нужно указать сторю')
			}
			if (!hasAllureTitle) {
				issues.push('⚠️ Отсутствует @allure.title(...) - нужно указать заголовок теста')
			}
			if (!hasAllureTag) {
				issues.push('⚠️ Отсутствует @allure.tag(...) - нужно указать приоритет (CRITICAL/NORMAL/LOW)')
			}

			// Проверка структуры класса
			const hasClass = code.includes('class ')
			if (!hasClass) {
				issues.push('❌ Отсутствует определение класса теста')
			}

			// Проверка метода теста
			const hasTestMethod = /def test_\w+\(/.test(code)
			if (!hasTestMethod) {
				issues.push('❌ Отсутствует тестовый метод (должен начинаться с test_)')
			}

			// Проверка типов
			const hasReturnType = code.includes('-> None')
			if (hasTestMethod && !hasReturnType) {
				issues.push('⚠️ Отсутствует аннотация типа возвращаемого значения (-> None)')
			}

			const report = `# Результаты валидации

${
	issues.length === 0
		? '✅ **Все проверки пройдены!** Тест-кейс соответствует стандартам.'
		: `⚠️ **Найдено ${issues.length} проблем:**\n\n${issues.join('\n')}`
}

## Стандарт Allure TestOps as Code
Тест-кейс должен содержать:
- Класс теста с декораторами @allure.manual, @mark.manual
- Обязательные декораторы: @allure.label("owner"), @allure.feature, @allure.story, @allure.suite
- Название теста: @allure.title
- Приоритет: @allure.tag("CRITICAL" | "NORMAL" | "LOW")
- Шаги теста: with allure_step(...)
- Аннотации типов: def test_name(self) -> None
`

			return { report, issues }
		}

		@$mol_mem
		all_validation_result(reset?: null): string | null {
			if (reset === null) return null

			const testcases = this.testcases_all()
			if (testcases.length === 0) {
				return '# Валидация всех тест-кейсов\n\nНет тест-кейсов для проверки.'
			}

			let total = 0
			let passed = 0
			let warnings = 0
			let errors = 0

			testcases.forEach(tc => {
				const code = tc.PythonCode(null)?.text() ?? ''
				if (!code.trim()) return

				total++
				const result = this.validate_testcase_code(code)

				if (result.issues.length === 0) {
					passed++
				} else {
					const hasErrors = result.issues.some(i => i.startsWith('❌'))
					if (hasErrors) errors++
					else warnings++
				}
			})

			return `# Валидация всех тест-кейсов

## Статистика
- Всего проверено: ${total}
- ✅ Соответствуют стандартам: ${passed}
- ⚠️ С предупреждениями: ${warnings}
- ❌ С ошибками: ${errors}

## Процент соответствия
${Math.round((passed / total) * 100)}% тест-кейсов соответствуют стандартам

${
	passed < total
		? '\n**Рекомендация:** Используйте генератор для создания новых тест-кейсов, чтобы автоматически соблюдать все стандарты.'
		: '\n**Отлично!** Все тест-кейсы соответствуют стандартам Allure.'
}
`
		}

		@$mol_action
		validate_one() {
			this.validation_result(null)
			return null
		}

		@$mol_action
		validate() {
			this.all_validation_result(null)
			return null
		}

		@$mol_mem
		has_results() {
			return this.validation_result() !== null
		}

		@$mol_mem
		has_all_results() {
			return this.all_validation_result() !== null
		}

		@$mol_mem
		validation_report() {
			return this.validation_result()?.report ?? ''
		}

		@$mol_mem
		all_validation_report() {
			return this.all_validation_result() ?? ''
		}
	}
}
