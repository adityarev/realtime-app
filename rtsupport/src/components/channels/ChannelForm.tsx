import * as React from 'react'

interface ChannelFormProps {
  addChannel: (channelName: string) => void
}

export class ChannelForm extends React.Component<ChannelFormProps,any> {
  channelInput: HTMLInputElement
  
  setFocus() {
    this.channelInput.focus()
  }
  
  onSubmit() {
    const channelName = this.channelInput.value
    this.props.addChannel(channelName)
    this.channelInput.value = ''
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          ref={(ref) => this.channelInput = ref as HTMLInputElement}
          onClick={this.setFocus} />
      </form>
    )
  }
}