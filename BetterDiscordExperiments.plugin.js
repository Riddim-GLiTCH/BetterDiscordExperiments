
 * @name BetterDiscordExperiments
 * @description Enables the experiments tab in discord's settings.
 * @author originally by Riddim_GLITCH, Rewritten from the ground up by Zrodevkaan
 * @version 1.0.1
*/
class ExperimentsPlugin
{
    start = () => {
        let c = webpackChunkdiscord_app.push([[Symbol()],{},({c})=>Object.values(c)]);
        let u = c.find((x)=> x?.exports?.default?.getUsers).exports.default;
        let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);
    
        u.getCurrentUser().flags |= 1;
        m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
        try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {}
        m.find((x)=>x.name === "ExperimentStore").storeDidChange()
    }

    stop()
    {

    }
    
}

module.exports = ExperimentsPlugin