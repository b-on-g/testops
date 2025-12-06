	($.$bog_testops_app_optimizer) = class $bog_testops_app_optimizer extends ($.$mol_page) {
		analyze(next){
			if(next !== undefined) return next;
			return null;
		}
		analyze_label(){
			return (this.$.$mol_locale.text("$bog_testops_app_optimizer_analyze_label"));
		}
		Analyze_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.analyze(next)));
			(obj.sub) = () => ([(this.analyze_label())]);
			return obj;
		}
		intro_text(){
			return (this.$.$mol_locale.text("$bog_testops_app_optimizer_intro_text"));
		}
		Intro(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.intro_text())]);
			return obj;
		}
		coverage_report(){
			return "";
		}
		Coverage_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.coverage_report()));
			return obj;
		}
		Coverage_card(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_optimizer_Coverage_card_title")));
			(obj.content) = () => ([(this.Coverage_text())]);
			return obj;
		}
		duplicates_report(){
			return "";
		}
		Duplicates_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.duplicates_report()));
			return obj;
		}
		Duplicates_card(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_optimizer_Duplicates_card_title")));
			(obj.content) = () => ([(this.Duplicates_text())]);
			return obj;
		}
		gaps_report(){
			return "";
		}
		Gaps_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.gaps_report()));
			return obj;
		}
		Gaps_card(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_optimizer_Gaps_card_title")));
			(obj.content) = () => ([(this.Gaps_text())]);
			return obj;
		}
		suggestions_report(){
			return "";
		}
		Suggestions_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.suggestions_report()));
			return obj;
		}
		Suggestions_card(){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_testops_app_optimizer_Suggestions_card_title")));
			(obj.content) = () => ([(this.Suggestions_text())]);
			return obj;
		}
		ResultsCard(){
			const obj = new this.$.$mol_deck();
			(obj.items) = () => ([
				(this.Coverage_card()), 
				(this.Duplicates_card()), 
				(this.Gaps_card()), 
				(this.Suggestions_card())
			]);
			return obj;
		}
		loading_text(){
			return (this.$.$mol_locale.text("$bog_testops_app_optimizer_loading_text"));
		}
		LoadingIndicator(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.loading_text())]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_testops_app_optimizer_title"));
		}
		tools(){
			return [(this.Analyze_btn())];
		}
		body(){
			return [
				(this.Intro()), 
				(this.ResultsCard()), 
				(this.LoadingIndicator())
			];
		}
	};
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "analyze"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Analyze_btn"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Intro"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Coverage_text"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Coverage_card"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Duplicates_text"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Duplicates_card"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Gaps_text"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Gaps_card"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Suggestions_text"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "Suggestions_card"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "ResultsCard"));
	($mol_mem(($.$bog_testops_app_optimizer.prototype), "LoadingIndicator"));

//# sourceMappingURL=optimizer.view.tree.js.map