up.store:
	docker-compose up -d

stop.store:
	docker-compose stop

run.server:
	yarn start:dev

run.web:
	cd ./vue-admin && yarn dev