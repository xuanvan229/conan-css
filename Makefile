
build-pug:
	@echo "=== Compiling templates ..."
	@gulp

build-css:
	@echo "=== Compiling CSS ..."
	@lessc src/less/style.less build/css/style.css