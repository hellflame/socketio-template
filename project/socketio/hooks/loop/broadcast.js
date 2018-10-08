export function echo(io){
  io.emit("broadcast", +new Date())
}

export function another_echo(io){
  io.emit("find", "Me?")
}
