import {select_opening_crawl} from "./opening_crawl.js";
import {select_hyperspace} from "./hyperspace.js";
import {create_datapad_journal} from "./datapads.js";
import {shop_creator} from "./shop.js";
import {configure_attack_animation} from "./animation.js";

export const register_controls = controls => {
    const ffg_sw_enhancements_controls = {
        name: game.i18n.localize("ffg-star-wars-enhancements.controls.name"),
        title: game.i18n.localize("ffg-star-wars-enhancements.controls.title"),
        layer: "fxmaster",
        icon: "fa fa-jedi",
        visible: game.user.isGM,
        tools: [
            {
                name: game.i18n.localize("ffg-star-wars-enhancements.controls.opening-crawl.name"),
                title: game.i18n.localize("ffg-star-wars-enhancements.controls.opening-crawl.title"),
                icon: "fas fa-journal-whills",
                button: true,
                onClick: () => {
                    select_opening_crawl();
                },
            },
            {
                name: game.i18n.localize("ffg-star-wars-enhancements.controls.new-journal-template.name"),
                title: game.i18n.localize("ffg-star-wars-enhancements.controls.new-journal-template.title"),
                icon: "fas fa-book-medical",
                button: true,
                onClick: () => {
                    create_datapad_journal();
                },
            },
            {
                name: game.i18n.localize("ffg-star-wars-enhancements.shop.html.scene.name"),
                title: game.i18n.localize("ffg-star-wars-enhancements.shop.html.scene.title"),
                icon: "fas fa-shopping-cart",
                button: true,
                onClick: () => {
                    shop_creator();
                },
            },
            {
                name: game.i18n.localize("ffg-star-wars-enhancements.attack-animation.custom.button-name"),
                title: game.i18n.localize("ffg-star-wars-enhancements.attack-animation.custom.button-title"),
                icon: "fas fa-bullseye",
                button: true,
                onClick: () => {
                    configure_attack_animation();
                },
            },
            {
                name: game.i18n.localize("ffg-star-wars-enhancements.controls.hyperspace.name"),
                title: game.i18n.localize("ffg-star-wars-enhancements.controls.hyperspace.title"),
                icon: "fas fa-rocket",
                button: true,
                onClick: () => {
                    select_hyperspace();
                },
            },
        ],
    }
    controls.splice(controls.findIndex(e => e.name === 'notes') + 1, 0, ffg_sw_enhancements_controls)
}
