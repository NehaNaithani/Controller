/*
 *  *******************************************************************************
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

const signUp = {
  'id': '/signUp',
  'type': 'object',
  'properties': {
    'firstName': { 'type': 'string', 'minLength': 3 },
    'lastName': { 'type': 'string', 'minLength': 3 },
    'email': {
      'type': 'string',
      'pattern': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}' +
      '\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    },
    'password': { 'type': 'string', 'minLength': 8 }
  },
  'required': ['email', 'password', 'firstName', 'lastName'],
  'additionalProperties': true
}

const login = {
  'id': '/login',
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'pattern': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}' +
      '\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    },
    'password': { 'type': 'string' }
  },
  'required': ['email', 'password'],
  'additionalProperties': true
}

const resendActivation = {
  'id': '/resendActivation',
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'pattern': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}' +
      '\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    }
  },
  'required': ['email'],
  'additionalProperties': true
}

const activateUser = {
  'id': '/activateUser',
  'type': 'object',
  'properties': {
    'activationCode': { 'type': 'string' }
  },
  'required': ['activationCode'],
  'additionalProperties': true
}

const activateUserCLI = {
  'id': '/activateUserCLI',
  'type': 'object',
  'properties': {
    'email': { 'type': 'string' }
  },
  'required': ['email'],
  'additionalProperties': true
}

const updateUserProfile = {
  'id': '/updateUserProfile',
  'type': 'object',
  'properties': {
    'firstName': { 'type': 'string', 'minLength': 3 },
    'lastName': { 'type': 'string', 'minLength': 3 }
  },
  'required': [],
  'additionalProperties': true
}

const updateUserProfileCLI = {
  'id': '/updateUserProfileCLI',
  'type': 'object',
  'properties': {
    'firstName': { 'type': 'string', 'minLength': 3 },
    'lastName': { 'type': 'string', 'minLength': 3 },
    'password': { 'type': 'string', 'minLength': 8 }
  },
  'required': [],
  'additionalProperties': true
}

const updatePassword = {
  'id': '/updatePassword',
  'type': 'object',
  'properties': {
    'oldPassword': { 'type': 'string' },
    'newPassword': { 'type': 'string', 'minLength': 8 }
  },
  'required': ['oldPassword', 'newPassword'],
  'additionalProperties': true
}

const resetUserPassword = {
  'id': '/resetUserPassword',
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'pattern': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}' +
      '\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    }
  },
  'required': ['email'],
  'additionalProperties': true
}

module.exports = {
  mainSchemas: [signUp, login, resendActivation, activateUser, activateUserCLI, updateUserProfile,
    updateUserProfileCLI, updatePassword, resetUserPassword],
  innerSchemas: []
}
