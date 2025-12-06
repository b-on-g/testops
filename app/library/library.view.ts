namespace $.$$ {
	export class $bog_testops_app_library extends $.$bog_testops_app_library {
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

		// --- Фильтры ---

		@$mol_mem
		search(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		type_filter(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		priority_filter(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		status_filter(next?: string) {
			return next ?? ''
		}

		@$mol_action
		filters_reset() {
			this.search('')
			this.type_filter('')
			this.priority_filter('')
			this.status_filter('')
			return null
		}

		@$mol_mem
		testcases_filtered() {
			const q = this.search().trim().toLowerCase()
			const type = this.type_filter()
			const priority = this.priority_filter()
			const status = this.status_filter()

			return this.testcases_all().filter(tc => {
				const title = tc.Title(null)?.val() ?? ''
				const feature = tc.Feature(null)?.val() ?? ''
				const tags = tc.Tags(null)?.text() ?? ''

				if (q) {
					const hay = `${title} ${feature} ${tags}`.toLowerCase()
					if (!hay.includes(q)) return false
				}

				if (type && tc.TestType(null)?.val() !== type) return false
				if (priority && tc.Priority(null)?.val() !== priority) return false
				if (status && tc.Status(null)?.val() !== status) return false

				return true
			})
		}

		// --- Пагинация ---

		page_size() {
			return 20
		}

		@$mol_mem
		page(next?: number) {
			return next ?? 0
		}

		@$mol_mem
		page_count() {
			return Math.ceil(this.testcases_filtered().length / this.page_size()) || 1
		}

		@$mol_mem
		testcase_ids_page() {
			const list = this.testcases_filtered()
			const page = Math.min(this.page(), this.page_count() - 1)
			const from = page * this.page_size()
			const to = from + this.page_size()

			return list.slice(from, to).map(tc => tc.ref().description!)
		}

		@$mol_mem_key
		testcase_row(id: string) {
			const row = new this.$.$bog_testops_app_library_row()
			;(row as any).$ = this.$
			row.testcase_id(id)
			return row
		}

		@$mol_mem
		testcase_rows() {
			return this.testcase_ids_page().map(id => this.testcase_row(id))
		}

		@$mol_mem
		page_has_prev() {
			return this.page() > 0
		}

		@$mol_mem
		page_has_next() {
			return this.page() < this.page_count() - 1
		}

		@$mol_action
		page_prev() {
			if (this.page_has_prev()) this.page(this.page() - 1)
			return null
		}

		@$mol_action
		page_next() {
			if (this.page_has_next()) this.page(this.page() + 1)
			return null
		}

		@$mol_mem
		PageInfo() {
			const total = this.testcases_filtered().length
			const page = this.page() + 1
			const count = this.page_count()
			return `Показано ${total} тест-кейсов • Стр. ${page} из ${count}`
		}

		// --- Статистика ---

		@$mol_mem
		stats_text() {
			const all = this.testcases_all()
			const manual = all.filter(tc => tc.TestType(null)?.val() === 'manual').length
			const automated = all.filter(tc => ['ui', 'api', 'unit'].includes(tc.TestType(null)?.val() ?? '')).length
			const critical = all.filter(tc => tc.Priority(null)?.val() === 'CRITICAL').length

			return `Всего: ${all.length} | Ручных: ${manual} | Автоматизированных: ${automated} | Критичных: ${critical}`
		}
	}

	export class $bog_testops_app_library_row extends $.$bog_testops_app_library_row {
		private _testcase_id = ''

		testcase_id(next?: string) {
			if (next !== undefined) this._testcase_id = next
			return this._testcase_id
		}

		@$mol_mem
		testcase() {
			const id = this.testcase_id()
			const ref = $hyoo_crus_ref(id)
			return this.$.$hyoo_crus_glob.Node(ref, $bog_testops_testcase)
		}

		@$mol_mem
		title_text() {
			return this.testcase().Title(null)?.val() ?? '—'
		}

		@$mol_mem
		Feature() {
			return this.testcase().Feature(null)?.val() ?? '—'
		}

		@$mol_mem
		Priority() {
			return this.testcase().Priority(null)?.val() ?? '—'
		}

		@$mol_mem
		TestType() {
			return this.testcase().TestType(null)?.val() ?? '—'
		}

		@$mol_mem
		Status() {
			return this.testcase().Status(null)?.val() ?? '—'
		}

		@$mol_mem
		UpdatedAt() {
			const dt = this.testcase().UpdatedAt(null)?.val()
			return dt ? dt.slice(0, 10) : '—'
		}

		@$mol_action
		view() {
			const tc = this.testcase()
			const title = tc.Title(null)?.val() || 'Untitled'
			const code = tc.PythonCode(null)?.text() || ''
			const description = tc.Description(null)?.text() || ''

			const info = `Тест-кейс: ${title}

Описание:
${description}

Код:
${code}
`
			this.$.$mol_log3_rise({
				place: this,
				message: title,
				hint: info,
			})

			return null
		}

		@$mol_mem
		keep(next?: boolean) {
			const tc = this.testcase()
			const realm = this.$.$hyoo_crus_glob
			const profile = realm.home().hall_by($bog_testops_profile, {})
			const testcases = profile?.TestCases()

			if (!testcases) return true

			if (next !== undefined) {
				testcases.has(tc.ref(), next)
				return next
			}

			return testcases.has(tc.ref())
		}
	}
}
