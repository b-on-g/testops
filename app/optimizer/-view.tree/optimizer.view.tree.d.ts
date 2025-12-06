declare namespace $ {

	type $mol_button_major__click_bog_testops_app_optimizer_1 = $mol_type_enforce<
		ReturnType< $bog_testops_app_optimizer['analyze'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_testops_app_optimizer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_testops_app_optimizer_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_testops_app_optimizer_4 = $mol_type_enforce<
		ReturnType< $bog_testops_app_optimizer['coverage_report'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_card__title_bog_testops_app_optimizer_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_optimizer_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_text__text_bog_testops_app_optimizer_7 = $mol_type_enforce<
		ReturnType< $bog_testops_app_optimizer['duplicates_report'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_card__title_bog_testops_app_optimizer_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_optimizer_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_text__text_bog_testops_app_optimizer_10 = $mol_type_enforce<
		ReturnType< $bog_testops_app_optimizer['gaps_report'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_card__title_bog_testops_app_optimizer_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_optimizer_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_text__text_bog_testops_app_optimizer_13 = $mol_type_enforce<
		ReturnType< $bog_testops_app_optimizer['suggestions_report'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_card__title_bog_testops_app_optimizer_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content_bog_testops_app_optimizer_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_deck__items_bog_testops_app_optimizer_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_deck['items'] >
	>
	type $mol_view__sub_bog_testops_app_optimizer_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_testops_app_optimizer extends $mol_page {
		analyze( next?: any ): any
		analyze_label( ): string
		Analyze_btn( ): $mol_button_major
		intro_text( ): string
		Intro( ): $mol_view
		coverage_report( ): string
		Coverage_text( ): $mol_text
		Coverage_card( ): $mol_card
		duplicates_report( ): string
		Duplicates_text( ): $mol_text
		Duplicates_card( ): $mol_card
		gaps_report( ): string
		Gaps_text( ): $mol_text
		Gaps_card( ): $mol_card
		suggestions_report( ): string
		Suggestions_text( ): $mol_text
		Suggestions_card( ): $mol_card
		ResultsCard( ): $mol_deck
		loading_text( ): string
		LoadingIndicator( ): $mol_view
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=optimizer.view.tree.d.ts.map