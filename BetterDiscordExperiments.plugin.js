/**
 * @name BetterDiscordExperiments
 * @description Enables the experiments tab in discord's settings, using the JS snippet from Discord Previews. Made with love by Skye and Zrodevkaan
 * @author Riddim_GLiTCH, Zrodevkaan
 * @version 1.2.0
*/
/* @module @manifest */
const manifest = {
    "name": "BetterDiscordExperiments",
    "authors": [{
        "name": "Riddim GLiTCH",
        "discord_id": "801089753038061669",
        "github_username": "Riddim-GLiTCH"
    }],
    "version": "1.2.0",
    "description": "Enables the experiments tab in discord's settings, using the JS snippet from Discord Previews. Made with love by Skye and Zrodevkaan.",
    "github": "https://github.com/Riddim-GLiTCH/BetterDiscordExperiments",
    "github_raw": "https://github.com/Riddim-GLiTCH/BetterDiscordEperiments/raw/main/BetterDiscordExperiments.plugin.js",
    "changelogImage": "https://RDG.monarchuploader.de/content/cdn/RQLhnpDHgffx/_489399f1-238f-426c-9769-5b79efe95cf6.jpg",
    // "changelogDate": "2023-08-14T19:12:56.405Z",
    "changelog": [{
        "type": "Improvement",
        "title": "Improvements",
        "items": [
            "Improved handling of the stagng banner on stop.",
            "Attempted to improve handling of Discord correcting itself upon realizing the user should not have experiments."
        ]
    }]
};
/*@end*/

const { useState, useEffect } = BdApi.React

const { FormSwitch } = BdApi.Webpack.getByKeys("Switch")

function GetSetting(settingName)
{
    const mySettings = BdApi.Data.load("BetterDiscordExperiments", "settings") || [];
    return mySettings[settingName];
}

function SetSetting(settingName, value) {
    const mySettings = BdApi.Data.load("BetterDiscordExperiments", "settings") || {};
    mySettings[settingName] = value;
    BdApi.Data.save("BetterDiscordExperiments", "settings", mySettings);
}

class experiments
{
    start() {
        // const mySettings = BdApi.Data.load("BetterDiscordExperiments", "settings"); // Load Settings
        // use `GetSetting`
        let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
        let u = Object.values(c).find(x=>x?.exports?.default?.getUsers).exports.default;
        let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);

        u.getCurrentUser().flags |= 1;
        m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
        try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
        m.find((x)=>x.name === "ExperimentStore").storeDidChange();

        if (GetSetting("showBanner"))
        {
            const data = BdApi.Webpack.getByStrings("logsUploaded:new Date().toISOString(),")();
            const classes = BdApi.Webpack.getByKeys("devBanner");
            const div = document.createElement("div");

            div.className = `${classes.devBanner} ${classes.staging}`;
            div.innerHTML = `<svg class="${classes.icon}" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" d="M6.99471698,9.67522659 C8.47108874,9.67522659 9.66792453,8.47748685 9.66792453,7 C9.66792453,5.52251315 8.47108874,4.32477341 6.99471698,4.32477341 C5.51834522,4.32477341 4.32150943,5.52251315 4.32150943,7 C4.32150943,8.47748685 5.51834522,9.67522659 6.99471698,9.67522659 Z M6.99471698,2.67522659 C8.18867925,2.67522659 9.26641509,3.16163142 10.0483019,3.94410876 L11.9396226,2.05135952 C10.6822642,0.782477341 8.92830189,0 6.99471698,0 C3.12754717,0 0,3.14048338 0,7 L2.67320755,7 C2.67320755,4.6102719 4.60679245,2.67522659 6.99471698,2.67522659 Z M11.3267925,7 C11.3267925,9.3897281 9.39320755,11.3247734 7.00528302,11.3247734 C5.81132075,11.3247734 4.73358491,10.8383686 3.94113208,10.0558912 L2.04981132,11.9486405 C3.31773585,13.2175227 5.06113208,14 6.99471698,14 C10.8618868,14 14,10.8595166 14,7 L11.3267925,7 Z"></path></svg>${data.releaseChannel === "ptb" ? "PTB" : data.releaseChannel[0].toUpperCase() + data.releaseChannel.slice(1)} ${data.buildNumber}<div class="${classes.closeButton}" aria-label="Dismiss" role="button" tabindex="0"><svg aria-hidden="true" role="img" class="${classes.closeIcon}" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>`;
            div.querySelector(`.${classes.closeButton}`).onclick = () => div.remove();

            document.querySelector("[class*=panels_]").appendChild(div);
        }

        BdApi.UI.showToast(
            "Experiments succesfully injected!",
            {
                type: "info",
            }
        );
    }
    stop() {
        { 
            // Removes the staging banner. (IF FOUND)
            const div = document.querySelector("[class*=devBanner_]");
            if (!div) return;
            div.remove();
        }
    }

    SettingsPanel() {
        const [showBanner, setShowBanner] = useState(GetSetting("showBanner"));
    
        useEffect(() => {
            SetSetting("showBanner", showBanner);
        }, [showBanner]);
    
        return BdApi.React.createElement(
            'div',
            { id: 'my-settings' },
            BdApi.React.createElement(
                'div',
                { className: 'setting' },
                BdApi.React.createElement(
                    'label',
                    null,
                    BdApi.React.createElement(FormSwitch, {
                        children: 'Show Developer Staging Branch Notice',
                        note: 'Under the user account will show the edition of Discord and your version.',
                        onChange: (e) => setShowBanner(e),
                        value: showBanner,
                    })
                ),
                BdApi.React.createElement('span', { style:{ color: "white" } }, 'Made with love by Skye and Kaan <3'),
            )
        );
    }
    getSettingsPanel() {
        return BdApi.React.createElement(this.SettingsPanel);
    }
};
module.exports = experiments
