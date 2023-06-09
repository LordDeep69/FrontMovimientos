import  {getMovimientos}  from "./services/getMovimientos.js";

document.addEventListener("DOMContentLoaded", async()=>{
    const movimientos  = await getMovimientos();
    console.log(movimientos);
})

