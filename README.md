# eq-grid

1KB (gzipped) next generation responsive grid made via custom element `<eq-grid>`.

It is made to to be used inside various modern JS frameworks; built around idea of element queries (responsiveness is based on container width, rather than window width). So you can use it inside components without a need to think, how wide is your comonent.

See its real usage in this [React](https://codesandbox.io/s/eq-react-ijuzj) example app. (there are more howtos in layout section)

## Install and usage

**To install:**

    npm i eq-grid --save

**To use in your project:**

just import the `eq-grid` module in your js/ts code before you render anything;

    import 'eq-grid';


Your project needs to be either transpiled to es6 (es2015) or newer, or use es5 and include `<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.3/custom-elements-es5-adapter.js"></script>` in your `<HTML><HEAD>`

## Usage

### Grid container \<eq-grid\>

|                         |                                                                                                                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **\<eq-grid\>**         | Define element as grid container.                                                                                                                                                   |
| **.eq-grid-dense**      | Add grid-auto-flow: dense;. It tries to fill empty gaps in the grid with out of order elements.                                                                                     |
| **.eq-grid-N-collapse** | (N: numbers from 2 to 6)<br> Tells when children of the container collapse to full width.<br> eq-grid-n-collapse collapse when container is smaller than<br> (n + 1) \* columnWidth |
| **.eq-grid-gap-N**      | (N: 0 or 1 or 3)<br> Set the gap between elements of column<br> 0 => 0rem<br> 1 => 0.5rem<br> 2 => 1rem (this is default hence there is not class for it)<br> 3 => 2 rem<br>        |

![enter image description here](https://raw.githubusercontent.com/Rezi/eq-grid/feature/readme/grid.png)

### Grid children

|                                |                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **.eq-col** <br> **.eq-col-N** | (N:number from 2 to 6)<br> Define how many columns the element will take.                                    |
| **.eq-col-max**                | This element always has full (container's) width                                                             |
| **.eq-row-N**                  | (N:number from 2 to 3) <br> Define how many rows the element will take.                                      |
| **.eq-col-N-M**                | (N, M: numbers from 2 to 6) <br> Define how many columns the element will take (N) at specific grid size (M) |
| **.eq-col-N-collapse**         | Tells at which container size it sould collapse to full width.                                               |

## Support

| Browser            | Version |
| ------------------ | ------- |
| Edge               | 79+     |
| Firefox            | 69+     |
| Chrome             | 64+     |
| Safari             | 13.1+   |
| Opera              | 52+     |
| iOS Safari         | 13.4+   |
| Android Browser    | yes     |
| Opera mini         | No      |
| Chrome for Android | yes     |

## Examples

Eq-grid is a native component based and hence works in almost all FE frameworks, you can check test integrations with [React](https://codesandbox.io/s/eq-react-ijuzj), [Angular](https://codesandbox.io/s/eq-angular-3rc8g), [Vue](https://codesandbox.io/s/eq-vue-4u4kn) and [Svelte](https://codesandbox.io/s/eq-svelte-8py0c)

(Note that some of the implementation don't use eq-grid npm package from github - but rather use local file, it is caused by limitation by codesandbox, which doesn't allow user to change some of default transpile settings for certain framework)
