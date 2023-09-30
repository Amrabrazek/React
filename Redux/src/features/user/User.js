import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changefirstname, changelastname } from './userActions';

const User = ({ first_name, last_name, changefirstname, changelastname }) => {
const [editedFirstName, setEditedFirstName] = useState(first_name);
const [editedLastName, setEditedLastName] = useState(last_name);

const handleFirstNameChange = (e) => {
setEditedFirstName(e.target.value);
};

const handleLastNameChange = (e) => {
setEditedLastName(e.target.value);
};

const handleSave = () => {
changefirstname(editedFirstName);
changelastname(editedLastName);
};

return (
<div>
    <h1>User</h1>
    <input type="text" value={editedFirstName} onChange={handleFirstNameChange} />
    <br />
    <input type="text" value={editedLastName} onChange={handleLastNameChange} />
    <br />
    <button onClick={handleSave}>SAVE</button>
</div>
);
};

const mapStateToProps = (state) => ({
first_name: state.user.first_name,
last_name: state.user.last_name,
});

const mapDispatchToProps = {
changefirstname,
changelastname,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);