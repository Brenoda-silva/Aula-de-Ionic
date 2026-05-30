import { Sn as m, bn as f } from "./dist-FhAQQxNt.js";
import { o as P, u as W } from "./p-BJoMtgfR-B4Kcr1bs.js";
import { o as e } from "./p-DgbT0exM-BlR-mqzM.js";
//#region node_modules/@ionic/core/components/p-CneGxKsZ.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var n = () => {
	const n = window;
	n.addEventListener("statusTap", (() => {
		W((() => {
			const o = document.elementFromPoint(n.innerWidth / 2, n.innerHeight / 2);
			if (!o) return;
			const e$1 = f(o);
			e$1 && new Promise(((o) => e(e$1, o))).then((() => {
				P((async () => {
					e$1.style.setProperty("--overflow", "hidden"), await m(e$1, 300), e$1.style.removeProperty("--overflow");
				}));
			}));
		}));
	}));
};
//#endregion
export { n as startStatusTap };

//# sourceMappingURL=p-CneGxKsZ-DOhyDzUd.js.map