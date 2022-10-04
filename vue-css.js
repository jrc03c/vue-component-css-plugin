export const VueComponentCSSPlugin = {
  install() {},
}

if (typeof window !== "undefined") {
  window.VueComponentCSSPlugin = VueComponentCSSPlugin
}
