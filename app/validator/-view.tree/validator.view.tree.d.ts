declare namespace $ {

	type $mol_button_major__click_bog_testops_app_validator_1 = $mol_type_enforce<
		ReturnType< $bog_testops_app_validator['validate'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_testops_app_validator_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_testops_app_validator_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_textarea__hint_bog_testops_app_validator_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_bog_testops_app_validator_5 = $mol_type_enforce<
		ReturnType< $bog_testops_app_validator['code_input'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_button_major__click_bog_testops_app_validator_6 = $mol_type_enforce<
		ReturnType< $bog_testops_app_validator['validate_one'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_testops_app_validator_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_card__title_bog_testops_app_validator_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_validator_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_text__text_bog_testops_app_validator_10 = $mol_type_enforce<
		ReturnType< $bog_testops_app_validator['validation_report'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_card__title_bog_testops_app_validator_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_validator_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_text__text_bog_testops_app_validator_13 = $mol_type_enforce<
		ReturnType< $bog_testops_app_validator['all_validation_report'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_card__title_bog_testops_app_validator_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_validator_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	export class $bog_testops_app_validator extends $mol_page {
		validate( next?: any ): any
		validate_label( ): string
		Validate_btn( ): $mol_button_major
		intro_text( ): string
		Intro( ): $mol_view
		code_input( next?: string ): string
		CodeInput( ): $mol_textarea
		validate_one( next?: any ): any
		validate_one_label( ): string
		ValidateOne_btn( ): $mol_button_major
		InputCard( ): $mol_card
		validation_report( ): string
		Results_text( ): $mol_text
		ResultsCard( ): $mol_card
		all_validation_report( ): string
		AllResults_text( ): $mol_text
		AllTestsCard( ): $mol_card
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=validator.view.tree.d.ts.map