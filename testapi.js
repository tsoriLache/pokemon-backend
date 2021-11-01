const axios = require('axios').default;
const x = async()=>{
    const res = await axios.put('http://localhost:8080/pokemon/catch/555', { pokemon: { name: 'ssss',
    height: 22,
    weight: 345}}, {
        headers: {
          'username': 'tsori lache'
        }
      })
}


const y = async()=>{
    await axios.delete('http://localhost:8080/pokemon/release/3555')   
}

const z = async()=>{
    let res=await axios.get('http://localhost:8080/pokemon/', {
        headers: {
          'username': '11'
        }
      })  
}


const r = async()=>{
    let res=await axios.post('http://localhost:8080/pokemon/signin',{username:'tsori lache'}, {
      headers: {
        'username': 'tsori lache'
      }
    })  
}
x()