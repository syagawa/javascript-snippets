const os = require("os")

const getIps = (family) => {
  const netInfos = os.networkInterfaces()
  let family_ = family
  if(!family_){
    family_ = "IPv4"
  }
  const ips = []
  for(let key in netInfos){
    const info = netInfos?.[key]?.[0]
    if(info && info.family === family_){
      ips.push(info.address)
    }
  }
  return ips
}

console.log(getIps("IPv4"))
console.log(getIps("IPv6"))
