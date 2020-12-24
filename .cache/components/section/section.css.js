import { style } from '/_wmr.js';
style("/../components/section/section.css", "components/section/section.css");
const styles = {};
export default styles;
import { createHotContext } from '/_wmr.js';
createHotContext(import.meta.url).accept(({ module: { default: s } }) => {
for (let i in s) styles[i] = s[i];
});
