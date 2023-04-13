const Header = () => {
    return ( 
        <header>
            <div className="row justify-content-between align-items-center">
                <div>
                    <h1>News</h1>
                </div>

                <div>
                    <button>
                        <i className="bi bi-bell-fill"></i>
                    </button>
                    <button>
                        <i className="bi bi-brightness-high"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;