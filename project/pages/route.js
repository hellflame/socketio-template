import Express from "express"

import {monitor_page} from "@/pages/service/monitor"

const _router = Express.Router()

_router.get("/monitor", monitor_page)

export default _router

