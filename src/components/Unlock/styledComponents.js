import styled from 'styled-components'

export const MainUnlockAppContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940, #0b0c1e);
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: #ffff;
`

export const LockImage = styled.img`
  width: 100px;
  margin: 10px 0px 15px 0px;
`

export const LockedUnlockedParagraph = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
`

export const ButtonToUnlock = styled.button`
  color: #ffff;
  font-weight: 600;
  height: 35px;
  width: 150px;
  margin-top: 20px;
  background-color: #06b6d4;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`
