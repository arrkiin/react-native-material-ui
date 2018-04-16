/* eslint-disable import/no-unresolved, import/extensions */
import { View, AnimatedValue, AnimatedTiming } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* eslint-enable import/no-unresolved, import/extensions */
import RippleFeedback from '../RippleFeedback'
import getPlatformElevation from '../styles/getPlatformElevation'
const ViewPropTypes = View.propTypes

const propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.shape({
    container: ViewPropTypes.style,
  }),
}
const defaultProps = {
  children: null,
  onPress: null,
  style: {},
}
const contextTypes = {
  uiTheme: PropTypes.object.isRequired,
}

function getStyles(props, context) {
  const { card } = context.uiTheme

  const local = {}

  if (props.fullWidth) {
    local.container = {
      marginHorizontal: 0,
    }
  }

  return {
    container: [card.container, local.container, props.style.container],
  }
}

class Card extends Component {
  constructor(props, context) {
    super(props, context)

    this.elevation = new AnimatedValue(2)
    this.state = {
      styles: {
        ...getStyles(props, context),
      }
    }
    this.elevation.addListener(({ value }) => {
      this.setState({
        ...getStyles(props, context),
        shadow: getPlatformElevation(Math.floor(value))
      })
    })
  }
  animate = (from, to) => {
    let duration = 0
    if (from < to) {
      duration = to / (to - from) * 200
    } else {
      duration = from / (from - to) * 200
    }
    AnimatedTiming(this.elevation, {
      toValue: to,
      duration: duration,
    }).start()
  }
  onHoverHandler = () => {
    this.elevation.stopAnimation(value => this.animate(value, 12))
  }
  onHoverLostHandler = () => {
    this.elevation.stopAnimation(value => this.animate(value, 2))
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ styles: getStyles(nextProps, this.context) })
  }
  renderContent = () => {
    const { children } = this.props
    const { styles } = this.state
    return (
      <View
        style={[styles.container,this.state.shadow]}
        pointerEvents="auto"
        onMouseEnter={() => this.onHoverHandler()}
        onMouseLeave={() => this.onHoverLostHandler()}
        ref={ref => {
          this.container = ref
        }}
      >
        {children}
      </View>
    )
  }
  render() {
    const { onPress } = this.props
    if (onPress) {
      return (
        <RippleFeedback onPress={onPress}>
          {this.renderContent(elevation)}
        </RippleFeedback>
      )
    }

    return this.renderContent()
  }
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps
Card.contextTypes = contextTypes

export default Card
