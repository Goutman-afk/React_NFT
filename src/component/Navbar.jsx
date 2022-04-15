import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                    NFT MARKET
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Sản phẩm</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Đề mục 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Đề mục 3</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                    </form>
                    <div className="buttons">
                        <NavLink to="/" className="snip1582">
                            <i className="fa fa-sign-in me-1"></i>
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;