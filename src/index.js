import accordeon from "./modules/accordeon";
import countTimer from "./modules/countTimer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import smothScroll from "./modules/smothScroll";
import tabs from "./modules/tabs";
import mainForm from "./modules/mainForm";

tabs();
menu();
smothScroll();
accordeon();
countTimer('31 march 2022');
modal();
mainForm();

document.getElementById('contacts').style.paddingBottom = '100px';