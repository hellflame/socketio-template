import Express from "express"

import {es_winston_logger, es_winston_error_logger, common_logger} from "@/utils/log"
import {compatible_version} from "@/utils/meta"
import {parser} from "@/utils/arg_parse"
import router from "@/pages/route"
import socketio from "@/socketio/route"

const app = Express()
const parse = parser().parseArgs()
const version_path = `/v${compatible_version}`,
  _port = parse.port,
  _host = parse.host

app.use(es_winston_logger)

app.use(version_path, router)

app.use(es_winston_error_logger)

const app_with_socketio = socketio(app)

app_with_socketio.listen(_port, _host, () => {
  common_logger.info(`started on http://${_host}:${_port}${version_path}`)
})
