import React from 'react'
import { storiesOf } from '@storybook/react'

import Modal from '../src/Modal/Modal'
import ModalBg from '../src/Modal/ModalBg'
import ModalBody from '../src/Modal/ModalBody'
import ModalTitle from '../src/Modal/ModalTitle'
import ModalSubtitle from '../src/Modal/ModalSubtitle'
import ModalText from '../src/Modal/ModalText'
import ModalLink from '../src/Modal/ModalLink'

storiesOf('Modal', module)
  .add('Modal', () => (
    <>
      <div className="row flex-spaces child-borders">
        <label htmlFor="modal-1" className="paper-btn margin">
          Open Modal!
        </label>
      </div>
      <Modal modalId="modal-1">
        <ModalBg />
        <ModalBody>
          <label className="btn-close" htmlFor="modal-1">
            X
          </label>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalSubtitle>Modal Subtitle</ModalSubtitle>
          <ModalText>
            This is an example of modal which is implemented with pure CSS! :D
          </ModalText>
          <label className="paper-btn" htmlFor="modal-1">
            Nice!
          </label>
        </ModalBody>
      </Modal>
    </>
  ))
  .add('Modal with ModalLink', () => (
    <>
      <div className="row flex-spaces child-borders">
        <label className="paper-btn margin" htmlFor="modal-2">
          Another Modal!
        </label>
      </div>
      <Modal modalId="modal-2">
        <ModalBg />
        <ModalBody>
          <label className="btn-close" htmlFor="modal-2">
            X
          </label>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalSubtitle>Modal Subtitle</ModalSubtitle>
          <ModalText>
            This is another example of modal which is implemented with pure CSS!
            :D
          </ModalText>
          <a href="/#download">Get PaperCSS</a>
          <span> </span>
          <ModalLink>Close</ModalLink>
        </ModalBody>
      </Modal>
    </>
  ))
