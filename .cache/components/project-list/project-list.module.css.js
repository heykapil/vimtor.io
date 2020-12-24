import { style } from '/_wmr.js';
style("/../components/project-list/project-list.module.css", "components/project-list/project-list.module.css");
const styles = {list:'list_ozojz4',item:'item_ozojz4'};
export default styles;
export const list='list_ozojz4',item='item_ozojz4';
import { createHotContext } from '/_wmr.js';
createHotContext(import.meta.url).accept(({ module: { default: s } }) => {
for (let i in s) styles[i] = s[i];
});
