import React from "react";
import '../style/style.navbar.css'

export default class Resume extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1> Resume </h1>
                <a href={"https://drive.google.com/file/d/1W2GFuJBmr3chIpeBqh_Nq-C05gYe9ufN/view?usp=sharing"} className="float-right">
                    PDF Version
                </a>
            </div>

        )
    }
}
