import React from 'react';

function StringCount(data)
{   let obj= {};
    for(let i=0;i<data.name.length;i++)
        {
            
            let count = 0;
            for (let j=0;j<data.name.length;j++)
                {
                    if (data.name[i] == data.name[j] && i > j)
                        {
                            break;
                        }
                    if (data.name[i] == data.name[j])
                        {
                            count++;
                        }      
                } 
            if(count > 0)
                {
                obj[data.name[i]] = count;
                }
        }
        console.log(obj);
        for (let key in obj) {
            document.write(key, ":", obj[key], "<br>");
          }
}

export default StringCount;