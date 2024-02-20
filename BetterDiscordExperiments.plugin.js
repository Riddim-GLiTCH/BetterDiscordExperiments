/**
 * @name BetterDiscordExperiments
 * @description Enables the experiments tab in discord's settings. - Snippet used by Discord Previews
 * @author Riddim_GLiTCH
 * @version 1.1.0
*/
class experiments
{
    start = () => {
        // Enable the Experiments
       {let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
        let u = Object.values(c).find(x=>x?.exports?.default?.getUsers).exports.default;
        let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);

        u.getCurrentUser().flags |= 1;
        m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
        try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
        m.find((x)=>x.name === "ExperimentStore").storeDidChange();}

        //Display a Staging Banner
       {const data = BdApi.Webpack.getByStrings("logsUploaded:new Date().toISOString(),")();
        const classes = BdApi.Webpack.getByKeys("devBanner");

        const div = document.createElement("div");
        div.className = `${classes.devBanner} ${classes.staging}`;
        div.innerHTML = `<svg class="${classes.icon}" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" d="M6.99471698,9.67522659 C8.47108874,9.67522659 9.66792453,8.47748685 9.66792453,7 C9.66792453,5.52251315 8.47108874,4.32477341 6.99471698,4.32477341 C5.51834522,4.32477341 4.32150943,5.52251315 4.32150943,7 C4.32150943,8.47748685 5.51834522,9.67522659 6.99471698,9.67522659 Z M6.99471698,2.67522659 C8.18867925,2.67522659 9.26641509,3.16163142 10.0483019,3.94410876 L11.9396226,2.05135952 C10.6822642,0.782477341 8.92830189,0 6.99471698,0 C3.12754717,0 0,3.14048338 0,7 L2.67320755,7 C2.67320755,4.6102719 4.60679245,2.67522659 6.99471698,2.67522659 Z M11.3267925,7 C11.3267925,9.3897281 9.39320755,11.3247734 7.00528302,11.3247734 C5.81132075,11.3247734 4.73358491,10.8383686 3.94113208,10.0558912 L2.04981132,11.9486405 C3.31773585,13.2175227 5.06113208,14 6.99471698,14 C10.8618868,14 14,10.8595166 14,7 L11.3267925,7 Z"></path></svg>${data.releaseChannel === "ptb" ? "PTB" : data.releaseChannel[0].toUpperCase() + data.releaseChannel.slice(1)} ${data.buildNumber}<div class="${classes.closeButton}" aria-label="Dismiss" role="button" tabindex="0"><svg aria-hidden="true" role="img" class="${classes.closeIcon}" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>`;
        div.querySelector(`.${classes.closeButton}`).onclick = () => div.remove();
        document.querySelector("[class*=sidebar_]").append(div);}
    }
    onSwitch = () => {
                // Enable the Experiments
       {let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
       let u = Object.values(c).find(x=>x?.exports?.default?.getUsers).exports.default;
       let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);

       u.getCurrentUser().flags |= 1;
       m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
       try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
       m.find((x)=>x.name === "ExperimentStore").storeDidChange();}

       //Display a Staging Banner
      {const data = BdApi.Webpack.getByStrings("logsUploaded:new Date().toISOString(),")();
       const classes = BdApi.Webpack.getByKeys("devBanner");

       const div = document.createElement("div");
       div.className = `${classes.devBanner} ${classes.staging}`;
       div.innerHTML = `<svg class="${classes.icon}" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" d="M6.99471698,9.67522659 C8.47108874,9.67522659 9.66792453,8.47748685 9.66792453,7 C9.66792453,5.52251315 8.47108874,4.32477341 6.99471698,4.32477341 C5.51834522,4.32477341 4.32150943,5.52251315 4.32150943,7 C4.32150943,8.47748685 5.51834522,9.67522659 6.99471698,9.67522659 Z M6.99471698,2.67522659 C8.18867925,2.67522659 9.26641509,3.16163142 10.0483019,3.94410876 L11.9396226,2.05135952 C10.6822642,0.782477341 8.92830189,0 6.99471698,0 C3.12754717,0 0,3.14048338 0,7 L2.67320755,7 C2.67320755,4.6102719 4.60679245,2.67522659 6.99471698,2.67522659 Z M11.3267925,7 C11.3267925,9.3897281 9.39320755,11.3247734 7.00528302,11.3247734 C5.81132075,11.3247734 4.73358491,10.8383686 3.94113208,10.0558912 L2.04981132,11.9486405 C3.31773585,13.2175227 5.06113208,14 6.99471698,14 C10.8618868,14 14,10.8595166 14,7 L11.3267925,7 Z"></path></svg>${data.releaseChannel === "ptb" ? "PTB" : data.releaseChannel[0].toUpperCase() + data.releaseChannel.slice(1)} ${data.buildNumber}<div class="${classes.closeButton}" aria-label="Dismiss" role="button" tabindex="0"><svg aria-hidden="true" role="img" class="${classes.closeIcon}" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>`;
       div.querySelector(`.${classes.closeButton}`).onclick = () => div.remove();
       document.querySelector("[class*=sidebar_]").append(div);}
    }
    stop()
    {

    }
    
}
module.exports = experiments
