import {echo, check_good_bye} from "./echo"

const connection_map = {
  echo: {
    on: echo,
    down: check_good_bye
  }
}

export default (io) => {
  io.on("connection", socket => {
    for(const [event, labor] of Object.entries(connection_map)){
      socket.on(event, labor.on(io, socket))
      if(labor.down){
        socket.on("disconnect", labor.down(io, socket))
      }
    }
  })
}
