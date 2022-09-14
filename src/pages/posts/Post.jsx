import React from "react";
import "../posts/Post.css";

const Post = () =>{
    return(
        <React.Fragment>
        <div className="first">
            <div className="card">
                <img className="card-img-top" src="https://kettocdn.gumlet.io/media/campaign/372000/372126/image/wid01ce2a07f56735f26b62aac7c317696e57f1c3f9.png?w=320&dpr=1.3" 
                alt="baby" />
                    <div className="card-body">
                        <h5 className="card-title">Help 7yrs Old Paarnikka Beat Cancer</h5>
                        <p className="card-text">We are raising funds for the treatment of 6yrs old little angel Paarnikka. 
                        She is fighting with a rare type of cancer “Neuroblastoma” for the 4th time. </p>
                        <i className="fa-solid fa-comment">
                            <a href="#">Comments</a>
                        </i>
                        <a href="#" className="btn btn-primary">Donate</a>
                    </div>
            </div>
        </div>
            <div className="second">
                <div className="card">
                  <img class="card-img-top" src="https://kettocdn.gumlet.io/media/campaign/281000/281759/image/wid60211afcc8a19.png?w=320&dpr=1.3" 
                  alt="baby 2" />
                <div className="card-body">
                    <h5 className="card-title">Offer A Helping Hand To Support Rubina Rodgers' Treatment</h5>
                    <p className="card-text">Need Urgent Attention! Here’s a 
                    quick update on Rubina Rodgers’ treatment.
                    This last week, Rubina was advised to run a full brain MRI,
                     which revealed 4 new tumours in her brain.</p>
                    <i className="fa-solid fa-comment">
                        <a href="#">Comments</a>
                    </i>
                    <a href="#" className="btn btn-primary">Donate</a>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;