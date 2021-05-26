import React, { Component } from "react";

class TableBody  extends Component {

    state ={

   People:[
       {
       id:1,
       fullName: "hassan a",
       PhoneNumber:"555",
       EmailAdress: "abb@aa"
   },
   {
    id:2,
    fullName: "kh a",
    PhoneNumber:"33113",
    EmailAdress: "kh@kk"
},
{
    id:3,
    fullName: "mk a",
    PhoneNumber:"3312113",
    EmailAdress: "mk@mk"
},

        ],
    };

    render() 
    { 
   const TableRow = this.state.People.map((row) =>
                                        <tr key= {row.id}>
                                            <td>{row.fullName}</td>
                                           <td>{row.PhoneNumber}</td>
                                             <td>{row.EmailAdress}</td>
                                             <td></td>
                                             </tr>
                                            )
        return ( 
<tbody>
{TableRow}
</tbody>

         );
    }
}
 
export default TableBody;