import React from "react";
import '../style/style.navbar.css'
import Image from "react-bootstrap/Image";
import '../style/style.Projects.css'

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid jz_projects_title_container ">
                    <h1 className="jz_projects_title"> Projects </h1>
                    <a href={"https://github.com/zhuje"} className="lead jz_projects_text_color">
                        GitHub
                    </a>
                </div>
                <div className="container-fluid jz_projects_container">
                    {/*  MovieMatch   */}
                    <div className="jz_projects_project-container">
                        <a href={"http://movie-match-angular.herokuapp.com/"}>
                            <h1 className="jz_projects_subtitles"> MovieMatch </h1>
                        </a>
                        <Image
                            className="jz_about_img"
                            src="https://drive.google.com/uc?export=view&id=1PwiXF2JE_zuzKGhPeVASxooQIXmXjrCH"
                            fluid>
                        </Image>
                        <br/><br/>
                        <h5 className="jz_projects_heading"> Description </h5>
                        <p> A web application and social media platform where you can save and
                            share a list of your favorite movies. </p>
                        <h5 className="jz_projects_heading"> Specifications </h5>
                        <ul>
                            <li>
                                <b> MEAN stack (MongoDB, Express, Angular, NodeJS) Full Stack </b>
                            </li>
                            <li>
                                <b> Single Page Application </b> implemented for smooth transitions
                                when navigating between pages
                            </li>
                            <li>
                                <b> RESTful APIs </b> were used to expose the server-side
                                application.
                            </li>
                            <li>
                                <b> Data Modeling </b> was applied for NodeJS and MongoDB
                                communication
                                via Mongoose.
                            </li>
                            <li>
                                <b> Sessions </b> was used to maintain user identity throughout the
                                application.
                            </li>
                            <li>
                                <b> Conditional Rendering of components </b> on the client-side
                                application to
                                restrict access depending on user type (standard client or
                                administrator
                                user).
                            </li>
                            <li>
                                <b> Reactive Component </b> respond to the size of the viewport.
                            </li>
                        </ul>
                        <h5 className="jz_projects_heading"> GitHub </h5>
                        <ul>
                            <li>
                                <a href={"https://github.com/zhuje/cs5610_finalProject_angular_client"}>
                                    Client (Angular) Frontend
                                </a>
                            </li>
                            <li>
                                <a href={"https://github.com/zhuje/cs5610_finalProject_nodeJS_server"}>
                                    Server (NodeJS) Backend
                                </a>
                            </li>
                            <li>
                                Other Applications in Use:
                                Deployed on Heroku, MongoDB Atlas used a cloud-based database
                            </li>
                        </ul>
                        <br/><br/><br/>

                        {/*  Personal Website    */}
                        <a href={"/home"}>
                            <h1 className="jz_projects_subtitles "> Personal Website </h1>
                        </a>
                        <Image
                            className="jz_about_img"
                            src="https://drive.google.com/uc?export=view&id=1TDRmzCcqbXnvtek-IbEuhFhJ8R2DBmVJ"
                            fluid>
                        </Image>
                        <br/><br/>
                        <h5 className="jz_projects_heading"> Description </h5>
                        <p> Jenny Zhu's Personal Website </p>
                        <h5 className="jz_projects_heading"> Specifications </h5>
                        <ul>
                            <li>
                                <b> React </b>
                            </li>
                            <li>
                                React Routing
                            </li>
                            <li>
                                Responsive to Viewport Resizing
                            </li>
                        </ul>
                        <h5 className="jz_projects_heading"> GitHub </h5>
                        <ul>
                            <li>
                                <a href={"https://github.com/zhuje/zhuje_personal_website"}>
                                    React Frontend
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

        )
    }
}
