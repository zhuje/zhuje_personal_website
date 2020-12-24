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

                        <h1> Contact </h1> <br/>
                        <p>
                            {/* Email */}
                            <h5> Email  </h5>
                            jenny.a.zhu@gmail.com
                            <br/><br/>
                            <br/><br/>

                            {/* LinkedIn */}
                            <h5> LinkedIn </h5>
                            <a href={"https://www.linkedin.com/in/jenny-zhu-74872089/"} className={"jz_contact_link"}>
                                https://www.linkedin.com/in/jenny-zhu-74872089/
                            </a>
                            <br/><br/>
                            <br/><br/>

                            {/* GitHub */}
                            <h5> GitHub </h5>
                            <a href={" https://github.com/zhuje"} className={"jz_contact_link"}>
                                https://github.com/zhuje
                            </a>

                            <br/><br/>
                            <br/><br/>

                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
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
