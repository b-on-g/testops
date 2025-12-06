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
			const key = this.api_key()
			const model = this.api_model()

			if (!key) {
				this.$.$mol_fail_hidden('API ключ не указан')
				return null
			}

			try {
				const response = await fetch('https://api.aicloud.sbercloud.ru/public/v2/chat/completions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${key}`,
					},
					body: JSON.stringify({
						model: model,
						messages: [{ role: 'user', content: 'test' }],
						max_tokens: 10,
					}),
				})

				if (response.ok) {
					this.$.$mol_log3_rise({
						place: this,
						message: 'API подключение успешно',
						hint: 'Cloud.ru Evolution API работает',
					})
				} else {
					const error = await response.text()
					this.$.$mol_fail_hidden(`API ошибка: ${response.status} ${error}`)
				}
			} catch (error) {
				this.$.$mol_fail_hidden(`Ошибка подключения: ${error}`)
			}

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
			const token = this.gitlab_token()
			const url = this.gitlab_url()
			const projectId = this.gitlab_project()

			if (!token || !url || !projectId) {
				this.$.$mol_fail_hidden('Заполните все поля GitLab')
				return null
			}

			try {
				const apiUrl = `${url}/api/v4/projects/${encodeURIComponent(projectId)}`
				const response = await fetch(apiUrl, {
					headers: {
						'PRIVATE-TOKEN': token,
					},
				})

				if (response.ok) {
					const project = await response.json()
					this.$.$mol_log3_rise({
						place: this,
						message: 'GitLab подключение успешно',
						hint: `Проект: ${project.name_with_namespace || project.name}`,
					})
				} else {
					const error = await response.text()
					this.$.$mol_fail_hidden(`GitLab ошибка: ${response.status} ${error}`)
				}
			} catch (error) {
				this.$.$mol_fail_hidden(`Ошибка подключения: ${error}`)
			}

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
