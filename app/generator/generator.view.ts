namespace $.$$ {

	export class $bog_testops_app_generator extends $.$bog_testops_app_generator {

		@ $mol_mem
		realm() {
			return this.$.$hyoo_crus_glob
		}

		@ $mol_mem
		profile() {
			return this.realm().home().hall_by($bog_testops_profile, {})
		}

		// --- Форма ввода ---

		@ $mol_mem
		product(next?: string) {
			return next ?? ''
		}

		@ $mol_mem
		test_type(next?: string) {
			return next ?? 'manual'
		}

		@ $mol_mem
		priority(next?: string) {
			return next ?? 'NORMAL'
		}

		@ $mol_mem
		requirements(next?: string) {
			return next ?? ''
		}

		@ $mol_mem
		api_spec(next?: string) {
			return next ?? ''
		}

		@ $mol_mem
		base_url(next?: string) {
			return next ?? ''
		}

		@ $mol_mem
		is_api_test() {
			return this.test_type() === 'api'
		}

		@ $mol_mem
		can_generate() {
			const req = this.requirements().trim()
			const type = this.test_type()
			
			if (!req) return false
			if (type === 'api' && !this.api_spec().trim()) return false
			
			return true
		}

		// --- Генерация ---

		@ $mol_mem
		generated_data(reset?: null): {
			manual_code: string
			automated_code: string
			title: string
		} | null {
			if (reset === null) return null

			// TODO: Интеграция с Cloud.ru Evolution API
			// Пока используем заглушку
			
			const type = this.test_type()
			const priority = this.priority()
			const product = this.product()
			const requirements = this.requirements()

			const manual_code = this.generate_manual_testcase_stub(
				type, priority, product, requirements
			)

			const automated_code = this.generate_automated_test_stub(
				type, product, requirements
			)

			return {
				manual_code,
				automated_code,
				title: `Test ${product} - ${requirements.slice(0, 50)}...`
			}
		}

		generate_manual_testcase_stub(
			type: string, 
			priority: string, 
			product: string, 
			requirements: string
		): string {
			return `@allure.manual
@allure.label("owner", "qa-team")
@allure.feature("${product}")
@allure.story("${type}")
@allure.suite("${type}")
@mark.manual
class Test${product.charAt(0).toUpperCase() + product.slice(1)}:
    @allure.title("${requirements.slice(0, 100)}")
    @allure.link("JIRA-123", name="JIRA-123")
    @allure.tag("${priority}")
    @allure.label("priority", "${priority}")
    def test_${type}_scenario(self) -> None:
        with allure_step("Открыть страницу ${product}"):
            pass
        with allure_step("Выполнить действие"):
            pass
        with allure_step("Проверить результат"):
            allure.attach.file(
                "screenshots/result.png",
                name="result",
                attachment_type=allure.attachment_type.PNG,
            )
`
		}

		generate_automated_test_stub(
			type: string,
			product: string,
			requirements: string
		): string {
			if (type === 'api') {
				return `import pytest
import requests
import allure

@allure.feature("${product}")
@allure.story("API")
class TestAPI${product.charAt(0).toUpperCase() + product.slice(1)}:
    
    @allure.title("${requirements.slice(0, 100)}")
    def test_api_endpoint(self):
        with allure.step("Send API request"):
            response = requests.get("https://api.example.com/endpoint")
        
        with allure.step("Verify response"):
            assert response.status_code == 200
            assert "data" in response.json()
`
			} else {
				return `import pytest
from playwright.sync_api import Page, expect
import allure

@allure.feature("${product}")
@allure.story("UI")
class TestUI${product.charAt(0).toUpperCase() + product.slice(1)}:
    
    @allure.title("${requirements.slice(0, 100)}")
    def test_ui_scenario(self, page: Page):
        with allure.step("Navigate to page"):
            page.goto("https://example.com")
        
        with allure.step("Verify page loaded"):
            expect(page).to_have_title("Expected Title")
`
			}
		}

		@ $mol_action
		generate() {
			// Сбросить предыдущий результат и запустить генерацию
			this.generated_data(null)
			return null
		}

		@ $mol_mem
		has_result() {
			return this.generated_data() !== null
		}

		@ $mol_mem
		manual_code() {
			return this.generated_data()?.manual_code ?? ''
		}

		@ $mol_mem
		automated_code() {
			return this.generated_data()?.automated_code ?? ''
		}

		@ $mol_mem
		result_title() {
			const data = this.generated_data()
			return data ? `Сгенерированные тест-кейсы: ${data.title}` : 'Сгенерированные тест-кейсы'
		}

		@ $mol_mem
		result_tab(next?: string) {
			return next ?? 'manual'
		}

		@ $mol_action
		copy_manual() {
			navigator.clipboard.writeText(this.manual_code())
			return null
		}

		@ $mol_action
		copy_automated() {
			navigator.clipboard.writeText(this.automated_code())
			return null
		}

		@ $mol_action
		save() {
			const data = this.generated_data()
			if (!data) return null

			const list = this.profile()?.TestCases(null)
			if (!list) return null

			const testcase = list.remote_make({ '': $hyoo_crus_rank_read })! as $bog_testops_testcase

			testcase.Title(null)!.val(data.title)
			testcase.Priority(null)!.val(this.priority())
			testcase.TestType(null)!.val(this.test_type())
			testcase.Feature(null)!.val(this.product())
			testcase.Requirements(null)!.text(this.requirements())
			testcase.PythonCode(null)!.text(data.manual_code)
			testcase.AutomatedCode(null)!.text(data.automated_code)
			testcase.CreatedAt(null)!.val(new Date().toISOString())
			testcase.UpdatedAt(null)!.val(new Date().toISOString())
			testcase.Status(null)!.val('ready')

			if (this.is_api_test()) {
				testcase.ApiSpec(null)!.text(this.api_spec())
			}

			// Очистить форму
			this.generated_data(null)
			this.requirements('')
			this.api_spec('')

			return null
		}

		@ $mol_action
		regenerate() {
			this.generate()
			return null
		}
	}
}
