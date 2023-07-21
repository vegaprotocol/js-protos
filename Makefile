.PHONY: all clean
dist: PROTOS = $(shell find vega/protos/sources -type f -name "*.proto")
dist: vega $(PROTOS)
	mkdir -p dist
	protoc \
		--plugin=protoc-gen-js="$$(npm root)/.bin/protoc-plugin-js" \
		--js_out="./dist" \
		-I "vega/protos/sources" \
		vega/commands/v1/transaction.proto

vega: .gitmodules
	git submodule init
	git submodule update --depth 1

clean:
	rm -r vega dist
