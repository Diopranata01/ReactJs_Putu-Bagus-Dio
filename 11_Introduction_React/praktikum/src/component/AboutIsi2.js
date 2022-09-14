import image from '../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

const HomeIsi2 = () => {
    return(
        <>
        <div className="container">
            <div className="row pt-5 pb-5">
                <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
                    <div className="about-anne">
                        <p>
                        Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.<br/><br/>
                        Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis. <br/><br/>
                        Here’s few technologies I’ve been working with recently :
                        </p>
                    </div>
                    <div>
                        <tbody>
                            <table className="tabel-anne">
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & Github</td>
                                    <td>Sigle Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </table>
                        </tbody>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
                    <div className="foto-id text-lg-right text-md-center text-sm-center">
                        <img src={image}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeIsi2