const shell = require("shelljs")

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git")
  shell.exit(1)
}

let one, two
const user = "maathi"
const repo = "cute-dots"
const dirs = [
  "polybar",
  "rofi",
  "bspwm",
  "i3",
  "lf",
  "ranger",
  "zsh",
  "awesome",
  "dwm",
  "mpv",
  "alacritty",
  "zathura",
  "dunst",
  "picom",
]
// shell.cd(path)

shell.exec(`git clone https://github.com/${user}/${repo}`)
// let a = shell.exec(`find ${path} -regex .*\.sh`)
// one = Date.now()
// let find1 = shell.exec(`find ${repo} -type d -name polybar`)
// two = Date.now()
// console.log(find1, two - one)
console.log("********************")
one = Date.now()
// let find2 = shell.find(repo)
let paths = shell.find(repo)

// let found = paths.filter((f) => f.match(/.*polydbar$/))

let newDirs = dirs.filter((d) =>
  paths.find((f) => f.match(new RegExp(`./*${d}$`)))
)
two = Date.now()
console.log(">>>>>>>>>>>", newDirs, two - one)
