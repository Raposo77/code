## @ system
.PHONY: run
run: ## run the system
	python manage.py runserver
make: ## run makemigrations
	python manage.py makemigrations
migrate: ## run migrate
	python manage.py migrate
