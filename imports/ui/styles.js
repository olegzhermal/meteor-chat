import styled from '@emotion/styled'

export const FooterContainer = styled.div`
  margin-top: 20px;
`

export const Name = styled.div`
  margin: 0 0 0 10px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
  &.isMyMessage {
    margin: 0 10px 0 0;
  }
`
export const Text = styled.div``

export const Message = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  &.isMyMessage {
    flex-direction: row;
  }
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
