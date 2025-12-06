	($.$bog_testops_app_validator) = class $bog_testops_app_validator extends ($.$mol_page) {
		validate(next){
			if(next !== undefined) return next;
			return null;
		}
		validate_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_validator_validate_label"));
		}
		Validate_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.validate(next)));
			(obj.sub) = () => ([(this.validate_label())]);
			return obj;
		}
		intro_text(){
			return (this.$.$mol_locale.text("$bog_testops_app_validator_intro_text"));
		}
		Intro(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.intro_text())]);
			return obj;
		}
		code_input(next){
			if(next !== undefined) return next;
			return "";
		}
		CodeInput(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_testops_app_validator_CodeInput_hint")));
			(obj.value) = (next) => ((this.code_input(next)));
			return obj;
		}
		validate_one(next){
			if(next !== undefined) return next;
			return null;
		}
		validate_one_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_validator_validate_one_label"));
		}
		ValidateOne_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.validate_one(next)));
			(obj.sub) = () => ([(this.validate_one_label())]);
			return obj;
		}
		InputCard(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_validator_InputCard_title")));
			(obj.content) = () => ([(this.CodeInput()), (this.ValidateOne_btn())]);
			return obj;
		}
		validation_report(){
			return "";
		}
		Results_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.validation_report()));
			return obj;
		}
		ResultsCard(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_validator_ResultsCard_title")));
			(obj.content) = () => ([(this.Results_text())]);
			return obj;
		}
		all_validation_report(){
			return "";
		}
		AllResults_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.all_validation_report()));
			return obj;
		}
		AllTestsCard(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_validator_AllTestsCard_title")));
			(obj.content) = () => ([(this.AllResults_text())]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_testops_app_validator_title"));
		}
		tools(){
			return [(this.Validate_btn())];
		}
		body(){
			return [
				(this.Intro()), 
				(this.InputCard()), 
				(this.ResultsCard()), 
				(this.AllTestsCard())
			];
		}
	};
	($mol_mem(($.$bog_testops_app_validator.prototype), "validate"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "Validate_btn"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "Intro"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "code_input"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "CodeInput"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "validate_one"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "ValidateOne_btn"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "InputCard"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "Results_text"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "ResultsCard"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "AllResults_text"));
	($mol_mem(($.$bog_testops_app_validator.prototype), "AllTestsCard"));

//# sourceMappingURL=validator.view.tree.js.map