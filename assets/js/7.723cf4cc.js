(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{405:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"awesome-terminal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awesome-terminal"}},[t._v("#")]),t._v(" awesome-terminal 🌈")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/nohehf/awsome-terminal/blob/main/terminal.png?raw=true",alt:"terminal.png"}}),t._v("\nThis is a quick guide to set up an awesome terminal that will change your life (or not but it's definitely worth the try).\nAfter completing the following your terminal will have:")]),t._v(" "),a("ul",[a("li",[t._v("Awsome theme (colors) & more syntax coloring with minimalist style")]),t._v(" "),a("li",[t._v("Icons")]),t._v(" "),a("li",[t._v("Live git status in the command line (status, branch...)")]),t._v(" "),a("li",[t._v("Auto-suggestion while typing commands")]),t._v(" "),a("li",[t._v("Cool aliases like "),a("code",[t._v("..")]),t._v(" instead of "),a("code",[t._v("cd ..")])]),t._v(" "),a("li",[t._v("Infinite customizations possibilities!")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("p",[a("em",[t._v("Please note that this guide is strongly opinionated, as it is my setup, but you can still customize it a lot afterward don't worry.")])]),t._v(" "),a("p",[t._v("For "),a("strong",[t._v("windows")]),t._v(", I recommend using wsl2 + windows terminal (download it in the Microsoft store).")]),t._v(" "),a("p",[t._v("For "),a("strong",[t._v("macOs")]),t._v(", I recommend using Iterm2, coping the app in two versions, one for arm64 and one with rosetta.\nyou can then add different commands depending on the architecture in your "),a("code",[t._v(".zshrc")]),t._v(" like here with pnpm for arm64 and nvm for rosetta (feel free to put anythig in the if statement, this is just an example):")]),t._v(" "),a("div",{staticClass:"language-BASH extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("arch"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm64"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PNPM_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/nohehf/Library/pnpm"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PNPM_HOME")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.nvm"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/bash_completion"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/bash_completion"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm bash_completion")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),a("h3",{attrs:{id:"customizing-your-terminal-emulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-your-terminal-emulator"}},[t._v("#")]),t._v(" Customizing your terminal emulator")]),t._v(" "),a("p",[t._v("First, you can set up your preferred terminal theme & font:"),a("br"),t._v("\nIf you wanna use windows terminal here is my "),a("s",[a("a",{attrs:{href:""}},[t._v("settings.json")]),t._v(" config file")]),t._v(" TODO")]),t._v(" "),a("h4",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" Theme")]),t._v(" "),a("p",[t._v("For the theme, I like to use Atom one dark, but feel free to use any other one.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Atom One Dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#282C34"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foreground"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#CCCCCC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"black"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#61AFEF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightBlack"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#5C6370"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightBlue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#61AFEF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightCyan"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#56B6C2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightGreen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#98C379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightPurple"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#C678DD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightRed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#E06C75"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightWhite"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FFFFFF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightYellow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#D19A66"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cyan"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#56B6C2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"green"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#98C379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"purple"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#C678DD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#E06C75"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"white"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ABB2BF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"yellow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#D19A66"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"fonts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fonts"}},[t._v("#")]),t._v(" Fonts")]),t._v(" "),a("p",[t._v("For fonts, if you want the full compatibility with powerlevel10k (to support all icons) you need to use any font from "),a("a",{attrs:{href:"https://www.nerdfonts.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("nerd fonts"),a("OutboundLink")],1),t._v(".\nI like to use JetBrainsMono "),a("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/JetBrainsMono.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("click to download"),a("OutboundLink")],1),t._v(" "),a("em",[t._v('I then install "JetBrainsMono Nerd Font Mono" and set it as the default terminal font')]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"installs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installs"}},[t._v("#")]),t._v(" Installs")]),t._v(" "),a("h4",{attrs:{id:"zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[t._v("#")]),t._v(" Zsh")]),t._v(" "),a("p",[t._v("To follow you either need to have or install zsh and git.\nTo check if they are already installed run: "),a("code",[t._v("zsh")]),t._v(" and "),a("code",[t._v("git")]),t._v("\nIf they are not installed run the following to install them:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v(" -y\n")])])]),a("h4",{attrs:{id:"ohmyzsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ohmyzsh"}},[t._v("#")]),t._v(" ohmyzsh")]),t._v(" "),a("p",[t._v("Run the following to install ohmyzsh:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),a("p",[a("em",[t._v("note: if you have any issue installing it please refer to "),a("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ohmyzsh official website"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"powerlevel10k"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#powerlevel10k"}},[t._v("#")]),t._v(" powerlevel10k")]),t._v(" "),a("p",[t._v("First refresh zsh with "),a("code",[t._v("exec zsh")]),t._v("\nThen run the following commands to install powerlevel10k:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source ~/powerlevel10k/powerlevel10k.zsh-theme'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("~/.zshrc\n")])])]),a("p",[a("em",[t._v("note: if you have any issue installing it please refer to "),a("a",{attrs:{href:"https://github.com/romkatv/powerlevel10k",target:"_blank",rel:"noopener noreferrer"}},[t._v("powerlevel10k official repo"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"auto-suggestions-syntax-highlighting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-suggestions-syntax-highlighting"}},[t._v("#")]),t._v(" Auto-suggestions & syntax highlighting:")]),t._v(" "),a("p",[a("em",[t._v("note: for macOs I strongly reccomand using fig instead of zsh-autosuggestions")]),t._v(" : "),a("a",{attrs:{href:"https://fig.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("see Fig"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Run the following command to install "),a("code",[t._v("zsh-autosuggestions")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zsh-users/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("custom}")]),t._v("/plugins/zsh-autosuggestions\n")])])]),a("p",[t._v("Run the following command to install "),a("code",[t._v("zsh-syntax-highlighting")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("custom}")]),t._v("/plugins/zsh-syntax-highlighting\n")])])]),a("h4",{attrs:{id:"zshrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zshrc"}},[t._v("#")]),t._v(" .zshrc")]),t._v(" "),a("p",[t._v("Now that you have zsh replacing bash your "),a("code",[t._v(".bashrc")]),t._v(" is replaced by "),a("code",[t._v(".zshrc")]),t._v("\nYou have to change a few things in it to make it work. Open "),a("code",[t._v(".zshrc")]),t._v(" in your favorite text editor and :")]),t._v(" "),a("ol",[a("li",[t._v("Find the line with "),a("em",[t._v("plugins=")]),t._v(" in your .zshrc and add this (or just take mine later):")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("git zsh-autosuggestions zsh-syntax-highlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("(optionnal) Change time-stamps (if you are european like me you probably use dd/mm/yyyy format) by adding:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HIST_STAMPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dd/mm/yyyy"')]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("(optional) Activate completion waiting dots, add the following:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COMPLETION_WAITING_DOTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"true”\n')])])]),a("h2",{attrs:{id:"some-very-optionated-advise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-very-optionated-advise"}},[t._v("#")]),t._v(" Some very optionated advise:")]),t._v(" "),a("h4",{attrs:{id:"github-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-cli"}},[t._v("#")]),t._v(" Github cli")]),t._v(" "),a("p",[t._v("To manage your GitHub repos I recommend using the gh cli, it allows you to easily create repos, links your account with git...\nyou can install it and authenticate to your account with the following commands:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-add-repository https://cli.github.com/packages\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gh\ngh auth login\n")])])]),a("p",[t._v("*for more info see "),a("a",{attrs:{href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cli.github.com/"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"nodejs-pnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-pnpm"}},[t._v("#")]),t._v(" Nodejs & pnpm")]),t._v(" "),a("p",[t._v("If you use nodejs I "),a("strong",[t._v("strongly")]),t._v(" recommend using pnpm both as a packet manager (instead of yarn or npm) and a node version manager. It is super fast for package managing, good for global installs, and the version manager allows you to switch node versions without the pain. It's also fully compatible with npm so no worries if your co-workers don't use it (yet)\nTo install it and enable node lts as default run the following commands:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://get.pnpm.io/install.sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" use --global lts\n")])])]),a("p",[t._v("Then refer to the "),a("a",{attrs:{href:"https://pnpm.io/motivation",target:"_blank",rel:"noopener noreferrer"}},[t._v("pnpm docs"),a("OutboundLink")],1),t._v(" to use it (but it's most likely like npm).")]),t._v(" "),a("h2",{attrs:{id:"endnote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endnote"}},[t._v("#")]),t._v(" Endnote:")]),t._v(" "),a("p",[t._v("Thank you for taking the time of reading through this, hope you will enjoy your brand new terminal! 🌈\nPlease consider "),a("strong",[t._v("leaving feedback")]),t._v(" as an issue, and feel free to "),a("strong",[t._v("contribute")]),t._v(".\nLast I will thank "),a("a",{attrs:{href:""}},[t._v("@garrytrinder")]),t._v(" that inspired me to write this with his setup "),a("a",{attrs:{href:"https://garrytrinder.github.io/2020/12/my-wsl2-windows-terminal-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("see article"),a("OutboundLink")],1),t._v(" ⭐️.")])])}),[],!1,null,null,null);s.default=n.exports}}]);