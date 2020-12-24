import React from "react";
import '../style/style.Home.css'
import Image from "react-bootstrap/Image";

export default class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Image
                    className="jz_about_img"
                    src="https://drive.google.com/uc?export=view&id=1kO0MsMif0RB5t2gOUCON7Z1ze9KDmfPL"
                    fluid />
            </div>
            // <div id="wrapper">
            //     <div className="background">
            //         <div className="transbox content ">
            //             <h1> About </h1>
            //             <p>
            //                 Salutations! <br/><br/>
            //
            //
            //             </p>
            //         </div>
            //     </div>
            // </div>



        )
    }
}
