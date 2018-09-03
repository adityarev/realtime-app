import * as React from 'react'

interface ChannelFormProps {
  addChannel: (channelName: string) => void
}

export class ChannelForm extends React.Component<ChannelFormProps,any> {
  onSubmit() {
    const node = this.refs.channel
    const channelName = node.value
    this.props.addChannel(channelName)
    node.value = ''
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          ref='channel' />
      </form>
    )
  }
}