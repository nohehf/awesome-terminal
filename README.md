# awesome-terminal :rainbow:
![terminal.png](https://github.com/nohehf/awsome-terminal/blob/main/terminal.png?raw=true)
This is a quick guide to set up an awesome terminal that will change your life (or not but it's definitely worth the try).
After completing the following your terminal will have:
- Awsome theme (colors) & more syntax coloring with minimalist style
- Icons
- Live git status in the command line (status, branch...)
- Auto-suggestion while typing commands
- Cool aliases like `..` instead of `cd ..`
- Infinite customizations possibilities!
- ...

*Please note that this guide is strongly opinionated, as it is my setup, but you can still customize it a lot afterward don't worry.*

For windows, I recommend using wsl2 + windows terminal (download it in the Microsoft store).

### Customizing your terminal emulator
First, you can set up your preferred terminal theme & font:  
If you wanna use windows terminal here is my ~~[settings.json]() config file~~ TODO
#### Theme
For the theme, I like to use Atom one dark, but feel free to use any other one.
```json
{
    "name": "Atom One Dark",
    "background": "#282C34",
    "foreground": "#CCCCCC",
    "black": "#000000",
    "blue": "#61AFEF",
    "brightBlack": "#5C6370",
    "brightBlue": "#61AFEF",
    "brightCyan": "#56B6C2",
    "brightGreen": "#98C379",
    "brightPurple": "#C678DD",
    "brightRed": "#E06C75",
    "brightWhite": "#FFFFFF",
    "brightYellow": "#D19A66",
    "cyan": "#56B6C2",
    "green": "#98C379",
    "purple": "#C678DD",
    "red": "#E06C75",
    "white": "#ABB2BF",
    "yellow": "#D19A66"
}
```
#### Fonts
For fonts, if you want the full compatibility with powerlevel10k (to support all icons) you need to use any font from [nerd fonts](https://www.nerdfonts.com).
I like to use JetBrainsMono [click to download](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/JetBrainsMono.zip) *I then install "JetBrainsMono Nerd Font Mono" and set it as the default terminal font*.

### Installs
#### Zsh
To follow you either need to have or install zsh and git.
To check if they are already installed run: `zsh` and `git` 
If they are not installed run the following to install them:
```bash
sudo apt update 
sudo apt install git zsh -y
```
#### ohmyzsh
Run the following to install ohmyzsh:
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
*note: if you have any issue installing it please refer to [ohmyzsh official website](https://ohmyz.sh/)*

#### powerlevel10k
First refresh zsh with `exec zsh`
Then run the following commands to install powerlevel10k:
```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```
*note: if you have any issue installing it please refer to [powerlevel10k official repo](https://github.com/romkatv/powerlevel10k)*

#### Auto-suggestions & syntax highlighting:
Run the following command to install `zsh-autosuggestions`:
```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
Run the following command to install `zsh-syntax-highlighting`:
```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
#### .zshrc
Now that you have zsh replacing bash your `.bashrc` is replaced by `.zshrc`
You have to change a few things in it to make it work. Open `.zshrc` in your favorite text editor and :
1. Find the line with *plugins=* in your .zshrc and add this (or just take mine later):
```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
``` 
2. (optionnal) Change time-stamps (if you are european like me you probably use dd/mm/yyyy format) by adding:
```bash
HIST_STAMPS="dd/mm/yyyy"
```
3. (optional) Activate completion waiting dots, add the following:
```bash
COMPLETION_WAITING_DOTS="true”
```

## Some very optionated advise:
#### Github cli
To manage your GitHub repos I recommend using the gh cli, it allows you to easily create repos, links your account with git...
 you can install it and authenticate to your account with the following commands:
 ```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt update
sudo apt install gh
gh auth login
```
*for more info see [https://cli.github.com/](https://cli.github.com/).
#### Nodejs & pnpm
If you use nodejs I **strongly** recommend using pnpm both as a packet manager (instead of yarn or npm) and a node version manager. It is super fast for package managing, good for global installs, and the version manager allows you to switch node versions without the pain. It's also fully compatible with npm so no worries if your co-workers don't use it (yet)
To install it and enable node lts as default run the following commands:
```bash
curl -fsSL https://get.pnpm.io/install.sh] | sh -
sudo pnpm env use --global lts
```
Then refer to the [pnpm docs](https://pnpm.io/motivation) to use it (but it's most likely like npm).

## Endnote:
Thank you for taking the time of reading through this, hope you will enjoy your brand new terminal! :rainbow:
Please consider **leaving feedback** as an issue, and feel free to **contribute**.
Last I will thank [@garrytrinder]() that inspired me to write this with his setup [see article](https://garrytrinder.github.io/2020/12/my-wsl2-windows-terminal-setup) :star:.
