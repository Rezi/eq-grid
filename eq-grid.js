export function initEqGrid(
  gridColWidth = 100,
  gridGap = 16,
  units = 'px',
  maxColspan = 6
) {
  if (ResizeObserver && 'customElements' in window) {
    if (!customElements.get('eq-grid')) {
      class EqGrid extends HTMLElement {
        constructor() {
          super();

          const gridStyles = document.getElementById('eq-grid-styles');
          if (!gridStyles) {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'eq-grid-styles';
            style.innerHTML = generateCss(
              gridColWidth,
              gridGap,
              units,
              maxColspan
            );
            document.getElementsByTagName('head')[0].appendChild(style);
          }
        }

        getPixels(value) {
          let test = document.createElement('div');
          Object.assign(test.style, {
            position: 'absolute',
            width: value,
          });
          document.body.appendChild(test);
          let pixels = test.offsetWidth;
          document.body.removeChild(test);
          return pixels;
        }

        toggleClasses(watched, value, contentRect) {
          const query = contentRect.width <= this.getPixels(value + units);

          watched.target.classList.toggle(`max-width-${value}`, query);
          watched.target.classList.toggle(`min-width-${value}`, !query);
        }

        observe() {
          this.ro = new ResizeObserver((entries) => {
            const watched = entries[0];
            const contentRect = watched.contentRect;
            for (let i = 2; i <= 7; i++) {
              this.toggleClasses(watched, i * gridColWidth, contentRect);
            }
          });

          this.ro.observe(this);
        }

        connectedCallback() {
          this.observe();
        }
      }

      customElements.define('eq-grid', EqGrid);
    }
  }
}

function generateCss(gridColWidth, gridGap, units, maxColspan) {
  let css = `  
    eq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(${gridColWidth}${units}, 1fr));
      word-break: break-word;
      margin: -${gridGap / 2}${units}; 
    }
    
    eq-grid > * {
      padding: ${gridGap / 2}${units};
    }
  
    eq-grid > eq-grid {
      padding: ${gridGap / 2}${units}  0;
      margin: -${gridGap / 2}${units}  0;
    }
  
    eq-grid .eq-row-2 {
      grid-row: span 2;
    }
  
    eq-grid .eq-row-3 {
      grid-row: span 3;
    }
  
    eq-grid .eq-col-max {
      grid-column-start: 1;
      grid-column-end: -1;
    }
    
    .eq-grid-dense {
      grid-auto-flow: dense;
    }`;

  for (var i = 2; i <= maxColspan; i++) {
    for (var j = i; j <= maxColspan; j++) {
      css += `
        eq-grid.min-width-${i * gridColWidth} > [class*='eq-col-${j}'] {
          grid-column: span ${i};
        }`;
    }

    /* Collapse functionality for single grid elements */
    for (var k = 1; k <= i; k++) {
      if (k !== i) {
        css += `
          eq-grid.min-width-${i * gridColWidth}.max-width-${
          (i + 1) * gridColWidth
        } .eq-col-${k}-${i} {
              grid-column: span ${k};        
            }`;
      }
    }
  }

  /**** COLLAPSE FUNCTIONALITY ****/

  const collapseGridColumns = `
      grid-column-start: 1;
      grid-column-end: -1;`;

  for (var i = 2; i <= maxColspan; i++) {
    for (var j = 1; j <= i; j++) {
      if (j > 1) {
        css += `
            .eq-grid-${i}-collapse.max-width-${
          (i + 1) * gridColWidth
        } > [class*='eq-col-${j}'] {
              ${collapseGridColumns}
            }`;
      } else {
        css += `
          .eq-grid-${i}-collapse.max-width-${(i + 1) * gridColWidth} > .eq-col {
            ${collapseGridColumns}
          }`;
      }
    }

    for (var j = 1; j <= i; j++) {
      if (j > 1) {
        css += `
          eq-grid.max-width-${
            (i + 1) * gridColWidth
          } > .eq-col-${j}.eq-col-${i}-collapse {
              ${collapseGridColumns}
            }`;
      } else {
        css += `
          eq-grid.max-width-${
            (i + 1) * gridColWidth
          } > .eq-col.eq-col-${i}-collapse {
            ${collapseGridColumns}
          }`;
      }
    }
  }

  [
    { name: '0', val: 0 },
    { name: '0-5', val: 0.5 },
    { name: '2', val: 2 },
  ].forEach((gap) => {
    const gapCssValue = (gridGap / 2) * gap.val + units;
    css += `
    .eq-grid-gap-${gap.name} {
      margin: -${gapCssValue};
    }
    .eq-grid-gap-${gap.name} [class*='eq-col'] {
      padding: ${gapCssValue};
    }
    .eq-grid-gap-${gap.name} eq-grid {
      padding: ${gapCssValue} 0 !important;
      margin: -${gapCssValue} 0 !important;    
    }`;
  });
  return css;
}
