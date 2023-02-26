import React, { useState } from "react";

const ChangeTitle = () => {

    const [title, setTitle] = useState('');

    function onTitleChange() {
        if (title == "") {
          alert("Please add new title first");
          return;
        }
        document.title = title;
      }

return (
    <div>
        <input 
            type="text"
            value={title}
            onChange={event => {
              setTitle(event.target.value);
          }}>
        </input>
        <button onClick={onTitleChange}>Change Title</button>
    </div>
);

};

export default ChangeTitle;