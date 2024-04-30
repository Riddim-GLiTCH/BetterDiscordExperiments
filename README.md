<div style="text-align: center!important;">
  <img src="https://riddim-glitch.is-a.dev/assets/Icons/BDE.png" alt="image" width="300">
</div>

# BetterDiscordExperiments

**BetterDiscordExperiments** is a plugin designed to enable the "Experiments" section in Discord. With this plugin, users can access and test experimental features that are not yet available to the general public.

**Disclaimer: The use of this plugin comes with certain risks, including the possibility of account termination. As the developer of this plugin, I cannot be held responsible for any consequences that may arise from the use of this plugin. Use at your own risk.**

## Installation

NOTE: You'll need to install [BetterDiscord](https://betterdiscord.app) to use this plugin, install that first!

To install the Better Discord Plugin, follow these steps:

1. Download the [BetterDiscordExperiments.plugin.js](https://raw.githubusercontent.com/Riddim-GLiTCH/BetterDiscordEperiments/main/BetterDiscordExperiments.plugin.js) file from this repo.
2. Open the Discord settings and navigate to the "Plugins" tab.
3. Click the "Open Plugin Folder" button to open the plugins folder. <br>

![Where to find the Open Plugin Folder button](https://github.com/Riddim-GLiTCH/BetterDiscordEperiments/assets/87764384/3b50d8e2-c1c1-4098-be52-36529fe31327)

4. Move the downloaded plugin file into the plugins folder.
5. Enable the plugin, and Restart Discord.

## Usage

Once the plugin is installed and Discord has been restarted, the "Experiments" section will appear in the Discord settings. <br>

![Where to find experiments](https://github.com/Riddim-GLiTCH/BetterDiscordEperiments/assets/87764384/5a109c28-d3ed-46dd-a9dc-1b0ad1e1d736)

Users can access this section to test experimental features that are not yet available to the general public. It is important to note that these features may be unstable and could potentially cause issues with your Discord client.
Some of these experiments may access the discord API in a way that your account is not permitted to. This could lead to potential suspension or termination of the account used. Be aware of this when using this plugin.


## Known issues:

As recorded by the plugin developer, these are the current known issues:
- ~~The staging banner disappears when changing channels.~~
  - This is not an issue with BetterDiscordExperiments. I have determined that this is caused by another plugin that modifies the appearance of the sidebar. I will not be adding compatibility for these kinds of plugins as it can cause issues with clients not running these plugins (with my current level of skill in JS.)


- The client reverts its IsStaff state to false. (Or in other words, it stops working after a while.)
  - This issue is caused by the client itself. I am looking into methods to fix this. Be patient. The workaround for now is to open plugin settings, disable BetterDiscordExperiments, and re-enable it. Then refresh your settings page; either by closing and reopening it or opening another settings tab. The experiments section should appear again as normal.


- The plugin doesn't appear to be starting, yet it says the experiments were enabled succesfully.
  - This is likely the same issue as above; The client just happens to reset its IsStaff state just after the plugin is enabled. I am looking into methods to fix this. Be patient.


- [MacOS] The plugin does not appear on my plugins page, but it definitely is in my plugin folder.
  - Safari likes to mess with the file extensions of downloaded files. Check if your plugin file ends with the `.plugin.js` extension. The periods are important to the plugin detection system. if a file is not read as `.plugin.js`, it is not treated as a plugin and BD skips loading it.


- Opening settings does not work.
  - Zrodevkaan wrote most of the code for the settings page with React. If the settings page does not load correctly, your React likely encountered an error. Close the error message and try again. If the issue persists, restart discord.

## Changelog:

### v1.0.0
initial release.

### v1.0.1
Completely rewritten from the ground up by Zrodevkaan. The plugin should now function once again with the latest versions of discord.

### v1.2.0
Updated the plugin to include the dev banner, which can be toggled in the settings panel. Shoutouts once again to Zrodevkaan for helping with this and improving my poor code again.

### v1.2.1 (Hotfix)
Fixed Settings panel not loading. (it was one line that broke. ![husk](https://cdn.discordapp.com/emojis/1008576133635260447.webp?size=24&quality=lossless) thanks Discord)

### v1.2.2
Refactor and staging banner restyle (By [@Zrodevkaan]( https://github.com/zrodevkaan ))

### v1.2.3
Added a notice on the experiments page regarding user safety.
