#!/bin/bash
set -eo pipefail

rm -rf dist &
find src -type f \( -name '*.js' -o -name '*.js.map' \) -exec rm {} \+ &

wait
