# Makefile
install:
	npm ci

brain-games:
	node bin/brain-games
	
go:
	node bin/brain-games

mock:
	node mocks/tryQuestionfunc

lint:
	npx eslint	

even:
	node bin/brain-even

publish:
	npm publish --dry-run
