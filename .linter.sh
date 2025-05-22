#!/bin/bash
cd /home/kavia/workspace/code-generation/tigerworld-conservation-habitat-and-ecosystem-significance-95173-95188/main_container_for_tigerworld_conservation_habitat_and_ecosystem_significance
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

