	($.$bog_testops_app_generator) = class $bog_testops_app_generator extends ($.$mol_page) {
		can_generate(){
			return true;
		}
		generate(next){
			if(next !== undefined) return next;
			return null;
		}
		generate_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_generator_generate_label"));
		}
		Generate_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.enabled) = () => ((this.can_generate()));
			(obj.click) = (next) => ((this.generate(next)));
			(obj.sub) = () => ([(this.generate_label())]);
			return obj;
		}
		product(next){
			if(next !== undefined) return next;
			return "";
		}
		product_options(){
			return [
				"", 
				"compute", 
				"calculator", 
				"storage", 
				"kubernetes"
			];
		}
		Product(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.product(next)));
			(obj.options) = () => ((this.product_options()));
			return obj;
		}
		Product_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_Product_field_name")));
			(obj.content) = () => ([(this.Product())]);
			return obj;
		}
		test_type(next){
			if(next !== undefined) return next;
			return "manual";
		}
		TestType(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.test_type(next)));
			(obj.options) = () => ([
				"manual", 
				"ui", 
				"api", 
				"unit"
			]);
			return obj;
		}
		TestType_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_TestType_field_name")));
			(obj.content) = () => ([(this.TestType())]);
			return obj;
		}
		priority(next){
			if(next !== undefined) return next;
			return "NORMAL";
		}
		Priority(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.priority(next)));
			(obj.options) = () => ([
				"CRITICAL", 
				"NORMAL", 
				"LOW"
			]);
			return obj;
		}
		Priority_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_Priority_field_name")));
			(obj.content) = () => ([(this.Priority())]);
			return obj;
		}
		requirements(next){
			if(next !== undefined) return next;
			return "";
		}
		Requirements(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_Requirements_hint")));
			(obj.value) = (next) => ((this.requirements(next)));
			return obj;
		}
		Requirements_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_Requirements_field_name")));
			(obj.content) = () => ([(this.Requirements())]);
			return obj;
		}
		api_spec(next){
			if(next !== undefined) return next;
			return "";
		}
		ApiSpec(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_ApiSpec_hint")));
			(obj.value) = (next) => ((this.api_spec(next)));
			return obj;
		}
		ApiSpec_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_ApiSpec_field_name")));
			(obj.content) = () => ([(this.ApiSpec())]);
			return obj;
		}
		base_url(next){
			if(next !== undefined) return next;
			return "";
		}
		BaseUrl(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_BaseUrl_hint")));
			(obj.value) = (next) => ((this.base_url(next)));
			return obj;
		}
		BaseUrl_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_BaseUrl_field_name")));
			(obj.content) = () => ([(this.BaseUrl())]);
			return obj;
		}
		Form(){
			const obj = new this.$.$mol_form();
			(obj.form_fields) = () => ([
				(this.Product_field()), 
				(this.TestType_field()), 
				(this.Priority_field()), 
				(this.Requirements_field()), 
				(this.ApiSpec_field()), 
				(this.BaseUrl_field())
			]);
			return obj;
		}
		manual_code(){
			return "";
		}
		Manual_code(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.manual_code()));
			return obj;
		}
		Manual_code_card(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_Manual_code_card_title")));
			(obj.content) = () => ([(this.Manual_code())]);
			return obj;
		}
		automated_code(){
			return "";
		}
		Automated_code(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.automated_code()));
			return obj;
		}
		Automated_code_card(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_generator_Automated_code_card_title")));
			(obj.content) = () => ([(this.Automated_code())]);
			return obj;
		}
		save(next){
			if(next !== undefined) return next;
			return null;
		}
		save_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_generator_save_label"));
		}
		Save_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.save(next)));
			(obj.sub) = () => ([(this.save_label())]);
			return obj;
		}
		regenerate(next){
			if(next !== undefined) return next;
			return null;
		}
		regenerate_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_generator_regenerate_label"));
		}
		Regenerate_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.regenerate(next)));
			(obj.sub) = () => ([(this.regenerate_label())]);
			return obj;
		}
		SaveRow(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Save_btn()), (this.Regenerate_btn())]);
			return obj;
		}
		ResultCard(){
			const obj = new this.$.$mol_deck();
			(obj.items) = () => ([
				(this.Manual_code_card()), 
				(this.Automated_code_card()), 
				(this.SaveRow())
			]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_testops_app_generator_title"));
		}
		tools(){
			return [(this.Generate_btn())];
		}
		body(){
			return [(this.Form()), (this.ResultCard())];
		}
	};
	($mol_mem(($.$bog_testops_app_generator.prototype), "generate"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Generate_btn"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "product"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Product"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Product_field"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "test_type"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "TestType"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "TestType_field"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "priority"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Priority"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Priority_field"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "requirements"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Requirements"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Requirements_field"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "api_spec"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "ApiSpec"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "ApiSpec_field"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "base_url"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "BaseUrl"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "BaseUrl_field"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Form"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Manual_code"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Manual_code_card"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Automated_code"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Automated_code_card"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "save"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Save_btn"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "regenerate"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "Regenerate_btn"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "SaveRow"));
	($mol_mem(($.$bog_testops_app_generator.prototype), "ResultCard"));

//# sourceMappingURL=generator.view.tree.js.map