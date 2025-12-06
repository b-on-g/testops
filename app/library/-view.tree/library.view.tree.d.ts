declare namespace $ {

	type $mol_view__sub_bog_testops_app_library_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_testops_app_library_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_testops_app_library_3 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['search'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_select__hint_bog_testops_app_library_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__options_bog_testops_app_library_5 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['type_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__value_bog_testops_app_library_6 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['type_filter'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__hint_bog_testops_app_library_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__options_bog_testops_app_library_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__value_bog_testops_app_library_9 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['priority_filter'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__hint_bog_testops_app_library_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__options_bog_testops_app_library_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__value_bog_testops_app_library_12 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['status_filter'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_button_minor__click_bog_testops_app_library_13 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['filters_reset'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_testops_app_library_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_row__sub_bog_testops_app_library_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows_bog_testops_app_library_16 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['testcase_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_minor__enabled_bog_testops_app_library_17 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['page_has_prev'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_bog_testops_app_library_18 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['page_prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_testops_app_library_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__enabled_bog_testops_app_library_20 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['page_has_next'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_bog_testops_app_library_21 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library['page_next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_testops_app_library_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_row__sub_bog_testops_app_library_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_card__content_bog_testops_app_library_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	export class $bog_testops_app_library extends $mol_page {
		stats_text( ): string
		Stats( ): $mol_view
		search( next?: string ): string
		Search( ): $mol_string
		type_options( ): readonly(any)[]
		type_filter( next?: string ): string
		TypeFilter( ): $mol_select
		priority_filter( next?: string ): string
		PriorityFilter( ): $mol_select
		status_filter( next?: string ): string
		StatusFilter( ): $mol_select
		filters_reset( next?: any ): any
		reset_label( ): string
		ResetFilters( ): $mol_button_minor
		Filters( ): $mol_row
		testcase_rows( ): readonly(any)[]
		Table( ): $mol_list
		PageInfo( ): string
		page_has_prev( ): boolean
		page_prev( next?: any ): any
		prev_label( ): string
		PrevPage( ): $mol_button_minor
		page_has_next( ): boolean
		page_next( next?: any ): any
		next_label( ): string
		NextPage( ): $mol_button_minor
		Pagination( ): $mol_row
		TableCard( ): $mol_card
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
	type $mol_link__arg_bog_testops_app_library_row_1 = $mol_type_enforce<
		({ 
			'testcase': ReturnType< $bog_testops_app_library_row['testcase_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_bog_testops_app_library_row_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_button_minor__click_bog_testops_app_library_row_3 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library_row['view'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_testops_app_library_row_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_check_box__checked_bog_testops_app_library_row_5 = $mol_type_enforce<
		ReturnType< $bog_testops_app_library_row['keep'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint_bog_testops_app_library_row_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_row__sub_bog_testops_app_library_row_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $bog_testops_app_library_row extends $mol_row {
		testcase_id( ): string
		title_text( ): string
		Title( ): $mol_link
		Feature( ): string
		Priority( ): string
		TestType( ): string
		Status( ): string
		UpdatedAt( ): string
		view( next?: any ): any
		view_label( ): string
		View_btn( ): $mol_button_minor
		keep( next?: boolean ): boolean
		Keep_checkbox( ): $mol_check_box
		Actions( ): $mol_row
		attr( ): ({ 
			'mol_theme': string,
		}) 
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=library.view.tree.d.ts.map