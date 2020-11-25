const fs = require('fs');

// fs.readFile('./file.txt',(err,content)=>{console.log(content)})

// const content = fs.readFileSync('./file.txt');


//問題：下面這段code有什麼問題？要怎麼讓start()能夠印出data？
const getData = () =>{
    fs.readFile('./data.json',(err,content)=>{
        return content;
    })
}

const start = () =>{
    const data = getData();
    console.log(data);
}

start();// undefined

//1.callback
const getData_callback = (callback)=>{
    fs.readFile('./data.json',(err,content)=>{
        if(err){
            return console.log(err);
        }
        content = JSON.parse(content);
        if(callback)
            callback(content)
    })
}

const start_callback = ()=>{
    getData_callback(success=>{
        console.log('callback',success)
    })
}

start_callback();
//2.promise
const getData_promise = ()=>{
    return promise = new Promise((res,rej)=>{
        fs.readFile('./data.json',(err,content)=>{
            if(err){
                rej(err);
            }
            content = JSON.parse(content);
            return res(content);
            
        })
    })
}

const start_promise = ()=>{
    getData_promise()
        .then((res)=>console.log('promise',res))
}

start_promise();

//3.async await
const getData_async = ()=>{
    return promise = new Promise((res,rej)=>{
        fs.readFile('./data.json',(err,content)=>{
            if(err){
                rej(err);
            }
            content = JSON.parse(content);
            return res(content);
            
        })
    })
}

const start_async = async()=>{
    let data = await getData_async();
    console.log('async',data);
}

start_async();
