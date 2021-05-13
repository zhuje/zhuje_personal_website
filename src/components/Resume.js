import React from "react";
// import '../style/style.navbar.css'
import '../style/style.Resume.css'
import {Link} from "react-router-dom";

export default class Resume extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <div className="container-fluid  ">
                    <div className="row">

                        {/* GRID SPACING */}
                        <div className="col-lg-2">
                        </div>

                        {/* BODY */}
                        <div className="col-12 col-lg-8">
                            {/*    RESUME HEADING    */}
                            <div className="container-fluid ">
                                <h1 className="jz_resume_heading"> Resume </h1>
                                <a href={"https://drive.google.com/file/d/1W2GFuJBmr3chIpeBqh_Nq-C05gYe9ufN/view?usp=sharing"}
                                   style={{color: "black"}}>
                                    PDF Version
                                </a>
                            </div>
                            <br/>

                            {/*     EDUCATION   */}
                            <div className="container-fluid">
                                <h1 className="jz_resume_subheading"> Education </h1>
                            </div>

                            <div class="container-fluid" style={{margin: '20px'}}>
                                <h3 className="jz_resume_subheading">Master of Science in Computer
                                    Science </h3>
                                <h5 className="jz_resume_subheading">Northeastern </h5>
                                Boston, MA <br/>
                                Expected Graduation May 2022 <br/>
                                <b> GPA : </b> 3.88/4.0 <br/>
                                <b> Related Coursework: </b>
                                Master's Project: Human Centered Machine Learning,
                                Human Computer Interactions,
                                Web Development,
                                Foundations of Software Engineering,
                                Object-Oriented Design,
                                Algorithms,
                                Computer Systems,
                                Discrete Math and Data Structures

                                <br/><br/>

                                <h3 className="jz_resume_subheading"> Bachelor of Science in
                                    Biology,
                                    <br/> Minor in Psychology </h3>
                                <h5 className="jz_resume_subheading"> Northeastern </h5>
                                Boston, MA <br/>
                                2010 - 2014 <br/>
                                <b> GPA : </b> 3.4/4.0 <br/>
                                <b> Awards : </b>
                                Joe Martin Scholarship for Bank of America,
                                Northeastern Undergraduate Research Grant for an Independent
                                Study in Stem Cell Markers for Neural Plasticity <br/>
                                <b> Publications: </b>
                                Sîrbulescu, R.F., Ilieş, I., Vitalo, A.G., Trull, K., <b> Zhu,
                                J., </b>
                                Traniello, I.M., Zupanc, G.K.H.: Adult stem cells in
                                the knifefish cerebellum. &nbsp;
                                <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/dneu.22210">
                                    Developmental Neurobiology 75, 39-65 (2015),
                                    doi:10.1002/dneu.22210
                                </a>
                            </div>

                            {/*     TECHNICAL KNOWLEDGE     */}
                            <div>
                                <h1 className="jz_resume_subheading"> Technical Knowledge </h1>
                            </div>
                            <div className="container-fluid" style={{margin: '20px'}}>
                                <h3 className="jz_resume_subheading"> Web Development </h3>
                                FrontEnd: React, Angular <br/>
                                Middleware: NodeJS, Java <br/>
                                BackEnd: MongoDB, minor exposure to SQL
                                <br/> <br/>
                                <h3 className="jz_resume_subheading"> Languages </h3>
                                Java, Python, C++, C, Javascript, Typescript, HTML, CSS
                                <br/> <br/>
                                <h3 className="jz_resume_subheading"> Operating Systems </h3>
                                Linux, MacOS
                            </div>


                            {/*    PROJECTS     */}
                            <div>
                                <Link to={"/projects"}>
                                    <h1 style={{color: "black"}} className="jz_resume_subheading">
                                        Projects </h1>
                                </Link>
                            </div>
                            <div className="container-fluid">
                                <h6 style={{margin: '20px'}}>
                                    Navigate to the
                                    <Link to={"/projects"}>
                                        <i> Projects Page. </i>
                                    </Link>
                                </h6>
                            </div>

                            {/*    WORK EXPERIENCE */}
                            <div>
                                <h1 className="jz_resume_subheading"> Work Experience </h1>
                            </div>
                            <div className="container-fluid" style={{margin: '20px'}}>
                                <h3 className="jz_resume_subheading"> Clinical Research Coordinator
                                    III </h3>
                                Massachusetts General Hospital Cancer Center <br/>
                                2016 - 2019 <br/>
                                Boston, MA <br/>
                                Project managed a national prostate cancer clinical trial by ensuring studies
                                are conducted within protocol constraints and with
                                good clinical practice.
                                <br/><br/>
                                <h3 className="jz_resume_subheading"> Research Assistant </h3>
                                Department of Pathology, Brigham and Women’s Hospital <br/>
                                2014-2015 <br/>
                                Boston, MA <br/>
                                Conduct scientific research through laboratory experiments and
                                procedures to investigate ovarian cancer through use of
                                murine models to study the effects of genomic variances.
                                <br/><br/>
                            </div>
                            {/* Grid Spacing */}
                            <div className="col-lg-2">
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
