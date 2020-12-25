import React from "react";
// import '../style/style.navbar.css'
import '../style/style.Resume.css'

export default class Resume extends React.Component {
    render() {
        return (
            <div className="container-fluid jz_resume_container">
                <h1 className="jz_resume_heading"> Resume </h1>
                <a href={"https://drive.google.com/file/d/1W2GFuJBmr3chIpeBqh_Nq-C05gYe9ufN/view?usp=sharing"} className="float-right">
                    PDF Version
                </a>
            </div>

        )
    }
}
