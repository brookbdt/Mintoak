echo "Deploying Mintoak..."
IP=$(curl -s https://ipinfo.io/ip)

echo 'Git pulled successfully'
echo 'Rebuilding Project...'
npm install
npm run build

echo "Restarting PM2..."
pm2 restart mintOak
if [ $? -eq 0 ]; then
    echo "Mintoak Deployed. Public URL => http://${IP}:3000 OR https://${IP}:3000"
else
    echo "PM2 not found, installing PM2..."
    npm i -g pm2
    echo "PM2 starting mintOak..."
    pm2 delete mintOak
    pm2 start --name=mintOak "npm start"
    echo "Mintoak Deployed. Public URL => http://${IP}:3000 OR https://${IP}:3000"
fi