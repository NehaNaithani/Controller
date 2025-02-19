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

const daemonize = require('daemonize2')
const logger = require('./logger')

const daemon = daemonize.setup({
  main: 'server.js',
  name: 'iofog-controller',
  pidfile: 'iofog-controller.pid',
  silent: true
})

daemon
  .on('starting', async () => {
    logger.info('Starting iofog-controller...')
  })
  .on('stopping', () => {
    logger.info('Stopping iofog-controller...')
  })
  .on('stopped', (pid) => {
    logger.info('iofog-controller stopped.')
  })
  .on('running', (pid) => {
    logger.info('iofog-controller already running. PID: ' + pid)
  })
  .on('notrunning', () => {
    logger.info('iofog-controller is not running')
  })
  .on('error', (err) => {
    logger.error('iofog-controller failed to start:  ' + err.message)
  })

module.exports = daemon
