# Makefile
install:
	npm ci

brain-games:
go:
	node bin/brain-games

mock:
	node mocks/tryQuestionfunc

lint:
	npx eslint	

