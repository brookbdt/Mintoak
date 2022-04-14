echo 'Deploying Mintoak...'
git pull
if [ $? -eq 0 ]; then
    echo 'Git pulled successfully'
    echo 'Rebuilding Project...'
else
    echo FAIL
fi

npm install
npm run build

echo 'Restarting PM2...'
pm2 restart 0

echo 'Mintoak Deployed.'