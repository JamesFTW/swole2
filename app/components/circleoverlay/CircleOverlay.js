import { Svg, Defs, Rect, Mask, Circle } from 'react-native-svg'

export function CircleOverlay() {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Circle r="50%" cx="50%" cy="50%" fill="black" />
        </Mask>
      </Defs>
      <Rect
        height="100%"
        width="100%"
        fill="rgba(0, 0, 0, 0.5)"
        mask="url(#mask)"
        fill-opacity="0"
      />
    </Svg>
  )
}
