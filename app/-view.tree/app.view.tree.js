	($.$bog_testops_app) = class $bog_testops_app extends ($.$mol_book2_catalog) {
		Realm(){
			const obj = new this.$.$hyoo_crus_glob();
			return obj;
		}
		Theme_toggle(){
			const obj = new this.$.$bog_theme_toggle();
			(obj.theme_auto) = () => ((this.Theme()));
			return obj;
		}
		Sources(){
			const obj = new this.$.$mol_link_source();
			(obj.uri) = () => ("https://github.com/best-online-games/bog/tree/master/testops");
			return obj;
		}
		Theme(){
			const obj = new this.$.$bog_theme_auto();
			(obj.theme_light) = () => ("$mol_theme_light");
			(obj.theme_dark) = () => ("$mol_theme_dark");
			return obj;
		}
		Generator(){
			const obj = new this.$.$bog_testops_app_generator();
			return obj;
		}
		Library(){
			const obj = new this.$.$bog_testops_app_library();
			return obj;
		}
		Optimizer(){
			const obj = new this.$.$bog_testops_app_optimizer();
			return obj;
		}
		Validator(){
			const obj = new this.$.$bog_testops_app_validator();
			return obj;
		}
		Settings(){
			const obj = new this.$.$bog_testops_app_settings();
			return obj;
		}
		realm(){
			return (this.Realm());
		}
		Placeholder(){
			return null;
		}
		Menu_logo(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ("bog/testops/assets/favicon.ico");
			return obj;
		}
		menu_title(){
			return (this.$.$mol_locale.text("$bog_testops_app_menu_title"));
		}
		menu_tools(){
			return [(this.Theme_toggle()), (this.Sources())];
		}
		plugins(){
			return [(this.Theme())];
		}
		spreads(){
			return {
				"generator": (this.Generator()), 
				"library": (this.Library()), 
				"optimizer": (this.Optimizer()), 
				"validator": (this.Validator()), 
				"settings": (this.Settings())
			};
		}
	};
	($mol_mem(($.$bog_testops_app.prototype), "Realm"));
	($mol_mem(($.$bog_testops_app.prototype), "Theme_toggle"));
	($mol_mem(($.$bog_testops_app.prototype), "Sources"));
	($mol_mem(($.$bog_testops_app.prototype), "Theme"));
	($mol_mem(($.$bog_testops_app.prototype), "Generator"));
	($mol_mem(($.$bog_testops_app.prototype), "Library"));
	($mol_mem(($.$bog_testops_app.prototype), "Optimizer"));
	($mol_mem(($.$bog_testops_app.prototype), "Validator"));
	($mol_mem(($.$bog_testops_app.prototype), "Settings"));
	($mol_mem(($.$bog_testops_app.prototype), "Menu_logo"));

//# sourceMappingURL=app.view.tree.js.map