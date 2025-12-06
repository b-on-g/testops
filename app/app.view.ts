namespace $.$$ {

	export class $bog_testops_app extends $.$bog_testops_app {
		
		@ $mol_mem
		realm() {
			return this.Realm()
		}

		@ $mol_mem
		profile() {
			return this.realm().home().hall_by($bog_testops_profile, {})
		}
	}
}
