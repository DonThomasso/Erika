fetch("products.json")
.then(function(response){
   return response.json();

})

.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out +=`
         <tr>
            <td>${product.icon} </td>
            <td>${product.name} </td>
            <td>${product.dimension} </td>
            <td>${product.x} </td>
            <td>${product.y} </td>
            <td>${product.z} </td>
            
         </tr>
      `;
   }

   placeholder.innerHTML = out;
})


///////////////////////////////////////////////////////////////////


