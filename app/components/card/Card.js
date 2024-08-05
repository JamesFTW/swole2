import styles from './Card.styles'
import React from 'react'
import { View, Pressable, Animated } from 'react-native'
import { LAYOUT, COLORS } from '@constants'

/**
 * Card Component
 *
 * A flexible and customizable card component for React Native applications.
 * This component supports both legacy and new usage patterns, ensuring backward compatibility.
 *
 * @component
 *
 * @param {Object} props - The properties that define the Card's behavior and appearance.
 * @param {ReactNode} props.children - The content to be rendered inside the Card.
 * @param {Function} [props.onPress] - Callback function to be called when the Card is pressed.
 * @param {Object} [props.style] - Additional styles to be applied to the Card container.
 * @param {Object} [props.contentStyle] - Additional styles to be applied to the Card's content container.
 * @param {number} [props.elevation=2] - The elevation of the Card (Android only).
 * @param {number|boolean} [props.borderRadius] - The border radius of the Card. If set to true, defaults to LAYOUT.SPACING_XS_12.
 * @param {string} [props.backgroundColor=COLORS.WHITE_WHITE] - The background color of the Card.
 * @param {string} [props.borderColor=COLORS.CARD_BOARDER_COLOR] - The border color of the Card.
 * @param {number} [props.borderWidth=1] - The width of the Card's border.
 * @param {number} [props.padding=LAYOUT.SPACING_XS_12] - The padding inside the Card.
 * @param {number} [props.cardHeight] - The fixed height of the Card. If provided, uses Animated.View for content.
 *
 * @example
 * // Basic usage
 * <Card>
 *   <Text>Simple card content</Text>
 * </Card>
 *
 * @example
 * // Using with onPress and custom styles
 * <Card
 *   onPress={() => console.log('Card pressed')}
 *   style={{ marginBottom: 10 }}
 *   backgroundColor="#f0f0f0"
 *   borderRadius={8}
 * >
 *   <Text>Pressable card with custom style</Text>
 * </Card>
 *
 * @example
 * // Using with fixed height (legacy support)
 * <Card
 *   cardHeight={150}
 *   backgroundColor={COLORS.PRIMARY}
 * >
 *   <Text>Card with fixed height</Text>
 * </Card>
 */

export const Card = ({
  children,
  onPress,
  style,
  contentStyle,
  elevation = 2,
  borderRadius,
  backgroundColor = COLORS.WHITE_WHITE,
  borderColor = COLORS.CARD_BOARDER_COLOR,
  borderWidth = 1,
  padding = LAYOUT.SPACING_XS_12,
  cardHeight,
}) => {
  const CardContainer = onPress ? Pressable : View
  const ContentContainer = cardHeight ? Animated.View : View

  const borderRadiusValue = borderRadius !== undefined ? borderRadius : borderRadius ? LAYOUT.SPACING_XS_12 : 0

  return (
    <CardContainer
      style={[
        styles.card,
        {
          elevation,
          borderRadius: borderRadiusValue,
          backgroundColor,
          borderColor,
          borderWidth,
        },
        style,
      ]}
      onPress={onPress}>
      <ContentContainer style={[styles.content, { padding }, cardHeight && { height: cardHeight }, contentStyle]}>
        {children}
      </ContentContainer>
    </CardContainer>
  )
}
