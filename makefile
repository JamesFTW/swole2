.PHONY: help
help: ## describe available commands
	@echo "Available targets:"
	@grep -E '^[a-zA-Z0-9_%-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

start: ## start the local api server after db is running
	npm run start:dev

cjc: ## clear jest cache
	npx jest --clearCache

deps: # dependencies
	npm install

depcheck: ## check dep usage
	npx depcheck

ri: ## reinstall node deps
	@echo "Removing existing node_modules..."
	rm -rf node_modules
	@echo "Installing dependencies..."
	npm install

test: ##
	jest --config=jest.config.js

jv: ## jest verbose debug
	jest --debug --verbose
