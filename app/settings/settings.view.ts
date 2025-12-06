namespace $.$$ {
	export class $bog_testops_app_settings extends $.$bog_testops_app_settings {
		@$mol_mem
		realm() {
			return this.$.$hyoo_crus_glob
		}

		@$mol_mem
		settings_obj() {
			return this.realm().home().hall_by($bog_testops_settings, {})
		}

		// --- API настройки ---

		@$mol_mem
		api_key(next?: string) {
			const obj = this.settings_obj()
			if (next !== undefined) {
				obj?.EvolutionApiKey(null)?.val(next)
			}
			return obj?.EvolutionApiKey(null)?.val() ?? ''
		}

		@$mol_mem
		api_model(next?: string) {
			const obj = this.settings_obj()
			if (next !== undefined) {
				obj?.EvolutionModel(null)?.val(next)
			}
			return obj?.EvolutionModel(null)?.val() ?? 'claude-3-5-sonnet'
		}

		@$mol_action
		async api_test() {
			// TODO: реальная проверка API
			console.log('Testing API connection...')
			return null
		}

		// --- GitLab настройки ---

		@$mol_mem
		gitlab_token(next?: string) {
			const obj = this.settings_obj()
			if (next !== undefined) {
				obj?.GitlabToken(null)?.val(next)
			}
			return obj?.GitlabToken(null)?.val() ?? ''
		}

		@$mol_mem
		gitlab_url(next?: string) {
			const obj = this.settings_obj()
			if (next !== undefined) {
				obj?.GitlabUrl(null)?.val(next)
			}
			return obj?.GitlabUrl(null)?.val() ?? ''
		}

		@$mol_mem
		gitlab_project(next?: string) {
			const obj = this.settings_obj()
			if (next !== undefined) {
				obj?.GitlabProjectId(null)?.val(next)
			}
			return obj?.GitlabProjectId(null)?.val() ?? ''
		}

		@$mol_action
		async gitlab_test() {
			// TODO: реальная проверка GitLab
			console.log('Testing GitLab connection...')
			return null
		}

		// --- Allure настройки ---

		@$mol_mem
		allure_owner(next?: string) {
			const obj = this.settings_obj()
			if (next !== undefined) {
				obj?.AllureOwnerDefault(null)?.val(next)
			}
			return obj?.AllureOwnerDefault(null)?.val() ?? 'qa-team'
		}

		// --- Сохранение/сброс ---

		@$mol_action
		save() {
			// Данные уже сохраняются автоматически через CRUS
			console.log('Settings saved automatically via CRUS')
			return null
		}

		@$mol_action
		reset() {
			this.api_key('')
			this.api_model('claude-3-5-sonnet')
			this.gitlab_token('')
			this.gitlab_url('')
			this.gitlab_project('')
			this.allure_owner('qa-team')
			return null
		}
	}
}
