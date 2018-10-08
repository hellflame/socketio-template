import {resolve} from "@/utils/common"

export function monitor_page(req, res, next) {
  return res.sendFile(resolve("pages/templates/monitor.html"))
}
