import React from "react";
import Image from "react-bootstrap/Image";
// import '../style/style.navbar.css'
// import '../style/style.Home.css'
import '../style/style.Contact.css'

export default class ContactInfo extends React.Component {
    render() {
        return (
            <div>
                        <h1> Contact </h1> <br/>
                        <p>
                            {/* Email */}
                            <h5> Email  </h5>
                            jenny.a.zhu@gmail.com
                            <br/><br/>

                            {/* LinkedIn */}
                            <h5> LinkedIn </h5>
                            <a href={"https://www.linkedin.com/in/jenny-zhu-74872089/"} >
                                https://www.linkedin.com/in/jenny-zhu-74872089/
                            </a>
                            <br/><br/>

                            {/* GitHub */}
                            <h5> GitHub </h5>
                            <a href={" https://github.com/zhuje"} >
                                https://github.com/zhuje
                            </a>

                            <br/><br/>


                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                        </p>
                    </div>


        )
    }
}
