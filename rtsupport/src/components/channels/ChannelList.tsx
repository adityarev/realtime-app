import * as React from 'react'
import * as I from '../../interfaces/CustomInterfaces'
import { Channel } from './Channel'

interface ChannelListProps {
  channels: I.Channel[]
  setChannel: (channel: I.Channel) => void
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