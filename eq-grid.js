export default class EqGrid extends HTMLElement {
  constructor() {
    super();

    const gridStyles = document.getElementById("eq-grid-styles");
    if (!gridStyles) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.id = "eq-grid-styles";
      style.innerHTML =
        "eq-grid{display:grid}.eq-grid-dense{grid-auto-flow:dense}eq-grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));word-break:break-word;grid-gap:0px;margin:-0.5rem}eq-grid>*{padding:.5rem}eq-grid>eq-grid{padding:.5rem 0;margin:-0.5rem 0}eq-grid .eq-row-2{grid-row:span 2}eq-grid .eq-row-3{grid-row:span 3}eq-grid .eq-col-max{grid-column-start:1;grid-column-end:-1}eq-grid.min-width-200px>[class*=eq-col-6],eq-grid.min-width-200px>[class*=eq-col-5],eq-grid.min-width-200px>[class*=eq-col-4],eq-grid.min-width-200px>[class*=eq-col-3],eq-grid.min-width-200px>[class*=eq-col-2]{grid-column:span 2}eq-grid.min-width-200px.max-width-300px .eq-col-1-2{grid-column:span 1}eq-grid.min-width-300px>[class*=eq-col-6],eq-grid.min-width-300px>[class*=eq-col-5],eq-grid.min-width-300px>[class*=eq-col-4],eq-grid.min-width-300px>[class*=eq-col-3]{grid-column:span 3}eq-grid.min-width-300px.max-width-400px .eq-col-1-3{grid-column:span 1}eq-grid.min-width-300px.max-width-400px .eq-col-2-3{grid-column:span 2}eq-grid.min-width-400px>[class*=eq-col-6],eq-grid.min-width-400px>[class*=eq-col-5],eq-grid.min-width-400px>[class*=eq-col-4]{grid-column:span 4}eq-grid.min-width-400px.max-width-500px .eq-col-1-4{grid-column:span 1}eq-grid.min-width-400px.max-width-500px .eq-col-2-4{grid-column:span 2}eq-grid.min-width-400px.max-width-500px .eq-col-3-4{grid-column:span 3}eq-grid.min-width-500px>[class*=eq-col-6],eq-grid.min-width-500px>[class*=eq-col-5]{grid-column:span 5}eq-grid.min-width-500px.max-width-600px .eq-col-1-5{grid-column:span 1}eq-grid.min-width-500px.max-width-600px .eq-col-2-5{grid-column:span 2}eq-grid.min-width-500px.max-width-600px .eq-col-3-5{grid-column:span 3}eq-grid.min-width-500px.max-width-600px .eq-col-4-5{grid-column:span 4}eq-grid.min-width-600px>[class*=eq-col-6]{grid-column:span 6}eq-grid.min-width-600px.max-width-700px .eq-col-1-6{grid-column:span 1}eq-grid.min-width-600px.max-width-700px .eq-col-2-6{grid-column:span 2}eq-grid.min-width-600px.max-width-700px .eq-col-3-6{grid-column:span 3}eq-grid.min-width-600px.max-width-700px .eq-col-4-6{grid-column:span 4}eq-grid.min-width-600px.max-width-700px .eq-col-5-6{grid-column:span 5}eq-grid.max-width-700px>.eq-col-6.eq-col-6-collapse,eq-grid.max-width-700px>.eq-col-5.eq-col-6-collapse,eq-grid.max-width-700px>.eq-col-4.eq-col-6-collapse,eq-grid.max-width-700px>.eq-col-3.eq-col-6-collapse,eq-grid.max-width-700px>.eq-col-2.eq-col-6-collapse,eq-grid.max-width-700px>.eq-col.eq-col-6-collapse,.eq-grid-6-collapse.max-width-700px>[class*=eq-col-6],.eq-grid-6-collapse.max-width-700px>[class*=eq-col-5],.eq-grid-6-collapse.max-width-700px>[class*=eq-col-4],.eq-grid-6-collapse.max-width-700px>[class*=eq-col-3],.eq-grid-6-collapse.max-width-700px>[class*=eq-col-2],.eq-grid-6-collapse.max-width-700px>.eq-col,eq-grid.max-width-600px>.eq-col-5.eq-col-5-collapse,eq-grid.max-width-600px>.eq-col-4.eq-col-5-collapse,eq-grid.max-width-600px>.eq-col-3.eq-col-5-collapse,eq-grid.max-width-600px>.eq-col-2.eq-col-5-collapse,eq-grid.max-width-600px>.eq-col.eq-col-5-collapse,.eq-grid-5-collapse.max-width-600px>[class*=eq-col-5],.eq-grid-5-collapse.max-width-600px>[class*=eq-col-4],.eq-grid-5-collapse.max-width-600px>[class*=eq-col-3],.eq-grid-5-collapse.max-width-600px>[class*=eq-col-2],.eq-grid-5-collapse.max-width-600px>.eq-col,eq-grid.max-width-500px>.eq-col-4.eq-col-4-collapse,eq-grid.max-width-500px>.eq-col-3.eq-col-4-collapse,eq-grid.max-width-500px>.eq-col-2.eq-col-4-collapse,eq-grid.max-width-500px>.eq-col.eq-col-4-collapse,.eq-grid-4-collapse.max-width-500px>[class*=eq-col-4],.eq-grid-4-collapse.max-width-500px>[class*=eq-col-3],.eq-grid-4-collapse.max-width-500px>[class*=eq-col-2],.eq-grid-4-collapse.max-width-500px>.eq-col,eq-grid.max-width-400px>.eq-col-3.eq-col-3-collapse,eq-grid.max-width-400px>.eq-col-2.eq-col-3-collapse,eq-grid.max-width-400px>.eq-col.eq-col-3-collapse,.eq-grid-3-collapse.max-width-400px>[class*=eq-col-3],.eq-grid-3-collapse.max-width-400px>[class*=eq-col-2],.eq-grid-3-collapse.max-width-400px>.eq-col,eq-grid.max-width-300px>.eq-col-2.eq-col-2-collapse,eq-grid.max-width-300px>.eq-col.eq-col-2-collapse,.eq-grid-2-collapse.max-width-300px>[class*=eq-col-2],.eq-grid-2-collapse.max-width-300px>.eq-col{grid-column-start:1;grid-column-end:-1}.eq-grid-gap-0{margin:0}.eq-grid-gap-0 [class*=eq-col]{padding:0}.eq-grid-gap-0 eq-grid{padding:0 !important;margin:0 !important}.eq-grid-gap-1{margin:-0.25rem}.eq-grid-gap-1 [class*=eq-col]{padding:.25rem}.eq-grid-gap-1 eq-grid{padding:.25rem 0 !important;margin:-0.25rem 0 !important}.eq-grid-gap-3{margin:-1rem}.eq-grid-gap-3 [class*=eq-col]{padding:1rem}.eq-grid-gap-3 eq-grid{padding:1rem 0 !important;margin:-1rem 0 !important}";
      document.getElementsByTagName("head")[0].appendChild(style);
    }
  }

  toggleClasses(watched, value, contentRect) {
    const q = contentRect.width <= parseInt(value, 10);
    watched.target.classList.toggle(`max-width-${value}`, q);
    watched.target.classList.toggle(`min-width-${value}`, !q);
  }

  observe() {
    this.ro = new ResizeObserver((entries) => {
      const watched = entries[0];
      const contentRect = watched.contentRect;
      // const gridWidth = contentRect.width;
      // for (let i = 2; i <= Math.round(gridWidth / 100); i++) {
      for (let i = 2; i <= 7; i++) {
        this.toggleClasses(watched, i * 100 + "px", contentRect);
      }
    });

    this.ro.observe(this);
  }

  connectedCallback() {
    this.observe();
  }
}

if (ResizeObserver && "customElements" in window) {
  if (!customElements.get("eq-grid")) {
    customElements.define("eq-grid", EqGrid);
  }
}
