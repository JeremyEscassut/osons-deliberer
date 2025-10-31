## Makefile — common developer shortcuts

.PHONY: setup dev build migrate clr prisma-generate lint format

setup:
	npm install
	npx prisma generate

dev:
	npm run dev

build:
	npm run build

migrate:
	npm run prisma:migrate

clr:
	bash ./bin/clr

prisma-generate:
	npx prisma generate

lint:
	npm run lint

format:
	npx prettier --write .
