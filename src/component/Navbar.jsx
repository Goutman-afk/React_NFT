import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">
                    NFT MARKET
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Trang chủ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đề mục 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đề mục 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đề mục 3</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                    </form>
                    <div className="buttons">
                        <a href="#" className="snip1582">
                            <i className="fa fa-sign-in me-1"></i>Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;