.PHONY: all dist clean
dist: PROTOS = $(shell find vendor/vega/protos/sources -type f -name "*.proto")
dist: vendor/vega $(PROTOS)
	protoc \
		--plugin=protoc-gen-js="$$(npm root)/.bin/protoc-plugin-js" \
		--js_out="." \
		-I "vendor/vega/protos/sources" \
		vega/commands/v1/transaction.proto

vendor/vega: .gitmodules
	git submodule init
	git submodule update --depth 1

clean:
	rm -r google.d.ts google.js index.js index.d.ts messages.json vega.d.ts vega.js vendor/vega vega google
