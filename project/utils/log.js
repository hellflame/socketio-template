import ExpressWinston from "express-winston"
import Winston from "winston"

export const es_winston_logger = ExpressWinston.logger({
  level: "info",
  transports: [
    new Winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
})

export const es_winston_error_logger = ExpressWinston.errorLogger({
  level: "info",
  transports: [
    new Winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
})

// custom logger
const { combine, timestamp, label, printf } = Winston.format
const custom_format = printf(info => {
  return JSON.stringify({
    level: info.level,
    message: info.message,
    label: info.label,
    timestamp: info.timestamp
  })
})

export const create_logger = (level="info", label_="customize", save_to_file=null) => {
  const transports = [
    new Winston.transports.Console()
  ]
  if(save_to_file){
    transports.push(new Winston.transports.File({filename: save_to_file, level}))
  }
  return Winston.createLogger({
    level,
    transports,
    format: combine(
      label({label: label_}),
      timestamp(),
      custom_format
    )
  })
}

export const common_logger = create_logger("info", "common")
