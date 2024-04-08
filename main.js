const dotenv = require("dotenv").config()

const url = "https://discord.com/api/v9/users/@me/lootboxes/open"
const token = process.env.token
const delay_ms = 2000

let amount = 0

const options = {
    method: "POST",
    headers: {
        'authority': 'discord.com',
        'accept': '*/*',
        'accept-language': 'en-GB',
        'authorization': token,
        'origin': 'https://discord.com',
        'referer': 'https://discord.com/channels/1222747973205758002/1224417703100551169',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9037 Chrome/108.0.5359.215 Electron/22.3.26 Safari/537.36',
        'x-debug-options': 'bugReporterEnabled',
        'x-discord-locale': 'en-GB',
        'x-discord-timezone': 'Europe/London',
        'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDM5Iiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDUiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJpYTMyIiwic3lzdGVtX2xvY2FsZSI6ImVuLUdCIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIGRpc2NvcmQvMS4wLjkwMzkgQ2hyb21lLzEyMC4wLjYwOTkuMjkxIEVsZWN0cm9uLzI4LjIuNyBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMjguMi43IiwiY2xpZW50X2J1aWxkX251bWJlciI6MjgyMDY4LCJuYXRpdmVfYnVpbGRfbnVtYmVyIjo0NTg3MiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=',
    }
}

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}

function openBox() {
    fetch(url, options)
        .then(function(response) {
            amount += 1

            console.log(`Amount opened: ${amount}`)
        })

        .catch(function(error) {
            console.log(error)
        })
}

async function main() {
    while (true) {
        openBox()
    
        await sleep(delay_ms)
    }
}

main()