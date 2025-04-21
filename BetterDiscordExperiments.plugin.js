/**
 * @name BetterDiscordExperiments
 * @description Enables the experiments tab in discord's settings, using the JS snippet from Discord Previews. Made with love by Skye and Zrodevkaan
 * @author Riddim_GLiTCH, Zrodevkaan
 * @version 1.4
 * @source https://github.com/Riddim-GLiTCH/BetterDiscordExperiments
 * @website https://riddim-glitch.is-a.dev
 * @invite aYxpgkvdvR
 */
/* @module @manifest */
const manifest = {
    "name": "BetterDiscordExperiments",
    "authors": [{
        "name": "Riddim GLiTCH",
        "discord_id": "801089753038061669",
        "github_username": "Riddim-GLiTCH"
    }],
    "version": "1.2.3",
    "description": "Enables the experiments tab in discord's settings, using the JS snippet from Discord Previews. Made with love by Skye and Zrodevkaan.",
    "github": "https://github.com/Riddim-GLiTCH/BetterDiscordExperiments",
    "github_raw": "https://github.com/Riddim-GLiTCH/BetterDiscordEperiments/raw/main/BetterDiscordExperiments.plugin.js",
    "changelogImage": "https://RDG.monarchuploader.de/content/cdn/RQLhnpDHgffx/_489399f1-238f-426c-9769-5b79efe95cf6.jpg",
    "changelogDate": "2024-04-30T11:53:20+0000"
};
/*@end*/

const BdApi = window.BdApi;

const App = {
    Webpack: BdApi.Webpack,
    UI: BdApi.UI,
    Data: BdApi.Data,
    DOM: BdApi.DOM,
    React: {
        ...BdApi.React,
        useState: BdApi.React.useState,
        useEffect: BdApi.React.useEffect,
        createElement: BdApi.React.createElement,
    },
    Components: {
        FormSwitch: BdApi.Webpack.getByKeys("FormSwitch"),
    },
    Logs: BdApi.Webpack.getByStrings("logsUploaded:new Date().toISOString(),")(),
    Classes: BdApi.Webpack.getByKeys("devBanner"),
};

const config = {
    name: "BetterDiscordExperiments",
    changelog: [
        {
            title: "BDAPI Update",
            type: "Improved",
            items: [
                "Moved the Plugin to the New BD-API as base.",
                "Actually Added a Changelog with BDAPI",
                "Remade Settings Panel with BD-API"
            ]
        },
        {
            title: "Bugs Squashed",
            type: "fixed",
            items: [
                "Attempted to fix random uninjection (hopefully)"
            ]
        },
        {
            title: "On-going",
            type: "progress",
            items: [
                "An option to disable the warning on the experiments page will be added."
            ]
        }
    ],
    settings: [
        {
            type: "switch",
            id: "showBanner",
            name: "Show Developer Staging Branch",
            note: "Under the user account will show the edition of Discord and your version.",
            value: true
        },
        {
            type: "category",
            id: "non-disable-:)",
            children: App.React.createElement('span', {style: {color: "gray", fontsize: '10px', bottom: '0', left: '-5px'}}, 'Made with love by Skye and Kaan <3')
        }
    ]
}

const css = `
#experiments-tab {
    [class^=sectionTitle] {
      margin-top: 100px;
      &:before {
        position: absolute;
        top: 20px;
        background-color: rgba(255, 0, 0, 0.200);
        padding: 5px;
        border: solid 1px red;
        border-radius: 5px;
        padding-bottom: 25px;
        padding-top: 40px;
        content: "Enabling some experiments may disrupt Discord's functionality," 
        " and could lead to crashes, bugs, or glitches." 
        " Some features may conflict with the app," 
        " resulting in instability or unexpected behavior." ;
        text-align: center;
        color: red;
        font-size: larger;
        width: 650px;
      }
      &:after {
        position: absolute;
        top: 25px;
        text-align: center;
        color: red;
        content: "WARNING!";
        font-size: xx-large;
        font-weight: 900;
        width: 661px;
        margin: 0px 5px;
      }
    }
    [class^=children_]:after {
        position: absolute;
        top: 120px;
        text-align: center;
        content: "Exercise caution, enabling some experiments may risk account suspension.";
        font-size: larger;
        color: red;
        width: 650px;
        margin: 0px 5px;
        font-weight: 700;
    }
}`;

function GetSetting(settingName) {
    return App.Data.load(config.name, "settings") || config.settings.find(x => x.id === settingName).value
    // this is a config. this needs to be a callback-as its always true
}

