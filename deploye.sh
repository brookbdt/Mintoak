echo 'Deploying Mintoak'
git pull

npm install
npm run build

echo 'Restarting PM2'
pm2 restart 0