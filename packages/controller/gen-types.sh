#! /bin/bash

apollo schema:download --endpoint=http://localhost:4000
apollo client:codegen --localSchemaFile=schema.json --target=typescript --includes=src/**/*.tsx --tagName=gql --addTypename --outputFlat src/generatedTypes