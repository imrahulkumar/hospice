#!/bin/bash
cd build/
echo -ne '\n' | surge --domain hospice.surge.sh --token 'your token'
echo -ne 'published\n'
