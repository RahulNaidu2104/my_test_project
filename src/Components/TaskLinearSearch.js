import React from 'react';
function LinearSearch()
{
    let array = [[2,4,6,8],7];
    let array1 = array[0];
    let number = array[1];
    console.log(array1,number);
    let result;
    for(let i = 0;i<array1.length;i++)
        {
            if (number == array1[i])
                {
                    result = document.write("true" + "<br>");
                    break;
                }
            else
                {
                    if (i == (array1.length - 1))
                        {
                            result = document.write("false" + "<br>");
                            break;
                        }
                    else
                        {
                            continue;
                        }
                }
        }
        return result;
}
export default LinearSearch;