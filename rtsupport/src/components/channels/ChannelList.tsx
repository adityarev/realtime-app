import * as React from 'react'
import { Channel } from './Channel'

interface ChannelListProps {
  channels: []
  setChannel: (channel: {}) => void
}

export class ChannelList extends React.Component<ChannelListProps,any> {
  render() {
    const { channels, setChannel } = this.props
    const channelList = channels.map((channel) => {
      <Channel
        channel={channel}
        setChannel={setChannel} />
    })

    return (
      <ul>{channelList}</ul>
    )
  }
}