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

import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import signupValidator from './signup.validator'

describe('signup validator', () => {
  let values

  it('should return required error on empty email', () => {
    // Given
    values = {
      email: '',
      captcha: 'captcha'
    }

    // When
    const result = signupValidator(values)
    
    // Then
    expect(result).to.deep.equal({
      email: 'general-input-error-required'
    })
  })

  it('should return captcha required error on empty captcha', () => {
    // Given
    values = {
      email: 'email@email.com',
      captcha: ''
    }

    // When
    const result = signupValidator(values)

    // Then
    expect(result).to.deep.equal({
      captcha: 'captcha-error-empty'
    })
  })
  
  it('should return email pattern error on invalid email', () => {
    let result
    
    // string
    // Given
    values = {
      email: 'notanemail',
      captcha: 'captcha'
    }

    // When
    result = signupValidator(values)
    
    // Then
    expect(result).to.deep.equal({
      email: 'email-error-pattern'
    })

    // one @
    // Given
    values.email = 'a@notanemail'

    // When
    result = signupValidator(values)

    // Then
    expect(result).to.deep.equal({
      email: 'email-error-pattern'
    })

    // one @ and wrong extension
    // Given
    values.email = 'a@notan.email.'

    // When
    result = signupValidator(values)

    // Then
    expect(result).to.deep.equal({
      email: 'email-error-pattern'
    })
  })

  it('should return empty object if email and captcha are ok', () => {
    // Given
    values = {
      email: 'an-email@email-good.com',
      captcha: 'captcha'
    }

    // When
    const result = signupValidator(values)

    // Then
    expect(result).to.deep.equal({})
  })
})
