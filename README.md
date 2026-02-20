# 🪓 node-cli-boilerplate

<!-- all-shields/header-badges:START -->

[![v3.1.0-nightly.0](https://img.shields.io/badge/version-v3.1.0--nightly.0-lightgray.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/CHANGELOG.md) [![](https://img.shields.io/npm/v/@ptkdev/node-cli-boilerplate?color=CC3534&logo=npm)](https://www.npmjs.com/package/@ptkdev/node-cli-boilerplate) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/LICENSE.md) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Discord Server](https://discordapp.com/api/guilds/383373985666301975/embed.png)](https://discord.ptkdev.io)

<!-- all-shields/header-badges:END -->

Create a Node CLI with this user-friendly boilerplate. Use this repository as a template for your new npm command line interface project.

This is a [GitHub template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/). You can fork it or [use it as a template](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/generate) to start a new project with this repository as a hello-world base.
I hate starting new projects from an empty template: I often miss the correct configuration, README instructions, or code samples. Using this repository as a template solves that problem.

## 🎁 Support: Donate

> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

<!-- all-shields/sponsors-badges:START -->

[![Donate Paypal](https://img.shields.io/badge/donate-paypal-005EA6.svg?style=for-the-badge&logo=paypal)](https://www.paypal.me/ptkdev) [![Donate Ko-Fi](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?style=for-the-badge&logo=ko-fi)](https://ko-fi.com/ptkdev) [![Donate Github Sponsors](https://img.shields.io/badge/donate-sponsors-ea4aaa.svg?style=for-the-badge&logo=github)](https://github.com/sponsors/ptkdev) [![Donate Patreon](https://img.shields.io/badge/donate-patreon-F87668.svg?style=for-the-badge&logo=patreon)](https://www.patreon.com/join/ptkdev) [![Donate Bitcoin](https://img.shields.io/badge/BTC-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg?style=flat-square&logo=bitcoin)](https://ptk.dev/img/icons/menu/bitcoin_wallet.png) [![Donate Ethereum](https://img.shields.io/badge/ETH-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg?style=flat-square&logo=ethereum)](https://ptk.dev/img/icons/menu/ethereum_wallet.png)

<!-- all-shields/sponsors-badges:END -->

## 📎 Menu

- 💡 [Features](#-features)
- 🚀 [How to use](#-usage)
- 📚 [Documentation](#-documentation)
- 🔨 [Developer Mode](#-developer-mode)
-   - 🏁 [Run Project](#-run-project)
-   - 💾 [Setup Project](#-setup-project)
-   - 🚀 [Deploy](#-deploy)
- 👨‍💻 [Contributing](#-contributing)
- 🐛 [Known Bugs](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- 🍻 Community:
    - <img src="https://raw.githubusercontent.com/ptkdev/dotfiles/main/assets/social_telegram.png" height="18px"> Telegram ([🇬🇧 English](http://t.me/ptkdev_support) | [🇮🇹 Italian](http://t.me/ptkdev_support_italian))
    - <img src="https://raw.githubusercontent.com/ptkdev/dotfiles/main/assets/social_discord.png" height="18px"> [Discord](http://discord.ptkdev.io) ([🇬🇧 English](https://discord.gg/jqUSGPKdmA) | [🇮🇹 Italian](https://discord.gg/SJFcbvG6RU) | [🇵🇱 Polish](https://discord.gg/25vg4VFhb7))
    - <img src="https://raw.githubusercontent.com/ptkdev/dotfiles/main/assets/social_twitter.png" height="18px"> [Twitter](http://twitter.com/ptkdevio)

## 💡 Features

- [✔️] Easy to use
- [✔️] MIT License
- [✔️] Create a CLI package for npm
- [✔️] Friendly boilerplate + GitHub templates
- [✔️] TypeScript + TSPaths preconfigured
- [✔️] User-friendly folder tree
- [✔️] Prettier and ESLint preconfigured
- [✔️] all-contributors-cli and all-shields-cli preconfigured
- [✔️] Jest tests preconfigured
- [✔️] Full async code
- [✔️] GitHub and VS Code dotfiles preconfigured
- [✔️] Translations: 🇬🇧 🇮🇹 🇵🇱 (Help me ❤️)

## 🚀 Usage

1. Install cli package globally: `npm install @ptkdev/node-cli-boilerplate -g`
2. Run anywhere: `node-cli-boilerplate`

You can use npx, example: `npx @ptkdev/node-cli-boilerplate`

## 🔨 Developer Mode

#### 🏁 Run Project

1. Clone this repository or download [nightly](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/archive/nightly.zip), [beta](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/archive/beta.zip) or [stable](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/archive/main.zip).
2. Run `npm install`
3. Run `npm run dev` for watch mode

If you want to try the CLI locally:

4. Run `npm run release`
5. Run `npm link` (on unix/mac use `sudo npm link`)
6. Run `node-cli-boilerplate` anywhere to execute the command line tool

To uninstall it, run `npm unlink` (on Unix/macOS use `sudo npm unlink`)

#### 💾 Setup Project

If you want to replace all strings (e.g., package name, author, URLs, etc.) in Markdown files, source files, and other files in this project, edit `setup.json` with the correct values and run `npm run setup`.

#### 🚀 Deploy

To create an npm package:

- Run `npm run release`
- Run `npm publish`

## 📚 Documentation

Run `npm run docs`

## 👑 Backers and Sponsors

Thanks to all our backers! 🙏 Donate $3 or more via [PayPal](https://www.paypal.me/ptkdev), [Ko-fi](https://ko-fi.com/ptkdev), or [GitHub Sponsors](https://github.com/sponsors/ptkdev), and send me an [email](mailto:support@ptkdev.io) with your avatar and URL.

[![](https://api.ptkdev.io/backers/sponsor1.png?)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png?)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png?)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png?)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png?)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png?)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png?)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png?)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png?)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png?)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png?)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png?)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png?)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png?)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png?)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png?)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png?)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png?)](https://api.ptkdev.io/backers/sponsor15.html) [![](https://api.ptkdev.io/backers/backer1.png?)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png?)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png?)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png?)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png?)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png?)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png?)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png?)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png?)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png?)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png?)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png?)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png?)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png?)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png?)](https://api.ptkdev.io/backers/backer15.html) [![](https://api.ptkdev.io/backers/backer16.png?)](https://api.ptkdev.io/backers/backer16.html) [![](https://api.ptkdev.io/backers/backer17.png?)](https://api.ptkdev.io/backers/backer17.html) [![](https://api.ptkdev.io/backers/backer18.png?)](https://api.ptkdev.io/backers/backer18.html) [![](https://api.ptkdev.io/backers/backer19.png?)](https://api.ptkdev.io/backers/backer19.html) [![](https://api.ptkdev.io/backers/backer20.png?)](https://api.ptkdev.io/backers/backer20.html) [![](https://api.ptkdev.io/backers/backer21.png?)](https://api.ptkdev.io/backers/backer21.html) [![](https://api.ptkdev.io/backers/backer22.png?)](https://api.ptkdev.io/backers/backer22.html) [![](https://api.ptkdev.io/backers/backer23.png?)](https://api.ptkdev.io/backers/backer23.html) [![](https://api.ptkdev.io/backers/backer24.png?)](https://api.ptkdev.io/backers/backer24.html) [![](https://api.ptkdev.io/backers/backer25.png?)](https://api.ptkdev.io/backers/backer25.html) [![](https://api.ptkdev.io/backers/backer26.png?)](https://api.ptkdev.io/backers/backer26.html) [![](https://api.ptkdev.io/backers/backer27.png?)](https://api.ptkdev.io/backers/backer27.html) [![](https://api.ptkdev.io/backers/backer28.png?)](https://api.ptkdev.io/backers/backer28.html) [![](https://api.ptkdev.io/backers/backer29.png?)](https://api.ptkdev.io/backers/backer29.html)

## 👨‍💻 Contributing

I ❤️ contributions! I will happily accept your pull request! (**IMPORTANT**: Only to nightly branch!) Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4?s=100" width="100px;" alt="Patryk Rzucidło"/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/ptkdev-boilerplate/node-cli-boilerplate/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/node-cli-boilerplate/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/node-cli-boilerplate/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if donations allow it, I would like to share some of the success with those who helped me the most. To me, open source means sharing code, sharing development knowledge, and sharing donations!

## 🦄 Other Projects

<!-- all-shields/projects-badges1:START -->

[![](https://img.shields.io/badge/%F0%9F%92%BB%20My-Portfolio-3498db.svg?style=flat&logo=)](https://ptk.dev/)

<!-- all-shields/projects-badges1:END -->

<!-- all-shields/projects-badges2:START -->

[![](https://img.shields.io/badge/%F0%9F%A6%92%20Tools-Node%20Logger-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/ptkdev-logger) [![](https://img.shields.io/badge/%F0%9F%A6%8C%20Tools-All%20Shields%20CLI-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/all-shields-cli) [![](https://img.shields.io/badge/%F0%9F%96%A5%EF%B8%8F%20Tools-Aspect%20Ratio%2021%3A9-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/chrome-extension-aspectratio219) [![](https://img.shields.io/badge/%F0%9F%9B%A1%20Tools-Badges%3A%20Available%20on-9b59b6.svg?style=flat&logo=)](https://availableon.badge.ptkdev.io/) [![](https://img.shields.io/badge/%F0%9F%90%BE%20Tools-JSON%20Token%20Replace-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/json-token-replace) [![](https://img.shields.io/badge/%F0%9F%90%8D%20Tools-ESLint%3A%20snakecasejs-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/eslint-plugin-snakecasejs)

<!-- all-shields/projects-badges2:END -->

<!-- all-shields/projects-badges3:START -->

[![](https://img.shields.io/badge/%F0%9F%9A%A7%20WebComponents-My%20Collection-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components) [![](https://img.shields.io/badge/%F0%9F%94%96%20Bot-AboutMeInfo-1FA0F2.svg?style=flat&logo=)](https://github.com/ptkdev/aboutmeinfo-telegram-bot) [![](https://img.shields.io/badge/%E2%8F%B1%20Bot-QuizQuickAnswer-FEC91A.svg?style=flat&logo=)](https://github.com/ptkdev/quizquickanswer-telegram-game-bot) [![](https://img.shields.io/badge/%F0%9F%93%9A%20Bot-GameBookChat-34495e.svg?style=flat&logo=)](https://t.me/gamebookchatbot) [![](https://img.shields.io/badge/%F0%9F%8E%A8%20Themes-VSCode-f1c40f.svg?style=flat&logo=)](https://github.com/ptkdev/vscode-theme-dark-blood)

<!-- all-shields/projects-badges3:END -->

<!-- all-shields/projects-badges4:START -->

[![](https://img.shields.io/badge/%F0%9F%91%94%20Boilerplate-Svelte-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=svelte) [![](https://img.shields.io/badge/%F0%9F%91%94%20Boilerplate-WebComponents-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=webcomponent) [![](https://img.shields.io/badge/%F0%9F%91%94%20Boilerplate-BOT-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=bot) [![](https://img.shields.io/badge/%F0%9F%91%94%20Boilerplate-Node-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=node) [![](https://img.shields.io/badge/%F0%9F%92%85%20App-Me%20in%20Gifs-2ecc71.svg?style=flat&logo=)](https://meingifs.pics/) [![](https://img.shields.io/badge/%F0%9F%93%B1%20App-Stickers-2ecc71.svg?style=flat&logo=)](https://github.com/ptkdev/ptkdev-stickers#-installation)

<!-- all-shields/projects-badges4:END -->

## 💫 License

- Code and Contributions have **MIT License**
- Images and logos have **CC BY-NC 4.0 License**
- Documentation and translations have **CC BY 4.0 License**

###### Copyleft (c) 2026 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>
