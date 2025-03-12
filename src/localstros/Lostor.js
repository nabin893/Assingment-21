const getdataLStor=()=>{
    const jobdet = localStorage.getItem('ajobs')
    if(jobdet){
        return JSON.parse(jobdet)
    }
    return[]
}

const setdata =(id)=>{
    const data=getdataLStor()
    data.push(id)
    localStorage.setItem('ajobs',JSON.stringify(data))
    

}


export{
    getdataLStor,
    setdata

}