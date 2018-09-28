/*
 * *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

/**
 * @file fogType.js
 * @author Zishan Iqbal
 * @description This file includes a fog_type model used by sequalize for ORM;
 */

const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');
const CatalogItem = require('./catalogItem');

const FogType = sequelize.define('iofog_type', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, field: 'id'},
    name: {type: Sequelize.TEXT, field: 'name'},
    image: {type: Sequelize.TEXT, field: 'image'},
    description: {type: Sequelize.TEXT, field: 'description'}
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of table names
    freezeTableName: true,
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true
});

FogType.belongsTo(CatalogItem, {
    foreignKey: 'network_catalog_item_id',
    as: 'networkcatalogItemId'
});

FogType.belongsTo(CatalogItem, {
    foreignKey: 'hal_catalog_item_id',
    as: 'halcatalogItemId'
});

FogType.belongsTo(CatalogItem, {
    foreignKey: 'bluetooth_catalog_item_id',
    as: 'bluetoothcatalogItemId'
});

module.exports = FogType;
