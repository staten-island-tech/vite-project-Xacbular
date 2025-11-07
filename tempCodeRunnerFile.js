const dnsRecords = [
  { address: "amazon.com", dns: "205.251.242.103" },
  { address: "apple.com", dns: "17.253.144.10" },
  { address: "bbc.com", dns: "151.101.64.81" },
  { address: "chat.openai.com", dns: "104.18.12.123" },
  { address: "cnn.com", dns: "151.101.1.67" },
  { address: "discord.com", dns: "162.159.137.232" },
  { address: "github.com", dns: "140.82.113.3" },
  { address: "google.com", dns: "142.250.72.14" },
  { address: "instagram.com", dns: "157.240.229.174" },
  { address: "microsoft.com", dns: "40.113.200.201" },
  { address: "netflix.com", dns: "52.41.250.12" },
  { address: "nasa.gov", dns: "198.49.245.141" },
  { address: "nytimes.com", dns: "151.101.1.164" },
  { address: "reddit.com", dns: "151.101.1.140" },
  { address: "roblox.com", dns: "128.116.114.3" },
  { address: "stanford.edu", dns: "171.67.215.200" },
  { address: "youtube.com", dns: "142.250.190.46" },
];

// function decToBinary(dec) {
//   let binary = "";
//   if (dec === 0) {
//     return 0;
//   }
//   while (dec > 0) {
//     let remainder = dec % 2;
//     binary = remainder + binary;
//     dec = Math.floor(dec / 2);
//   }
//   return binary;
// }

// console.log(decToBinary(9));

// function findDNS(records, target) {
//   let low = 0;
//   let high = records.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (records[mid].address === target) {
//       return records[mid].dns;
//     } else if (records[mid].address < target) {
//       console.log("lower");
//     }
//   }
// }
// console.log(decToBinary(dnsRecords));
// // console.log(findDNS(dnsRecords, "google.com"));

console.log(dnsRecords[1].dns);
