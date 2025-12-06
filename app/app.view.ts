namespace $.$$ {
	new $mol_after_frame(() => {
		$hyoo_crus_yard.masters = ['https://crus.hd4.ru/'] // только прод-мастер
		$hyoo_crus_glob.yard().sync() // дёрнуть синхронизацию
	})

	export class $bog_testops_app extends $.$bog_testops_app {
		@$mol_mem
		realm() {
			return this.Realm()
		}

		@$mol_mem
		profile() {
			return this.realm().home().hall_by($bog_testops_profile, {})
		}
	}
}
