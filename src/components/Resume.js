import React from "react";
// import '../style/style.navbar.css'
import '../style/style.Resume.css'
import {Link} from "react-router-dom";

export default class Resume extends React.Component {
    render() {
        return (
            <div>

                {/*    Resume Heading    */}
                <div className="container-fluid jz_resume_container">
                    <h1 className="jz_resume_heading"> Resume </h1>
                    <a href={"https://drive.google.com/file/d/1W2GFuJBmr3chIpeBqh_Nq-C05gYe9ufN/view?usp=sharing"}
                       style={{color: "black"}}>
                        PDF Version
                    </a>
                </div>

                {/*     Education   */}
                <div className="container-fluid jz_resume_container_body ">
                    <div className="row">
                        <div className="col-12 col-md-6">

                            <img
                                src={"https://hughesmarino.com/wp-content/uploads/northeastern-university-seattle-headquarters-reception-area-spaces-we-love-hughes-marino.jpg"}
                                alt={"Northeastern University Image"} className="jz_resume_img"/>
                            <p style={{color: "grey"}}><i>Credit: hughesmarino.com </i></p>
                        </div>

                        <div className="col-12 col-md-6">
                            <h1> Education </h1>
                            <h3>Master of Science in Computer Science </h3>
                            <h5>Northeastern </h5>
                            Boston, MA <br/>
                            Expected Graduation May 2022 <br/>
                            <b> GPA : </b> 3.85/4.0 <br/>
                            <b> Related Coursework: </b>
                            Web Development, Foundations of Software Engineering,
                            Object-Oriented Design, Algorithms, Computer Systems, Discrete Math and
                            Data Structures, Human Computer Interactions, Human-Center Machine
                            Learning

                            <br/><br/>

                            <h3> Bachelor of Science in Biology, <br/> Minor in Psychology </h3>
                            <h5> Northeastern </h5>
                            Boston, MA <br/>
                            2010 - 2014 <br/>
                            <b> GPA : </b> 3.4/4.0 <br/>
                            <b> Awards : </b>
                            Joe Martin Scholarship for Bank of America,
                            Northeastern Undergraduate Research Grant for an Independent
                            Study in Stem Cell Markers for Neural Plasticity <br/>
                            <b> Publications: </b>
                            Sîrbulescu, R.F., Ilieş, I., Vitalo, A.G., Trull, K., <b> Zhu, J., </b>
                            Traniello, I.M., Zupanc, G.K.H.: Adult stem cells in
                            the knifefish cerebellum. &nbsp;
                            <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/dneu.22210">
                                Developmental Neurobiology 75, 39-65 (2015),
                                doi:10.1002/dneu.22210
                            </a>
                        </div>
                    </div>
                </div>

                {/*    Projects     */}
                <div>
                    <div className="container-fluid jz_resume_container_body ">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img
                                    src="https://drive.google.com/uc?export=view&id=13Iq4x7vl0M9a42b_kk_etoX_KeUNENjE"
                                    alt={"Code Image"} className="jz_resume_img"/>
                            </div>
                            <div className="col-12 col-md-6">
                                <Link to={"/projects"}><h1 style={{color: "black"}}> Projects </h1>
                                </Link>
                                <p> Click the <i> Projects </i> heading above to navigate to the
                                    Projects page.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
