import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
    const router = useRouter();
    let activeItem;
    if(router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    } else if (router.pathname === "/admin") {
        activeItem = "admin";
    }  else if (router.pathname === "/test") {
        activeItem = "test";
    }

    function goLink(e, data) {
        if(data.name === "home") {
            router.push("/");
        } else if (data.name === "about") {
            router.push("/about");
        } else if (data.name === "admin") {
            router.push("/admin");
        } else if (data.name === "test") {
            router.push("/test");
        }
    };
    
    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={goLink}
            />
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={goLink}
            />
            <Menu.Item
                name='admin'
                active={activeItem === 'admin'}
                onClick={goLink}
            />
            <Menu.Item
                name='test'
                active={activeItem === 'test'}
                onClick={goLink}
            />
      </Menu>
    )
};
