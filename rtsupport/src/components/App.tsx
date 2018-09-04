import * as React from 'react'
import * as I from '../interfaces/CustomInterfaces'
import { ChannelSection } from './channels/ChannelSection'

class App extends React.Component<any,any> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeChannel: null,
      channels: []
    }
  }

  addChannel = (name: string) => {
    const newChannels = this.state.channels
    newChannels.push({
      id: newChannels.length,
      name
    })
    this.setState({ channels: newChannels })
  }

  setChannel = (channel: I.Channel) => {
    // TODO
  }

  render() {
    return (
      <ChannelSection
        channels={this.state.channels}
        addChannel={this.addChannel}
        setChannel={this.setChannel} />
    )
  }
}

export default App
