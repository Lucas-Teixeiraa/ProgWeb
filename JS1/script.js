
function faztudao(){
    document.write(`<div class="container">`)
    for(let i = 1; i<=10;i++){
        
        document.write(`<table border=\"1\">`)
        document.write("<thead>")
        document.write(`<td colspan="2" style="font-weight:bold"> Produtos de ${i} </td>`)
        document.write("</thead>")
        document.write("<tbody>")
        
        for(let j = 1; j<=10; j++){
            document.write("<tr>")
            document.write(`<td> ${i}x${j} </td>`)
            document.write(`<td> ${i*j}</td>`)
            document.write("</tr>")
        }
        document.write("</tbody>")
        document.write("</table>")
    }
    document.write("</div>")
}