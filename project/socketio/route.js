import Http from "http"
import SocketIO from "socket.io"
import {socketio} from "@/config"
import event_binder from "./hooks/event"
import event_loop from "./hooks/loop"

export default (app) => {
  const http = Http.Server(app)
  const io = SocketIO(http, socketio)
  event_binder(io)
  event_loop(io)
  return http
}
