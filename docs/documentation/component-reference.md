---
layout: LayoutProps
---

## Events

  | Event | Arguments | Description |
  | ----- | --------- | ----------- |
  | `input` | `String`, `Object` | Fires when the input changes |
  | `validate` | `Object` | Fires when the correctness of the phone number changes (from `true` to `false` or vice-versa) and when the component is mounted |
  | `blur` |  | Fires on blur event |
  | `focus` |  | Fires on focus event |
  | `space` |  | Fires on `keyup.space` event |
  | `enter` |  | Fires on `keyup.enter` event |
  | `open` |  | Fires when the flags dropdown opens |
  | `close` |  | Fires when the flags dropdown closes |
  | `country-changed` | `Object` | Fires when country changed (even for the first time) |

## Slots
  | Slot | Description |
  | ---- | ----------- |
  | `arrow-icon` | Replace the arrow next to the flag with a component of your choice |
