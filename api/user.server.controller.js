/**
 * Kodo Kojo - Software factory done right
 * Copyright © 2016 Kodo Kojo (infos@kodokojo.io)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import * as userRepository from './user.server.repository'

export const initUser = (request, response) => {
  userRepository
    .initUser(request)
    .then(res => response.status(res.statusCode ? res.statusCode : 201).send(res.body))
    .catch(err => response.status(err.response && err.response.statusCode ? err.response.statusCode : 500).send(err))
}

export const postUser = (request, response) => {
  userRepository
      .postUser(request)
      .then(res => response.status(res.statusCode ? res.statusCode : 201).send(res.body))
      .catch(err => response.status(err.response && err.response.statusCode ? err.response.statusCode : 500).send(err))
}

export const updateUser = (request, response) => {
  userRepository
      .updateUser(request)
      .then(res => response.status(200).send(res.body))
      .catch(err => response.status(err.response && err.response.statusCode ? err.response.statusCode : 500).send(err))
}

export const getUserAccount = (request, response) => {
  userRepository
      .getUserAccount(request)
      .then(res => response.status(200).send(res.body))
      .catch(err => response.status(err.response && err.response.statusCode ? err.response.statusCode : 200).send(err))
}

export const getUser = (request, response) => {
  userRepository
      .getUser(request)
      .then(res => response.status(200).send(res.body))
      .catch(err => response.status(err.response && err.response.statusCode ? err.response.statusCode : 500).send(err))
}
