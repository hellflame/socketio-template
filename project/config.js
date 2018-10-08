import {compatible_version} from "./utils/meta"

export const socketio = {
  path: `/v${compatible_version}/ws`,
  serveClient: false,
  pingInterval: 10000, // ms
  pingTimeout: 5000    // ms
}
