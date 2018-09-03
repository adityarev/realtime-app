import * as React from 'react'

interface ChannelProps {
  channel: {
    name: string
  }
  setChannel: ({}) => void
}

export class Channel extends React.Component<ChannelProps,any> {
  onClick() {
    const { channel, setChannel } = this.props
    setChannel(channel)
  }

  render() {
    const { channel } = this.props

    return (
      <li>
        <a onClick={this.onClick}>
          {channel.name}
        </a>
      </li>
    )
  }
}