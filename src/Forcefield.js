import React from 'react'

class Forcefield extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sealed: true }
    this.unseal = this.unseal.bind(this)
  }

  unseal() {
    this.setState({
      sealed: false,
    })
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          minWidth: '100%',
        }}
      >
        {this.props.children}
        {this.state.sealed === true ? (
          <div
            onClick={this.unseal}
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              height: '100%',
              width: 'auto',
            }}
          />
        ) : null}
      </div>
    )
  }
}

export default Forcefield
