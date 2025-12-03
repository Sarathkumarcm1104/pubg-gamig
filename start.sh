#!/bin/bash

echo "🎮 PUBG Gaming Website - React Version"
echo "======================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting development server..."
echo "📱 Open your browser at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
