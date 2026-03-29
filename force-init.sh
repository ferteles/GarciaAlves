#!/bin/bash
pkill -f next
npm run dev > dev3.log 2>&1 &
DEV_PID=$!
sleep 20
curl -s http://localhost:3000/api/graphql
sleep 5
kill $DEV_PID
