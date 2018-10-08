import {socketio_logger as logger} from "@/utils/log"

export function echo(io, socket){
  return (msg) => {
    logger.info(msg)
    socket.emit('echo', `${msg} from server`)
  }
}

export function check_good_bye(io, socket){
  return () => {
    logger.info(`${socket.id} disconnect`)
  }
}

