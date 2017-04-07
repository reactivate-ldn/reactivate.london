import React, { Component } from 'react'
import styled from 'styled-components'

const DialogContainer = styled.div`
  font-size: 10px;
  border: .1em solid #d6d6d6;
  padding: 0;
  margin: 0;
  line-height: 0;
  background-color: #fafafa;
  width: 25em;
  height: 15.5em;
  position: absolute;
  border-radius: .4em;
  padding: .4em;
  box-sizing: content-box;
  margin-top: .4em;
  overflow: hidden;
`

const Dialog = () => (
  <DialogContainer>
    <iframe
      src="https://slack.reactivate.london/iframe/dialog"
      style={{
        borderWidth: 0,
        width: '25em',
        height: '15em'
      }}
    />
  </DialogContainer>
)

class SlackBadge extends Component {
  state = {
    width: 140,
    visibility: 'hidden',
    showDialog: false
  }

  closeDialog = () => {
    this.setState({ showDialog: false })

    window.removeEventListener('click', this.closeDialog, true)
    window.removeEventListener('touchend', this.closeDialog, true)
  }

  toggleDialog = () => {
    if (this.state.showDialog) {
      return this.closeDialog()
    }

    this.setState({ showDialog: true })

    window.addEventListener('click', this.closeDialog, true)
    window.addEventListener('touchend', this.closeDialog, true)
  }

  onLoad = () => {
    const { ref } = this
    const id = (Math.random() * (1 << 24) | 0)
    const click = `slackin-click:${id}`
    const wp = `slackin-width:${id}:`
    const redirect = `slackin-redirect:${id}:`

    window.addEventListener('message', ({ data }) => {
      if (typeof data !== 'string') {
        return
      }

      // Show dialog upon click
      if (data === click) {
        this.toggleDialog()
      }

      // Update width and show iframe
      if (data.substr(0, wp.length) === wp) {
        const width = data.substr(wp.length)
        this.setState({ width, visibility: 'visible' })
      }

      // Redirect to URL
      if (data.substr(0, redirect.length) === redirect) {
        location.href = data.substr(redirect.length)
      }
    })

    ref.contentWindow.postMessage('slackin:' + id, '*')
  }

  render() {
    const { width, visibility, showDialog } = this.state

    return (
      <div style={{ position: 'relative' }}>
        <iframe
          src="https://slack.reactivate.london/iframe"
          ref={node => this.ref = node}
          onLoad={this.onLoad}
          style={{
            borderWidth: 0,
            height: '20px',
            width: `${width}px`,
            visibility
          }}
        />

        { showDialog && (
          <Dialog />
        )}
      </div>
    )
  }
}

export default SlackBadge
