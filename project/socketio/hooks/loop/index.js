import {echo, another_echo} from "./broadcast"


const loop_maps = [
  {
    interval: 10000,
    event: echo
  },
  {
    interval: 2000,
    event: another_echo
  }
]

export default (io) => {
  for(const task of loop_maps){
    setInterval(()=>{
      task.event(io)
    }, task.interval)
  }
}
