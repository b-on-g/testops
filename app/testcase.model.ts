namespace $.$$ {

	/**
	 * Профиль пользователя с коллекциями тест-кейсов и тест-сьютов
	 */
	export class $bog_testops_profile extends $hyoo_crus_dict.with({
		TestCases: $hyoo_crus_list_ref_to(() => $bog_testops_testcase),
		TestSuites: $hyoo_crus_list_ref_to(() => $bog_testops_testsuite),
	}) {}

	/**
	 * Тест-кейс в формате Allure TestOps as Code
	 */
	export class $bog_testops_testcase extends $hyoo_crus_dict.with({
		// Основная информация
		Title: $hyoo_crus_atom_str,
		Description: $hyoo_crus_text,
		Priority: $hyoo_crus_atom_str,        // CRITICAL/NORMAL/LOW
		Owner: $hyoo_crus_atom_str,
		Feature: $hyoo_crus_atom_str,
		Story: $hyoo_crus_atom_str,
		TestType: $hyoo_crus_atom_str,        // manual/ui/api/unit
		Suite: $hyoo_crus_atom_str,           // ID тест-сьюта
		
		// Allure метаданные
		JiraLink: $hyoo_crus_atom_str,
		JiraName: $hyoo_crus_atom_str,
		Tags: $hyoo_crus_text,                // CSV строка тегов
		
		// Генерируемый код
		PythonCode: $hyoo_crus_text,          // Allure TestOps as Code (ручной тест-кейс)
		AutomatedCode: $hyoo_crus_text,       // pytest код (автоматизированный тест)
		
		// Шаги теста (для ручных тест-кейсов)
		Steps: $hyoo_crus_text,               // JSON массив шагов [{step, expected}, ...]
		
		// Метаданные
		CreatedAt: $hyoo_crus_atom_str,
		UpdatedAt: $hyoo_crus_atom_str,
		Status: $hyoo_crus_atom_str,          // draft/ready/automated/deprecated
		
		// AI анализ и предложения
		AiCoverage: $hyoo_crus_text,          // Анализ покрытия от AI
		AiSuggestions: $hyoo_crus_text,       // Предложения по улучшению
		AiValidation: $hyoo_crus_text,        // Результат валидации стандартов
		
		// Исходные требования
		Requirements: $hyoo_crus_text,        // Исходный текст требований
		ApiSpec: $hyoo_crus_text,             // OpenAPI спецификация (если API тест)
		
	}) {}

	/**
	 * Тест-сьют - набор связанных тест-кейсов
	 */
	export class $bog_testops_testsuite extends $hyoo_crus_dict.with({
		Name: $hyoo_crus_atom_str,
		Description: $hyoo_crus_text,
		Product: $hyoo_crus_atom_str,         // compute/calculator/storage
		ProductType: $hyoo_crus_atom_str,     // UI/API
		BaseUrl: $hyoo_crus_atom_str,         // URL продукта
		
		// Метаданные
		CreatedAt: $hyoo_crus_atom_str,
		UpdatedAt: $hyoo_crus_atom_str,
		
		// AI анализ сьюта
		AiCoverageReport: $hyoo_crus_text,    // Отчет о покрытии
		AiDuplicates: $hyoo_crus_text,        // Найденные дубликаты
		AiGaps: $hyoo_crus_text,              // Пробелы в покрытии
		
	}) {}

	/**
	 * Настройки приложения
	 */
	export class $bog_testops_settings extends $hyoo_crus_dict.with({
		// Cloud.ru Evolution API
		EvolutionApiKey: $hyoo_crus_atom_str,
		EvolutionModel: $hyoo_crus_atom_str,  // claude-3-5-sonnet, gpt-4 и т.д.
		
		// GitLab интеграция
		GitlabToken: $hyoo_crus_atom_str,
		GitlabUrl: $hyoo_crus_atom_str,
		GitlabProjectId: $hyoo_crus_atom_str,
		
		// Allure настройки
		AllureOwnerDefault: $hyoo_crus_atom_str,
		
	}) {}
}
