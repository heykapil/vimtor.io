import { style } from '/_wmr.js';
style("/../components/profile-picture/profile-picture.css", "components/profile-picture/profile-picture.css");
const styles = {};
export default styles;
import { createHotContext } from '/_wmr.js';
createHotContext(import.meta.url).accept(({ module: { default: s } }) => {
for (let i in s) styles[i] = s[i];
});
