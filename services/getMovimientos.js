const URL_API = "https://movimientos.onrender.com/movimientos"
const header = document.getElementById("cabecera");
const body = document.getElementById("body");

export const getMovimientos = async () => {
    try 
    {
     
        const {data} = await axios.get(URL_API);
        const th = Object.keys(data[0]);
        for (let i = 0; i < th.length; i++)
        {
            
            header.innerHTML += `
            <th class = "th">${th[i]} </th>`

            body.innerHTML += `
            <tr class = "tr">
                <td class = "td">${data[i].id}</td>
                <td class = "td">${data[i].description}</td>
                <td class = "td">${data[i].precio}</td>
                <td class = "td">${data[i].type}</td>
                <td class = "button">${data[i].action}</td>

            </tr>`
        }

    } catch (error) {
        console.log(error);
        return [];
    }
}

