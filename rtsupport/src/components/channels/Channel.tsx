import * as React from 'react'
import * as I from '../../interfaces/CustomInterfaces'

interface ChannelProps {
  channel: I.Channel
  setChannel: (channel: I.Channel) => void
}

export class Channel extends React.Component<ChannelProps,any> {
  onClick = () => {
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