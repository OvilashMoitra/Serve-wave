#!/bin/bash
# 1. Remove all cached or broken dependencies
rm -rf node_modules package-lock.json .next
npm cache clean --force

# 2. Reinstall safely (skip peer conflicts)
npm install --legacy-peer-deps

# 3. Clean build
npm run build

