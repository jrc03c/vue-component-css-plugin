> This project is now archived and has been superseded by [vue-component-with-css](https://github.com/jrc03c/vue-component-with-css).

# Intro

This plugin for Vue 3 makes it a little easier to keep a component's CSS with the rest of the component code in cases where there's not a build step.

# Installation

```bash
npm install --save https://github.com/jrc03c/vue-component-css-plugin
```

# Usage

```js
import { createApp } from "vue"
import VueComponentCSSPlugin from "vue-component-css-plugin"

const app = createApp({
  template: `
    <div class="my-cool-app">
      Hello, world!
    </div>
  `,

  data() {
    return {
      css: `
        .my-cool-app {
          color: red;
        }
      `,
    }
  },
})

app.use(VueComponentCSSPlugin)
app.mount("#some-container")
```

# Notes

**The `css` property can be computed.** In other words, instead of including the `css` property as part of the object returned from the `data` method, you could write a computed property function called `css` and return the same string there.

**The styles applied by this plugin are _not_ scoped.** It'd be cool if it could be scoped, but I don't know how to do that. If you have ideas, please let me know.
