#!/bin/sh
set -eu

PORT="${PORT:-80}"

sed "s/\${PORT}/${PORT}/g" /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"
