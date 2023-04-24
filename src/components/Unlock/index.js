import {useState} from 'react'
import {
  MainUnlockAppContainer,
  LockImage,
  LockedUnlockedParagraph,
  ButtonToUnlock,
} from './styledComponents'

const Unlock = () => {
  const [isLock, unlockApp] = useState(true)

  const changeLockScreen = () => {
    unlockApp(prevState => !prevState)
  }

  return (
    <MainUnlockAppContainer>
      <LockImage
        src={
          isLock
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLock ? 'lock' : 'unlock'}
      />
      <LockedUnlockedParagraph>
        Your Device is {isLock ? 'Locked' : 'Unlocked'}
      </LockedUnlockedParagraph>
      <ButtonToUnlock onClick={changeLockScreen} type="button">
        {isLock ? 'Unlock' : 'Lock'}
      </ButtonToUnlock>
    </MainUnlockAppContainer>
  )
}

export default Unlock
