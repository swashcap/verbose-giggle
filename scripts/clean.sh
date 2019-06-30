#!/bin/bash
set -eo pipefail

find src -type f \( -name '*.js' -o -name '*.js.map' \) -exec rm {} \+
