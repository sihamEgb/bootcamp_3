const input = require('readline-sync');

    /*
    defining data
    */

   let resturants = [
       {name: 'burger bar',food:"meat", kosher:true, lemehadrin:true},
       {name: 'crisby burger',food:"meat", kosher:false, lemehadrin:false},
       {name: 'burger boss',food:"meat", kosher:true, lemehadrin:false},
       {name: 'pizza mama pasta',food:"pizza", kosher:true, lemehadrin:true},
       {name: 'pizza and stuff',food:"pizza", kosher:true, lemehadrin:false},
       {name: 'pizza krembo',food:"pizza", kosher:false, lemehadrin:false},
    
    ];

    let q1 = input.question("How many people are you going with?");

    if( (isNaN(q1) ))
    {
        console.log('error message - invalid input');
        throw 'stop execution';
    }
    
    let q2 = input.keyInYN("Should it be Kosher?");
    let q22 = false;
    console.log(typeof(q2));

    if(typeof (q2) != "boolean" )
    {
        console.log('error message - invalid input');
        throw 'stop execution';
    }
    if (q2 === true)
    {
        q22 = input.keyInYN("Should it be Kashrut Lemehadrin?");
        if(typeof (q22) != "boolean" )
        {
        console.log('error message - invalid input');
        throw 'stop execution';
        }
    }
  
    let food = ['meat', 'pizza'];
    q3 = input.keyInSelect(food, 'What kind of food do you want?');
    
    for(let key in resturants)
    {
        let obj = resturants[key];
        if ((obj.food === food[q3]) && (obj.kosher === q2)  && (obj.lemehadrin === q22)  )
        {
            console.log(obj.name);
        }
    }
  

