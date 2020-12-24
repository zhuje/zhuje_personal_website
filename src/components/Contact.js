import React from "react";
import Image from "react-bootstrap/Image";
// import '../style/style.navbar.css'
// import '../style/style.Home.css'
import '../style/style.Contact.css'

export default class Contact extends React.Component {
    render() {
        return (
            // <div className="container-fluid">
            //     <div>
            //     </div>
            //     <Image
            //         className="jz_about_img"
            //         src="https://drive.google.com/uc?export=view&id=1wfv8XmLLCFXoIm6n3hpObJe-7WCBO9Jw"
            // fluid />  <div className="jz_contact_transbox"> <h1> "Hello World" </h1>  </div>
            // </div>

            <div id="jz_contact_wrapper">

                {/* Display for Medium+ Viewport */}
                <div className="jz_contact_background d-none d-md-block">
                    <div className="jz_contact_transbox ">
                        <h1> Contact </h1>
                        <p>
                            Email :
                            <br/><br/>
                            LinkedIn :
                            <br/><br/>
                        </p>
                    </div>
                </div>

                {/* Display for Viewport Smaller Than Medium */}
                <div>
                    <div className="jz_contact_transbox_sm  d-md-none">
                        hello world
                    </div>

                </div>
            </div>

        )
    }
}
