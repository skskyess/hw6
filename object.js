    const container = document.querySelector('#container') 
    const GetRes = async(url) => { 
        const res  = await fetch(url); 
        if(!res.ok){ 
            throw new Error(`status: ${res.status}`); 
        } 
        return await res.json() 
    } 
     
    GetRes('menu.json') 
        .then(data=> { 
            console.log(data); 
            for(let key in data) { 
                const hw = document.createElement("div"); 
                const zagolovok = data[key].zagolovok; 
                const desc = data[key].desc; 
                const price = data[key].price; 
     
                hw.innerHTML = `<div class="hw"> 
                    <h2>Имя: ${zagolovok}</h2> 
                    <p>Inst ${desc}</p> 
                    <h4>Цена: ${price}</h4> 
                </div>` 
                container.append(hw) 
             
            } 
        })