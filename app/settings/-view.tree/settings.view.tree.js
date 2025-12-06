	($.$bog_testops_app_settings) = class $bog_testops_app_settings extends ($.$mol_page) {
		api_key(next){
			if(next !== undefined) return next;
			return "";
		}
		ApiKey(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_ApiKey_hint")));
			(obj.value) = (next) => ((this.api_key(next)));
			return obj;
		}
		ApiKey_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_ApiKey_field_name")));
			(obj.content) = () => ([(this.ApiKey())]);
			return obj;
		}
		api_model(next){
			if(next !== undefined) return next;
			return "claude-3-5-sonnet";
		}
		ApiModel(){
			const obj = new this.$.$mol_select();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_ApiModel_hint")));
			(obj.value) = (next) => ((this.api_model(next)));
			(obj.options) = () => ([
				"claude-3-5-sonnet", 
				"gpt-4", 
				"gpt-4-turbo"
			]);
			return obj;
		}
		ApiModel_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_ApiModel_field_name")));
			(obj.content) = () => ([(this.ApiModel())]);
			return obj;
		}
		api_test(next){
			if(next !== undefined) return next;
			return null;
		}
		api_test_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_settings_api_test_label"));
		}
		ApiTest_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.api_test(next)));
			(obj.sub) = () => ([(this.api_test_label())]);
			return obj;
		}
		ApiCard(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_ApiCard_title")));
			(obj.content) = () => ([
				(this.ApiKey_field()), 
				(this.ApiModel_field()), 
				(this.ApiTest_btn())
			]);
			return obj;
		}
		gitlab_token(next){
			if(next !== undefined) return next;
			return "";
		}
		GitlabToken(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabToken_hint")));
			(obj.value) = (next) => ((this.gitlab_token(next)));
			return obj;
		}
		GitlabToken_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabToken_field_name")));
			(obj.content) = () => ([(this.GitlabToken())]);
			return obj;
		}
		gitlab_url(next){
			if(next !== undefined) return next;
			return "";
		}
		GitlabUrl(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabUrl_hint")));
			(obj.value) = (next) => ((this.gitlab_url(next)));
			return obj;
		}
		GitlabUrl_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabUrl_field_name")));
			(obj.content) = () => ([(this.GitlabUrl())]);
			return obj;
		}
		gitlab_project(next){
			if(next !== undefined) return next;
			return "";
		}
		GitlabProject(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabProject_hint")));
			(obj.value) = (next) => ((this.gitlab_project(next)));
			return obj;
		}
		GitlabProject_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabProject_field_name")));
			(obj.content) = () => ([(this.GitlabProject())]);
			return obj;
		}
		gitlab_test(next){
			if(next !== undefined) return next;
			return null;
		}
		gitlab_test_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_settings_gitlab_test_label"));
		}
		GitlabTest_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.gitlab_test(next)));
			(obj.sub) = () => ([(this.gitlab_test_label())]);
			return obj;
		}
		GitlabCard(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_GitlabCard_title")));
			(obj.content) = () => ([
				(this.GitlabToken_field()), 
				(this.GitlabUrl_field()), 
				(this.GitlabProject_field()), 
				(this.GitlabTest_btn())
			]);
			return obj;
		}
		allure_owner(next){
			if(next !== undefined) return next;
			return "qa-team";
		}
		AllureOwner(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_AllureOwner_hint")));
			(obj.value) = (next) => ((this.allure_owner(next)));
			return obj;
		}
		AllureOwner_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_AllureOwner_field_name")));
			(obj.content) = () => ([(this.AllureOwner())]);
			return obj;
		}
		AllureCard(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_settings_AllureCard_title")));
			(obj.content) = () => ([(this.AllureOwner_field())]);
			return obj;
		}
		save(next){
			if(next !== undefined) return next;
			return null;
		}
		save_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_settings_save_label"));
		}
		Save_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.save(next)));
			(obj.sub) = () => ([(this.save_label())]);
			return obj;
		}
		reset(next){
			if(next !== undefined) return next;
			return null;
		}
		reset_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_settings_reset_label"));
		}
		Reset_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.reset(next)));
			(obj.sub) = () => ([(this.reset_label())]);
			return obj;
		}
		SaveRow(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Save_btn()), (this.Reset_btn())]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_testops_app_settings_title"));
		}
		body(){
			return [
				(this.ApiCard()), 
				(this.GitlabCard()), 
				(this.AllureCard()), 
				(this.SaveRow())
			];
		}
	};
	($mol_mem(($.$bog_testops_app_settings.prototype), "api_key"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "ApiKey"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "ApiKey_field"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "api_model"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "ApiModel"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "ApiModel_field"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "api_test"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "ApiTest_btn"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "ApiCard"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "gitlab_token"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabToken"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabToken_field"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "gitlab_url"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabUrl"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabUrl_field"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "gitlab_project"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabProject"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabProject_field"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "gitlab_test"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabTest_btn"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "GitlabCard"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "allure_owner"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "AllureOwner"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "AllureOwner_field"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "AllureCard"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "save"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "Save_btn"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "reset"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "Reset_btn"));
	($mol_mem(($.$bog_testops_app_settings.prototype), "SaveRow"));

//# sourceMappingURL=settings.view.tree.js.map