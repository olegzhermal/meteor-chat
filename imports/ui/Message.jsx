import React from 'react'
import { cx } from '@emotion/css'

import * as S from './styles'

export function Message(props) {
  const {
    currentUserName,
    message,
    userName
  } = props

  const isMyMessage = userName === currentUserName

  return (
    <S.Message className={cx({ isMyMessage })}>
      <S.Name className={cx({ isMyMessage })}>{userName}</S.Name>
      <S.Text>{message}</S.Text>
    </S.Message>
  )
}
