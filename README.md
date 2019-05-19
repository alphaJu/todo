1. nodejs install
  (1)
  Use Current Release: At te last update of this tutorial, Node.js 12 is the current Node.js release available.
    sudo apt-get install curl python-software-properties
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  Use LTS Release : At the last update of this tutorial, Node.js 10.15.3 is the LTS release available.
    sudo apt-get install curl python-software-properties
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  (2)
  sudo apt-get install nodejs
 
  https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/
  
  +)
  npm install
  package.json으로 모듈 의존성 관리
  
2. mongodb install
  (1)
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
  (2)ubuntu16.04
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
  (3)
  sudo apt-get update
  (4)
  sudo apt-get install -y mongodb-org
  (5)
  sudo service mongod start
  (6)
  sudo service mongod stop
  (7)
  sudo service mongod restart
  (8)
  mongo
  
  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
