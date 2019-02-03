const dns = require('dns')
dns.lookup('turkcell.com.tr',(_, address, _1)=>{
    console.log(`adress: ${address}, family: ${_1}`);
});

dns.resolve4('turkcell.com.tr',(_, address)=>{
    console.log(`resolve4 -> adress: ${address}`);
});

dns.resolve6('turkcell.com.tr',(err, addresses)=>{
    if(err){
        console.error(`error: ${err}`)
        return;
    }
    console.log(`resolve6 -> adresses: ${addresses}`);
});

dns.resolveMx('turkcell.com.tr',(_, address)=>{
    let jadd = JSON.stringify(address)
    console.log(`.tr resolveMx -> adress: ${jadd}`);
});

dns.resolveMx('turkcell.com',(_, address)=>{
    let jadd = JSON.stringify(address)
    console.log(`resolveMx -> adress: ${jadd}`);
});

dns.resolveMx('turkcell.com.eu',(_, address)=>{
    let jadd = JSON.stringify(address)
    console.log(`.eu resolveMx -> adress: ${jadd}`);
})

dns.reverse('86.108.193.199',(err, hosts)=>{
    hosts.forEach(console.log)
})
