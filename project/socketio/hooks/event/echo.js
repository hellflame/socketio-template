

export function echo(io, socket){
  return (msg) => {
    console.log(msg)
    socket.emit('echo', `${msg} from server`)
  }
}

export function check_good_bye(io, socket){
  return () => {
    console.log(`${socket.id} disconnect`)
  }
}

