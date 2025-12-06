	($.$bog_testops_app_library) = class $bog_testops_app_library extends ($.$mol_page) {
		stats_text(){
			return "";
		}
		Stats(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.stats_text())]);
			return obj;
		}
		search(next){
			if(next !== undefined) return next;
			return "";
		}
		Search(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_library_Search_hint")));
			(obj.value) = (next) => ((this.search(next)));
			return obj;
		}
		type_options(){
			return [
				"", 
				"manual", 
				"ui", 
				"api", 
				"unit"
			];
		}
		type_filter(next){
			if(next !== undefined) return next;
			return "";
		}
		TypeFilter(){
			const obj = new this.$.$mol_select();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_library_TypeFilter_hint")));
			(obj.options) = () => ((this.type_options()));
			(obj.value) = (next) => ((this.type_filter(next)));
			return obj;
		}
		priority_filter(next){
			if(next !== undefined) return next;
			return "";
		}
		PriorityFilter(){
			const obj = new this.$.$mol_select();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_library_PriorityFilter_hint")));
			(obj.options) = () => ([
				"", 
				"CRITICAL", 
				"NORMAL", 
				"LOW"
			]);
			(obj.value) = (next) => ((this.priority_filter(next)));
			return obj;
		}
		status_filter(next){
			if(next !== undefined) return next;
			return "";
		}
		StatusFilter(){
			const obj = new this.$.$mol_select();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_library_StatusFilter_hint")));
			(obj.options) = () => ([
				"", 
				"draft", 
				"ready", 
				"automated", 
				"deprecated"
			]);
			(obj.value) = (next) => ((this.status_filter(next)));
			return obj;
		}
		filters_reset(next){
			if(next !== undefined) return next;
			return null;
		}
		reset_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_library_reset_label"));
		}
		ResetFilters(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.filters_reset(next)));
			(obj.sub) = () => ([(this.reset_label())]);
			return obj;
		}
		Filters(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Search()), 
				(this.TypeFilter()), 
				(this.PriorityFilter()), 
				(this.StatusFilter()), 
				(this.ResetFilters())
			]);
			return obj;
		}
		testcase_rows(){
			return [];
		}
		Table(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.testcase_rows()));
			return obj;
		}
		PageInfo(){
			return "";
		}
		page_has_prev(){
			return false;
		}
		page_prev(next){
			if(next !== undefined) return next;
			return null;
		}
		prev_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_library_prev_label"));
		}
		PrevPage(){
			const obj = new this.$.$mol_button_minor();
			(obj.enabled) = () => ((this.page_has_prev()));
			(obj.click) = (next) => ((this.page_prev(next)));
			(obj.sub) = () => ([(this.prev_label())]);
			return obj;
		}
		page_has_next(){
			return false;
		}
		page_next(next){
			if(next !== undefined) return next;
			return null;
		}
		next_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_library_next_label"));
		}
		NextPage(){
			const obj = new this.$.$mol_button_minor();
			(obj.enabled) = () => ((this.page_has_next()));
			(obj.click) = (next) => ((this.page_next(next)));
			(obj.sub) = () => ([(this.next_label())]);
			return obj;
		}
		Pagination(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.PageInfo()), 
				(this.PrevPage()), 
				(this.NextPage())
			]);
			return obj;
		}
		TableCard(){
			const obj = new this.$.$mol_card();
			(obj.content) = () => ([(this.Table()), (this.Pagination())]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_testops_app_library_title"));
		}
		tools(){
			return [(this.Stats())];
		}
		body(){
			return [(this.Filters()), (this.TableCard())];
		}
	};
	($mol_mem(($.$bog_testops_app_library.prototype), "Stats"));
	($mol_mem(($.$bog_testops_app_library.prototype), "search"));
	($mol_mem(($.$bog_testops_app_library.prototype), "Search"));
	($mol_mem(($.$bog_testops_app_library.prototype), "type_filter"));
	($mol_mem(($.$bog_testops_app_library.prototype), "TypeFilter"));
	($mol_mem(($.$bog_testops_app_library.prototype), "priority_filter"));
	($mol_mem(($.$bog_testops_app_library.prototype), "PriorityFilter"));
	($mol_mem(($.$bog_testops_app_library.prototype), "status_filter"));
	($mol_mem(($.$bog_testops_app_library.prototype), "StatusFilter"));
	($mol_mem(($.$bog_testops_app_library.prototype), "filters_reset"));
	($mol_mem(($.$bog_testops_app_library.prototype), "ResetFilters"));
	($mol_mem(($.$bog_testops_app_library.prototype), "Filters"));
	($mol_mem(($.$bog_testops_app_library.prototype), "Table"));
	($mol_mem(($.$bog_testops_app_library.prototype), "page_prev"));
	($mol_mem(($.$bog_testops_app_library.prototype), "PrevPage"));
	($mol_mem(($.$bog_testops_app_library.prototype), "page_next"));
	($mol_mem(($.$bog_testops_app_library.prototype), "NextPage"));
	($mol_mem(($.$bog_testops_app_library.prototype), "Pagination"));
	($mol_mem(($.$bog_testops_app_library.prototype), "TableCard"));
	($.$bog_testops_app_library_row) = class $bog_testops_app_library_row extends ($.$mol_row) {
		testcase_id(){
			return "";
		}
		title_text(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"testcase": (this.testcase_id())});
			(obj.sub) = () => ([(this.title_text())]);
			return obj;
		}
		Feature(){
			return "";
		}
		Priority(){
			return "";
		}
		TestType(){
			return "";
		}
		Status(){
			return "";
		}
		UpdatedAt(){
			return "";
		}
		view(next){
			if(next !== undefined) return next;
			return null;
		}
		view_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_library_row_view_label"));
		}
		View_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.view(next)));
			(obj.sub) = () => ([(this.view_label())]);
			return obj;
		}
		keep(next){
			if(next !== undefined) return next;
			return true;
		}
		Keep_checkbox(){
			const obj = new this.$.$mol_check_box();
			(obj.checked) = (next) => ((this.keep(next)));
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_library_row_Keep_checkbox_hint")));
			return obj;
		}
		Actions(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.View_btn()), (this.Keep_checkbox())]);
			return obj;
		}
		attr(){
			return {"mol_theme": "bog_testops_row"};
		}
		sub(){
			return [
				(this.Title()), 
				(this.Feature()), 
				(this.Priority()), 
				(this.TestType()), 
				(this.Status()), 
				(this.UpdatedAt()), 
				(this.Actions())
			];
		}
	};
	($mol_mem(($.$bog_testops_app_library_row.prototype), "Title"));
	($mol_mem(($.$bog_testops_app_library_row.prototype), "view"));
	($mol_mem(($.$bog_testops_app_library_row.prototype), "View_btn"));
	($mol_mem(($.$bog_testops_app_library_row.prototype), "keep"));
	($mol_mem(($.$bog_testops_app_library_row.prototype), "Keep_checkbox"));
	($mol_mem(($.$bog_testops_app_library_row.prototype), "Actions"));

//# sourceMappingURL=library.view.tree.js.map