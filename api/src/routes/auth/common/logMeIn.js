import { createAccessToken } from './token'

import { queryDb } from 'common/utils/utils'
import { throwIf, throwError } from 'common/utils/error'
import { createCookie } from './cookie'

export const logMeIn = async (userId, res) => {
    const token = createAccessToken({
        userId,
    })
    console.log('adding cookie')
    createCookie(res, token)

    return token
}
