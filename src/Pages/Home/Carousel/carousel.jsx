import React from 'react';
import './carousel.scss';

const Carousel = () => {
    return (
        <div className="movieCarousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/gai-gia-lam-chieu-v-16142435114530.jpg" className="d-block w-100" alt="..." />
                        <a className="play-btn" data-toggle="modal" data-target="#exampleModal1">
                            <img src="/img/play-video.png" alt />
                        </a>
                        <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">
                                                <img src="/img/close.png" alt="" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <iframe width="898" height="530" src="https://www.youtube.com/embed/krgcyk2rjFc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="overlay" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/lua-deu-gap-lua-dao-16105107337344.jpg" className="d-block w-100" alt="..." />
                        <a className="play-btn" data-toggle="modal" data-target="#exampleModal2">
                            <img src="/img/play-video.png" alt />
                        </a>
                        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">
                                                <img src="/img/close.png" alt="" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <iframe width="898" height="530" src="https://www.youtube.com/embed/T36HGZagV5w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="overlay" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/tazza-16137903733874.jpg" className="d-block w-100" alt="..." />
                        <a className="play-btn" data-toggle="modal" data-target="#exampleModal3">
                            <img src="/img/play-video.png" alt />
                        </a>
                        <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">
                                                <img src="/img/close.png" alt="" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <iframe width="898" height="530" src="https://www.youtube.com/embed/gqcpChNYH10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="overlay" />
                    </div>
                </div>
                <a className="carousel-control-prev control" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <img src="/img/back-session.png" className="left" alt />
                </a>
                <a className="carousel-control-next control" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <img src="/img/next-session.png" className="right" alt />
                </a>
            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <img src="/img/close.png" alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <iframe width="898" height="530" src="https://www.youtube.com/embed/krgcyk2rjFc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
