declare namespace $ {

	type $bog_theme_toggle__theme_auto_bog_testops_app_1 = $mol_type_enforce<
		ReturnType< $bog_testops_app['Theme'] >
		,
		ReturnType< $bog_theme_toggle['theme_auto'] >
	>
	type $mol_link_source__uri_bog_testops_app_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $bog_theme_auto__theme_light_bog_testops_app_3 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_theme_auto['theme_light'] >
	>
	type $bog_theme_auto__theme_dark_bog_testops_app_4 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_theme_auto['theme_dark'] >
	>
	type $mol_image__uri_bog_testops_app_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['uri'] >
	>
	export class $bog_testops_app extends $mol_book2_catalog {
		Realm( ): $hyoo_crus_glob
		Theme_toggle( ): $bog_theme_toggle
		Sources( ): $mol_link_source
		Theme( ): $bog_theme_auto
		Generator( ): $bog_testops_app_generator
		Library( ): $bog_testops_app_library
		Optimizer( ): $bog_testops_app_optimizer
		Validator( ): $bog_testops_app_validator
		Settings( ): $bog_testops_app_settings
		realm( ): ReturnType< $bog_testops_app['Realm'] >
		Placeholder( ): any
		Menu_logo( ): $mol_image
		menu_title( ): string
		menu_tools( ): readonly(any)[]
		plugins( ): readonly(any)[]
		spreads( ): ({ 
			'generator': ReturnType< $bog_testops_app['Generator'] >,
			'library': ReturnType< $bog_testops_app['Library'] >,
			'optimizer': ReturnType< $bog_testops_app['Optimizer'] >,
			'validator': ReturnType< $bog_testops_app['Validator'] >,
			'settings': ReturnType< $bog_testops_app['Settings'] >,
		}) 
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map