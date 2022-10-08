const VueComponentCSSPlugin = {
  install(app) {
    const oldComponentFunction = app.component

    app.component = function (name, component) {
      const oldMountedFunction = component.mounted
      const oldUnmountedFunction = component.unmounted
      const id = Math.random().toString().split(".")[1]

      component.mounted = function () {
        const self = this
        const styleElement = document.createElement("style")
        styleElement.innerHTML = self.css
        styleElement.id = id
        document.head.appendChild(styleElement)
        if (oldMountedFunction) oldMountedFunction.bind(self)()
      }

      component.unmounted = function () {
        const styleElement = document.getElementById(id)

        if (styleElement) {
          document.head.removeChild(styleElement)
        }

        if (oldUnmountedFunction) oldUnmountedFunction.bind(self)()
      }

      if (component.components) {
        Object.keys(component.components).forEach(key => {
          const nestedComponent = component.components[key]
          app.component(key, nestedComponent)
        })
      }

      oldComponentFunction(name, component)
    }
  },
}

export default VueComponentCSSPlugin

if (typeof window !== "undefined") {
  window.VueComponentCSSPlugin = VueComponentCSSPlugin
}

if (typeof module !== "undefined") {
  module.exports = VueComponentCSSPlugin
}
