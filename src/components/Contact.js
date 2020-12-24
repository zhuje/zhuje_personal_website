import React from "react";
import Image from "react-bootstrap/Image";
// import '../style/style.navbar.css'
// import '../style/style.Home.css'
import '../style/style.Contact.css'
import ContactInfo from "./ContactInfo";

export default class Contact extends React.Component {
    render() {
        return (
            <div id="jz_contact_wrapper jz_contact_link">

                {/* Display for Medium+ Viewport */}
                <div className="jz_contact_background d-none d-md-block">
                    <div className="jz_contact_transbox ">
                        <ContactInfo />
                    </div>
                </div>

                {/* Display for Viewport Smaller Than Medium */}
                <div>
                    <div className="jz_contact_transbox_sm  d-md-none">
                        <ContactInfo/>
                    </div>
                </div>

            </div>

        )
    }
}
