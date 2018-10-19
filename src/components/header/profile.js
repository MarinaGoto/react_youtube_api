import React from 'react';
class Profile extends React.Component {
    render(){
        return(
            <div className="user_profile">
                <div className="user">
                    <div className="name">Marina</div>
                    <div className="image">
                        <img src="https://scontent.fosl1-1.fna.fbcdn.net/v/t1.0-9/22310554_2056505667905881_6274626765414205678_n.jpg?_nc_cat=0&oh=f2ee3a31daaa741a9383d951e0521900&oe=5BE72BB7" alt="profile"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;