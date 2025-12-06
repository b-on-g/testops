namespace $.$$ {
	$mol_style_define($bog_testops_app_library, {
		Filters: {
			gap: $mol_gap.text,
			flexWrap: 'wrap',
			padding: $mol_gap.block,
		},
		TableCard: {
			margin: {
				top: $mol_gap.block,
			},
		},
		Pagination: {
			justifyContent: 'space-between',
			padding: $mol_gap.block,
			background: {
				color: $mol_theme.card,
			},
		},
	})

	$mol_style_define($bog_testops_app_library_row, {
		gap: $mol_gap.text,
		padding: $mol_gap.text,
		borderBottom: `1px solid ${$mol_theme.line}`,
		Title: {
			flex: {
				grow: 2,
			},
		},
		Actions: {
			gap: $mol_gap.text,
		},
	})
}