function SetSetting(settingName, value) {
    const mySettings = config.settings.find(x => x.id === settingName) || {};
    mySettings.value = value;
    App.Data.save(config.name, "settings", mySettings);
}

class experiments {
    startStagingBanner() {
        const showBanner = GetSetting("showBanner");
        if (!showBanner?.value) {
            const existingBanner = document.querySelector("[class*=devBanner_]");
            if (existingBanner) {
                existingBanner.remove();
            }
            return;
        }

        const existingBanner = document.querySelector("[class*=devBanner_]");
        if (existingBanner) {
            return;
        }

        try {
            const banner = this.createBannerElement(App.Classes, App.Logs);

            const closeButton = banner.querySelector(`.${App.Classes.closeButton}`);
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    banner.remove();
                    GetSetting("showBanner").value = false;
                });
            }

            const panelsContainer = document.querySelector("[class*=panels_]");
            if (panelsContainer) {
                panelsContainer.appendChild(banner);
            } else {
                throw new Error("Panels container not found");
            }
        } catch (error) {
            console.error("Failed to create staging banner:", error);
        }
    }

    createBannerElement(classes, data) {
        const div = document.createElement("div");

        div.className = `${classes.devBanner} ${classes.staging}`;
        div.style.backgroundColor = "var(--bg-overlay-1,var(--background-secondary-alt))";

        const channelName = data.releaseChannel === "ptb"
            ? "PTB"
            : data.releaseChannel[0].toUpperCase() + data.releaseChannel.slice(1);

        div.innerHTML = `
        <svg class="${classes.icon}" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 14 14">
            <path fill="currentColor" d="M6.99471698,9.67522659 C8.47108874,9.67522659 9.66792453,8.47748685 9.66792453,7 C9.66792453,5.52251315 8.47108874,4.32477341 6.99471698,4.32477341 C5.51834522,4.32477341 4.32150943,5.52251315 4.32150943,7 C4.32150943,8.47748685 5.51834522,9.67522659 6.99471698,9.67522659 Z M6.99471698,2.67522659 C8.18867925,2.67522659 9.26641509,3.16163142 10.0483019,3.94410876 L11.9396226,2.05135952 C10.6822642,0.782477341 8.92830189,0 6.99471698,0 C3.12754717,0 0,3.14048338 0,7 L2.67320755,7 C2.67320755,4.6102719 4.60679245,2.67522659 6.99471698,2.67522659 Z M11.3267925,7 C11.3267925,9.3897281 9.39320755,11.3247734 7.00528302,11.3247734 C5.81132075,11.3247734 4.73358491,10.8383686 3.94113208,10.0558912 L2.04981132,11.9486405 C3.31773585,13.2175227 5.06113208,14 6.99471698,14 C10.8618868,14 14,10.8595166 14,7 L11.3267925,7 Z"></path>
        </svg>
        ${channelName} ${data.buildNumber}
        <div class="${classes.closeButton}" aria-label="Dismiss" role="button" tabindex="0">
            <svg aria-hidden="true" role="img" class="${classes.closeIcon}" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
            </svg>
        </div>
    `;

        return div;
    }

    start() {
        const {
            Webpack,
        } = BdApi;
        
        const UserStore = Webpack.getStore('UserStore')
        UserStore.getCurrentUser()
            .flags |= 1
        const FluxDispatcher = Webpack.getModule(m => m?._dispatch && m?._actionHandlers, {
            searchExports: true
        })
        const Nodes = Object.values(FluxDispatcher._actionHandlers._dependencyGraph.nodes)
        Nodes.find((x) => x.name === "DeveloperExperimentStore")
            .actionHandler["CONNECTION_OPEN"]();
        try {
            Nodes.find((x) => x.name === "ExperimentStore")
                .actionHandler["OVERLAY_INITIALIZE"]({
                    user: {
                        flags: 1
                    }
                })
        } catch {}
        Nodes.find((x) => x.name === "ExperimentStore")
            .storeDidChange();
        App.DOM.addStyle(config.name, css)
    }

    stop() {
        // Removes the staging banner. (IF FOUND)
        App.DOM.removeStyle(config.name);
        const div = document.querySelector("[class*=devBanner_]");
        if (!div) return;
        div.remove();
    }

    getSettingsPanel() {
        return App.UI.buildSettingsPanel({
            settings: config.settings,
            onChange: (category, id, value) => {
                SetSetting(id, value);
                this.startStagingBanner();
            }
        });
    }
}

module.exports = experiments
