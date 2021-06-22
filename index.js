const shell = require("shelljs")

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git")
  shell.exit(1)
}

let one, two
const path = "cute-dots"
// shell.cd(path)

shell.exec("git clone https://github.com/maathi/cute-dots")
// let a = shell.exec(`find ${path} -regex .*\.sh`)
one = Date.now()
let find1 = shell.exec(`find ${path} -name polybar`)
two = Date.now()
console.log(find1, two - one)

one = Date.now()
let find2 = shell.find(path).filter((f) => f.match(/.*polybar$/))
two = Date.now()
console.log(find2, two - one)
