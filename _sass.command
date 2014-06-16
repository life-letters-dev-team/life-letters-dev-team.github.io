#!/bin/bash

cd "`dirname "$0"`"
sass --watch _sass/theme.scss:css/theme.css

