/*
    Electronizer

    Copyright (c) 2021, Bill Rocha
    Developer: Bill Rocha <prbr@ymail.com> | billrocha.netlify.com
    Git: https://github.com/pedra/electronizer

 */

const path = require('path')
const jump = process.env.ELECTRON_ENV ? '../' : '../../'
const root = path.resolve(__dirname, '../')

module.exports = {
    mode: process.env.ELECTRON_ENV ? 'dev' : 'prod',
    visible: false,
    download: "https://billrocha.netlify.com/download",
    external: {
        file: `${root}/${jump}/assets/file`,
        db: `${root}/${jump}/assets/db`,
        bin: `${root}/${jump}/assets/bin`
    },
    path: root,
    app: {
        path: `${root}/app`,
        db: `${root}/app/db.js`,
        module: `${root}/app/module`
    },
    desktop: {
        path: `${root}/desktop`,
        assets: `${root}/desktop/assets`,
        module: `${root}/desktop/module`,
        img: `${root}/desktop/assets/img`,
        tray: `${root}/desktop/assets/img/tray`,
        ico: `${root}/desktop/assets/img/ico`,
    },
    host: {
        enable: true,
        path: `${root}/host`,
        module: `${root}/host/module`,
        view: `${root}/host/view`,
        static: `${root}/host/public`,
        site: "http://localhost",
        port: 8080
    },
    socket: {
        enable: true,
        path: `${root}/host/module/message`,
        channel: 'qzc'
    }
}