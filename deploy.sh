echo 'Deploying Mintoak...'
git pull
if [ $? -eq 0 ]; then
    echo 'Git pulled successfully'
    echo 'Rebuilding Project...'
    # npm install
    # npm run build

    echo 'Restarting PM2...'
    pm2 restart mintOak
    if [ $? -eq 0 ]; then
        echo 'Mintoak Deployed.'
    else
        echo 'PM2 not found, installing PM2...'
        npm i -g pm2
        echo 'PM2 starting mintOak...'
        pm2 delete mintOak
        pm2 start --name=mintOak "npm start"
        echo 'Mintoak Deployed.'
    fi
else
    echo FAIL
fi