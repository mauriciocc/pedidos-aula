var express = require('express');
var Auth = require('./Auth');
var router = express.Router();
require('./SignInCtrl')(router, Auth);
require('./UserCtrl')(router, Auth);
require('./CategoryCtrl')(router, Auth);
require('./CityCtrl')(router, Auth);
require('./ProductCtrl')(router, Auth);
require('./AddressCtrl')(router, Auth);
require('./CustomerCtrl')(router, Auth);
require('./AuditingCtrl')(router, Auth);
require('./RoleCtrl')(router, Auth);
require('./StockEntryCtrl')(router, Auth);
require('./SaleCtrl')(router, Auth);

module.exports = router;
