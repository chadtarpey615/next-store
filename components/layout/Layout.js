import Navbar from "../Navbar/Navbar"


function Layout(props) {
    return (
        <div>
            <Navbar />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;