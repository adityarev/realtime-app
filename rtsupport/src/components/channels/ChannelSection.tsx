import * as React from 'react'
import { ChannelForm } from './ChannelForm'
import { ChannelList } from './ChannelList'

interface ChannelSectionProps {
  channels: []
  addChannel: (channelName: string) => void
  setChannel: ({}) => void
}

export class ChannelSection extends React.Component<ChannelSectionProps,any> {
  render() {
    return (
      <div>
        <ChannelList {...this.props} />
        <ChannelForm {...this.props} />
      </div>
    )
  }
}