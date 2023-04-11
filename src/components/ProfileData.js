import React from 'react';

const profileData = () => {

    const myFunction = () => {
console.log("my function working...")
    }



    return (
        <div>
               <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzyQcBu_7EH0wSSW14L4Edxsj3X8AJKcy3UBpQE33iMrZ8Z3SNXmPpEZyqsl898vYwI&usqp=CAU" alt="" />
      <h3>Asif Hasan</h3>
      <span onClick={ myFunction } >Cinematographer</span>
     </div>
        </div>
    );
};

export default profileData;